var __ = require('underscore');
var util = require('util');
var utils = require('../../../util/utils');
var VNetUtil = require('../../../util/vnet.util');
var EndPointUtil = require('../../../util/endpointUtil');
var ResourceUtils = require('../resource/resourceUtils');
var TagUtils = require('../tag/tagUtils');
var PublicIP = require('./publicip');
var Subnet = require('./subnet');
var VirtualMachine = require('./../vm/virtualMachine');
var NIC = require('./nic');
var $ = utils.getLocaleString;

function LoadBalancer(cli, serviceClients) {
  this.cli = cli;
  this.serviceClients = serviceClients;
  this.networkResourceProviderClient = serviceClients.networkResourceProviderClient;
  this.log = this.cli.output;

  // constants
  this.DEFAULT_PROTOCOL = 'Tcp';
  this.DEFAULT_FRONTEND_PORT = 80;
  this.DEFAULT_BACKEND_PORT = 80;
  this.DEFAULT_FLOATING_IP = false;
  this.DEFAULT_IDLE_TIMEOUT = 4;
  this.DEFAULT_PROBE_PROTOCOL = 'Tcp';
  this.DEFAULT_PROBE_PORT = 80;
}

__.extend(LoadBalancer.prototype, {
  create: function (resourceGroupName, lbName, location, params, _) {
    var lb = this.get(resourceGroupName, lbName, _);
    if (lb) {
      throw new Error(util.format($('A load balancer with name "%s" already exists in the resource group "%s"'), lbName, resourceGroupName));
    }

    var lbProfile = {
      location: location
    };

    if (params.tags) {
      lbProfile.tags = TagUtils.buildTagsParameter(null, params);
    }

    var progress = this.cli.interaction.progress(util.format($('Creating load balancer "%s"'), lbName));
    try {
      this.networkResourceProviderClient.loadBalancers.createOrUpdate(resourceGroupName, lbName, lbProfile, _);
    } catch (e) {
      throw e;
    } finally {
      progress.end();
    }
    this.show(resourceGroupName, lbName, params, _);
  },

  list: function (resourceGroupName, _) {
    var progress = this.cli.interaction.progress($('Getting the load balancers'));
    var lbs = null;
    try {
      lbs = this.networkResourceProviderClient.loadBalancers.list(resourceGroupName, _);
    } finally {
      progress.end();
    }

    var output = this.cli.output;
    this.cli.interaction.formatOutput(lbs.loadBalancers, function (outputData) {
      if (outputData.length === 0) {
        output.warn($('No load balancers found'));
      } else {
        output.table(outputData, function (row, item) {
          row.cell($('Name'), item.name);
          row.cell($('Location'), item.location);
        });
      }
    });
  },

  show: function (resourceGroupName, lbName, params, _) {
    var lb = this.get(resourceGroupName, lbName, _);
    var output = this.log;
    var interaction = this.cli.interaction;

    if (lb) {
      var resourceInfo = ResourceUtils.getResourceInformation(lb.loadBalancer.id);

      if (!__.isEmpty(lb.loadBalancer.frontendIpConfigurations)) {
        var publicIPcrud = new PublicIP(this.cli, this.networkResourceProviderClient);
        for (var vipNum in lb.loadBalancer.frontendIpConfigurations) {
          var vip = lb.loadBalancer.frontendIpConfigurations[vipNum];
          if (vip.publicIpAddress) {
            var uriParts = utils.parseResourceReferenceUri(vip.publicIpAddress.id);
            var publicip = publicIPcrud.get(uriParts.resourceGroupName, uriParts.resourceName, _);
            vip.publicIpAddress.publicIpAllocationMethod = publicip.publicIpAddress.publicIpAllocationMethod;
            if (publicip.publicIpAddress.dnsSettings && publicip.publicIpAddress.dnsSettings.fqdn) {
              vip.publicIpAddress.fqdn = publicip.publicIpAddress.dnsSettings.fqdn;
            }
            if (publicip.publicIpAddress.ipAddress) {
              vip.publicIpAddress.actualPublicIpAddress = publicip.publicIpAddress.ipAddress;
            }
          }
        }
      }

      interaction.formatOutput(lb.loadBalancer, function (lb) {
        output.data($('Id:                          '), lb.id);
        output.data($('Name:                        '), lb.name);
        output.data($('Type:                        '), resourceInfo.resourceType);
        output.data($('Location:                    '), lb.location);
        output.data($('Provisioning state:          '), lb.provisioningState);
        if (!__.isEmpty(lb.tags)) {
          output.data($('Tags:                        '), TagUtils.getTagsInfo(lb.tags));
        }
        if (!__.isEmpty(lb.frontendIpConfigurations)) {
          output.data($('Frontend IP configurations:'), '');
          for (var vipNum in lb.frontendIpConfigurations) {
            var vip = lb.frontendIpConfigurations[vipNum];
            output.data($('   Name:                        '), vip.name);
            output.data($('   Provisioning state:          '), vip.provisioningState);
            if (vip.subnet) {
              output.data($('   Private IP allocation method:'), vip.privateIpAllocationMethod);
            }
            if (vip.publicIpAddress) {
              output.data($('   Public IP address id:        '), vip.publicIpAddress.id);
              output.data($('   Public IP allocation method: '), vip.publicIpAddress.publicIpAllocationMethod);
              if (vip.publicIpAddress.actualPublicIpAddress) {
                output.data($('   Public IP address:           '), vip.publicIpAddress.actualPublicIpAddress);
              }
              if (vip.publicIpAddress.fqdn) {
                output.data($('   FQDN:                        '), vip.publicIpAddress.fqdn);
              }
            }
            if (vip.privateIpAddress) {
              output.data($('   Private IP address:          '), vip.privateIpAddress);
            }
            if (vip.subnet) {
              output.data($('   Subnet:                      '), vip.subnet ? vip.subnet.id : '');
            }
            output.data($(''), '');
          }
        }
        if (!__.isEmpty(lb.backendAddressPools)) {
          output.data($('Backend address pools:'), '');
          for (var poolNum in lb.backendAddressPools) {
            var pool = lb.backendAddressPools[poolNum];
            output.data($('   Name:                      '), pool.name);
            output.data($('   Provisioning state:        '), pool.provisioningState);
            output.data($('   Backend IP configurations:  '), '');
            if (!__.isEmpty(pool.backendIpConfigurations)) {
              for (var ipConfigNum in pool.backendIpConfigurations) {
                var ipConfig = pool.backendIpConfigurations[ipConfigNum];
                output.data($('      '), ipConfig.id);
              }
            }
            output.data($(''), '');
          }
        }
        if (!__.isEmpty(lb.loadBalancingRules)) {
          output.data($('Load balancing rules:'), '');
          for (var ruleNum in lb.loadBalancingRules) {
            var rule = lb.loadBalancingRules[ruleNum];
            output.data($('   Name:                      '), rule.name);
            output.data($('   Provisioning state:        '), rule.provisioningState);
            output.data($('   Protocol:                  '), rule.protocol);
            output.data($('   Frontend port:             '), rule.frontendPort);
            output.data($('   Backend port:              '), rule.backendPort);
            output.data($('   Enable floating IP:        '), rule.enableFloatingIP.toString());
            output.data($('   Idle timeout in minutes:   '), rule.idleTimeoutInMinutes);
            output.data($('   Backend address pool:      '), rule.backendAddressPool ? rule.backendAddressPool.id : '');
            output.data($('   Probe:                     '), rule.probe ? rule.probe.id : '');
            output.data($('   Frontend IP configurations:'), '');
            if (!__.isEmpty(rule.frontendIPConfigurations)) {
              for (var loadBalancingRuleIpConfigNum in rule.frontendIPConfigurations) {
                var loadBalancingRuleIpConfig = rule.frontendIPConfigurations[loadBalancingRuleIpConfigNum];
                output.data($('      '), loadBalancingRuleIpConfig.id);
              }
            }
            output.data($(''), '');
          }
        }
        if (!__.isEmpty(lb.inboundNatRules)) {
          output.data($('Inbound NAT rules:'), '');
          for (var inboundRuleNum in lb.inboundNatRules) {
            var inboundNatRule = lb.inboundNatRules[inboundRuleNum];
            output.data($('   Name:                      '), inboundNatRule.name);
            output.data($('   Provisioning state:        '), inboundNatRule.provisioningState);
            output.data($('   Protocol:                  '), inboundNatRule.protocol);
            output.data($('   Frontend port:             '), inboundNatRule.frontendPort);
            output.data($('   Backend port:              '), inboundNatRule.backendPort);
            output.data($('   Enable floating IP:        '), inboundNatRule.enableFloatingIP.toString());
            output.data($('   Idle timeout in minutes:   '), inboundNatRule.idleTimeoutInMinutes);
            output.data($('   Backend IP Configuration:  '), inboundNatRule.backendIPConfiguration ? inboundNatRule.backendIPConfiguration.id : '');
            output.data($('   Frontend IP configurations:'), '');
            if (!__.isEmpty(inboundNatRule.frontendIPConfigurations)) {
              for (var inboundNatRuleIpConfigNum in inboundNatRule.frontendIPConfigurations) {
                var inboundRuleIpConfig = inboundNatRule.frontendIPConfigurations[inboundNatRuleIpConfigNum];
                output.data($('      '), inboundRuleIpConfig.id);
              }
            }
            output.data($(''), '');
          }
        }
        if (!__.isEmpty(lb.probes)) {
          output.data($('Probes:'), '');
          for (var probeNum in lb.probes) {
            var probe = lb.probes[probeNum];
            output.data($('   Name:                '), probe.name);
            output.data($('   Provisioning state:  '), probe.provisioningState);
            output.data($('   Protocol:            '), probe.protocol);
            output.data($('   Port:                '), probe.port);
            output.data($('   Interval in seconds: '), probe.intervalInSeconds);
            output.data($('   Number of probes:    '), probe.numberOfProbes);
            output.data($('   Load balancing rules:'), '');
            if (!__.isEmpty(probe.loadBalancingRules)) {
              for (var loadBalancingRuleNum in probe.loadBalancingRules) {
                var probeRule = probe.loadBalancingRules[loadBalancingRuleNum];
                output.data($('      '), probeRule.id);
              }
            }
            output.data($(''), '');
          }
        }
      });
    } else {
      if (output.format().json) {
        output.json({});
      } else {
        output.warn(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
      }
    }
  },

  get: function (resourceGroupName, lbName, _, message) {
    message = message || util.format($('Looking up the load balancer "%s"'), lbName);
    var progress = this.cli.interaction.progress(message);
    try {
      var lb = this.networkResourceProviderClient.loadBalancers.get(resourceGroupName, lbName, _);
      return lb;
    } catch (e) {
      if (e.code === 'ResourceNotFound') {
        return null;
      }
      throw e;
    } finally {
      progress.end();
    }
  },

  delete: function (resourceGroupName, lbName, params, _) {
    var lb = this.get(resourceGroupName, lbName, _);
    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s'), lbName, resourceGroupName));
    }

    if (!params.quiet && !this.cli.interaction.confirm(util.format($('Delete load balancer "%s"? [y/n] '), lbName), _)) {
      return;
    }

    var progress = this.cli.interaction.progress(util.format($('Deleting load balancer "%s"'), lbName));
    try {
      this.networkResourceProviderClient.loadBalancers.deleteMethod(resourceGroupName, lbName, _);
    } finally {
      progress.end();
    }
  },

  update: function (resourceGroupName, lbName, lbProfile, _) {
    var progress = this.cli.interaction.progress(util.format($('Updating load balancer "%s"'), lbName));
    try {
      this.networkResourceProviderClient.loadBalancers.createOrUpdate(resourceGroupName, lbName, lbProfile, _);
    } catch (e) {
      throw e;
    } finally {
      progress.end();
    }
  },

  createProbe: function (resourceGroupName, lbName, probeName, params, _) {
    var probeProfile = this._parseAndValidateProbe(probeName, params, true);
    var lb = this.get(resourceGroupName, lbName, _);
    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    var output = this.cli.output;
    var probe = utils.findFirstCaseIgnore(lb.loadBalancer.probes, {name: probeName});

    if (probe) {
      output.error(util.format($('A probe with name "%s" already exist'), probeName));
    } else {
      lb.loadBalancer.probes.push(probeProfile);
      this.update(resourceGroupName, lbName, lb.loadBalancer, _);
    }
  },

  listProbes: function (resourceGroupName, lbName, params, _) {
    var lb = this.get(resourceGroupName, lbName, _);
    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    var output = this.cli.output;
    var probes = lb.loadBalancer.probes;

    this.cli.interaction.formatOutput(probes, function (outputData) {
      if (outputData.length !== 0) {
        output.table(outputData, function (row, item) {
          row.cell($('Name'), item.name);
          row.cell($('Protocol'), item.protocol);
          row.cell($('Port'), item.port);
          row.cell($('Path'), item.requestPath || '');
          row.cell($('Interval'), item.intervalInSeconds);
          row.cell($('Count'), item.numberOfProbes);
        });
      } else {
        if (output.format().json) {
          output.json([]);
        } else {
          output.info($('No probes found'));
        }
      }
    });
  },

  deleteProbe: function (resourceGroupName, lbName, probeName, params, _) {
    var lb = this.get(resourceGroupName, lbName, _);
    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    var output = this.cli.output;
    var index = utils.indexOfCaseIgnore(lb.loadBalancer.probes, {name: probeName});

    if (index !== null) {
      if (!params.quiet && !this.cli.interaction.confirm(util.format($('Delete a probe "%s?" [y/n] '), probeName), _)) {
        return;
      }

      lb.loadBalancer.probes.splice(index, 1);
      this.update(resourceGroupName, lbName, lb.loadBalancer, _);
    } else {
      output.error(util.format($('A probe with name "%s" not found'), probeName));
    }
  },

  setProbe: function (resourceGroupName, lbName, probeName, params, _) {
    var probeProfile = this._parseAndValidateProbe(probeName, params, false);
    var lb = this.get(resourceGroupName, lbName, _);
    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    var output = this.cli.output;
    var probe = utils.findFirstCaseIgnore(lb.loadBalancer.probes, {name: probeName});
    var endpointUtil = new EndPointUtil();

    if (probe) {
      if (params.newProbeName) probe.name = probeProfile.name;
      if (params.port) probe.port = probeProfile.port;
      if (params.path) probe.requestPath = probeProfile.requestPath;
      if (params.interval) probe.intervalInSeconds = probeProfile.intervalInSeconds;
      if (params.count) probe.numberOfProbes = probeProfile.numberOfProbes;
      if (params.protocol) {
        probe.protocol = probeProfile.protocol;
        if (params.protocol.toLowerCase() === endpointUtil.protocols.TCP) {
          delete probe.requestPath;
        }
      }
      this.update(resourceGroupName, lbName, lb.loadBalancer, _);
    } else {
      output.error(util.format($('A probe with name "%s" not found'), probeName));
    }
  },

  addLBRule: function (resourceGroupName, lbName, ruleName, options, _) {
    var lb = this.get(resourceGroupName, lbName, _);
    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    lb = lb.loadBalancer;

    if (!lb.loadBalancingRules) {
      lb.loadBalancingRules = [];
    }

    // check if rule with same name already exists
    var lbRule = utils.findFirstCaseIgnore(lb.loadBalancingRules, {name: ruleName});
    if (lbRule) {
      throw new Error(util.format($('Rule with the same name already exists in load balancer "%s"'), lbName));
    }

    var rule = {name: ruleName};

    rule = this._parseLBRuleParameters(lb, rule, options, true);

    lb.loadBalancingRules.push(rule);
    this.update(resourceGroupName, lbName, lb, _);

    var newLb = this.get(resourceGroupName, lbName, _, 'Loading rule state');
    var newRule = utils.findFirstCaseIgnore(newLb.loadBalancer.loadBalancingRules, {name: ruleName});
    this._showLBRule(newRule);
  },

  updateLBRule: function (resourceGroupName, lbName, ruleName, options, _) {
    var lb = this.get(resourceGroupName, lbName, _);
    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    lb = lb.loadBalancer;

    // check if rule exists
    var lbRule = utils.findFirstCaseIgnore(lb.loadBalancingRules, {name: ruleName});
    if (!lbRule) {
      throw new Error(util.format($('Rule with the name "%s" not found in load balancer "%s"'), ruleName, lbName));
    }

    lbRule.name = options.newRuleName || ruleName;

    lbRule = this._parseLBRuleParameters(lb, lbRule, options, false);
    this.update(resourceGroupName, lbName, lb, _);

    var newLb = this.get(resourceGroupName, lbName, _, 'Loading rule state');
    var newRule = utils.findFirstCaseIgnore(newLb.loadBalancer.loadBalancingRules, {name: lbRule.name});
    this._showLBRule(newRule);
  },

  listLBRules: function (resourceGroupName, lbName, options, _) {
    var lb = this.get(resourceGroupName, lbName, _);

    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    var output = this.cli.output;
    var rules = lb.loadBalancer.loadBalancingRules;

    this.cli.interaction.formatOutput(rules, function (outputData) {
      if (outputData.length !== 0) {
        output.table(outputData, function (row, item) {
          row.cell($('Name'), item.name);
          row.cell($('Provisioning state'), item.provisioningState);
          row.cell($('Protocol'), item.protocol);
          row.cell($('Frontend port'), item.frontendPort);
          row.cell($('Backend port'), item.backendPort);
          row.cell($('Enable floating IP'), item.enableFloatingIP);
          row.cell($('Idle timeout in minutes'), item.idleTimeoutInMinutes);
          row.cell($('Backend address pool'), item.backendAddressPool ? item.backendAddressPool.id : '');
          row.cell($('Probe'), item.probe ? item.probe.id : '');
        });
      } else {
        if (output.format().json) {
          output.json([]);
        } else {
          output.info($('No load balancing rules found'));
        }
      }
    });
  },

  deleteLBRule: function (resourceGroupName, lbName, ruleName, options, _) {
    var lb = this.get(resourceGroupName, lbName, _);
    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    lb = lb.loadBalancer;

    // check if rule exists
    var ruleIndex = utils.indexOfCaseIgnore(lb.loadBalancingRules, {name: ruleName});
    if (ruleIndex === null || ruleIndex === undefined || ruleIndex === -1) {
      throw new Error(util.format($('A load balancing rule with name "%s" not found in the load balancer "%s"'), ruleName, lbName));
    }

    if (!options.quiet && !this.cli.interaction.confirm(util.format($('Delete load balancing rule %s? [y/n] '), ruleName), _)) {
      return;
    }

    lb.loadBalancingRules.splice(ruleIndex, 1);
    this.update(resourceGroupName, lbName, lb, _);
  },

  createInboundNatRule: function (resourceGroupName, lbName, name, options, _) {
    var lb = this.get(resourceGroupName, lbName, _);
    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    var output = this.cli.output;
    if (options.vmId && options.vmName) {
      output.warn($('--vm-name parameter will be ignored because --vm-id and --vm-name parameters are mutually exclusive'));
    }

    var inboundRule = {name: name};

    inboundRule = this._parseInboundNatRule(resourceGroupName, lb.loadBalancer, inboundRule, options, true, _);
    var inboundRules = lb.loadBalancer.inboundNatRules;
    if (!inboundRules) {
      lb.loadBalancer.inboundNatRules = [];
    }

    if (utils.findFirstCaseIgnore(inboundRules, {name: name})) {
      output.error(util.format($('An inbound NAT rule with name "%s" already exist in the load balancer "%s"'), name, lbName));
    }

    lb.loadBalancer.inboundNatRules.push(inboundRule);
    this.update(resourceGroupName, lbName, lb.loadBalancer, _);

    var newLb = this.get(resourceGroupName, lbName, _);
    var newRule = utils.findFirstCaseIgnore(newLb.loadBalancer.inboundNatRules, {name: name});
    this._showInboundNatRule(newRule);
  },

  updateInboundNatRule: function (resourceGroupName, lbName, name, options, _) {
    var lb = this.get(resourceGroupName, lbName, _);
    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    var allInboundRules = lb.loadBalancer.inboundNatRules;
    var currentInboundRule = utils.findFirstCaseIgnore(allInboundRules, {name: name});
    if (!currentInboundRule) {
      throw new Error(util.format($('An inbound NAT rule with name "%s" does not exist in the load balancer "%s"'), name, lbName));
    }

    this._parseInboundNatRule(resourceGroupName, lb.loadBalancer, currentInboundRule, options, false, _);
    this.update(resourceGroupName, lbName, lb.loadBalancer, _);

    var newLb = this.get(resourceGroupName, lbName, _);
    var updatedRule = utils.findFirstCaseIgnore(newLb.loadBalancer.inboundNatRules, {name: name});
    this._showInboundNatRule(updatedRule);
  },

  listInboundNatRules: function (resourceGroupName, lbName, options, _) {
    var lb = this.get(resourceGroupName, lbName, _);

    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    var output = this.cli.output;
    var rules = lb.loadBalancer.inboundNatRules;

    this.cli.interaction.formatOutput(rules, function (outputData) {
      if (outputData.length !== 0) {
        output.table(outputData, function (row, item) {
          row.cell($('Name'), item.name);
          row.cell($('Provisioning state'), item.provisioningState);
          row.cell($('Protocol'), item.protocol);
          row.cell($('Frontend port'), item.frontendPort);
          row.cell($('Backend port'), item.backendPort);
          row.cell($('Enable floating IP'), item.enableFloatingIP);
          row.cell($('Idle timeout in minutes'), item.idleTimeoutInMinutes);
          row.cell($('Backend IP configuration'), item.backendIpConfiguration ? item.backendIpConfiguration.id : '');
        });
      } else {
        if (output.format().json) {
          output.json([]);
        } else {
          output.info($('No inbound NAT rules found'));
        }
      }
    });
  },

  deleteInboundNatRule: function (resourceGroupName, lbName, name, options, _) {
    var lb = this.get(resourceGroupName, lbName, _);
    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    var output = this.cli.output;
    var inboundRules = lb.loadBalancer.inboundNatRules;
    if (!inboundRules) {
      throw new Error(util.format($('A load balancer with name "%s" does not contain any inbound NAT rules'), lbName));
    }

    var index = utils.indexOfCaseIgnore(inboundRules, {name: name});
    if (index !== null) {
      if (!options.quiet && !this.cli.interaction.confirm(util.format($('Delete inbound NAT rule "%s?" [y/n] '), name), _)) {
        return;
      }
      lb.loadBalancer.inboundNatRules.splice(index, 1);
      this.update(resourceGroupName, lbName, lb.loadBalancer, _);
    } else {
      output.error(util.format($('An inbound NAT rule with name "%s" does not exist in the load balancer "%s"'), name, lbName));
    }
  },

  addFrontEndIPConfig: function (resourceGroupName, lbName, ipConfigName, options, _) {
    var ipConfigResult = this._loadFrontendIpConfiguration(resourceGroupName, lbName, ipConfigName, _);
    var ipConfig = ipConfigResult.object;
    if (ipConfig) {
      throw new Error(util.format($('Frontend IP configuration "%s" already exists in the load balancer "%s"'), ipConfigName, lbName));
    }

    var lb = ipConfigResult.loadBalancer;
    var frontendIPConfig = {name: ipConfigName};

    if (lb.frontendIpConfigurations && lb.frontendIpConfigurations.length >= 1) {
    	// TODO: remove it once its available
    	throw new Error($('Load balancer can have only one Frontend IP Configuration.'));
    }

    frontendIPConfig = this._handleVIP(resourceGroupName, frontendIPConfig, options, _);

    lb.frontendIpConfigurations.push(frontendIPConfig);

    var progress = this.cli.interaction.progress(util.format($('Creating frontend IP configuration "%s"'), ipConfigName));
    try {
      this.networkResourceProviderClient.loadBalancers.createOrUpdate(resourceGroupName, lbName, lb, _);
    } finally {
      progress.end();
    }

    var newVip = this._loadFrontendIpConfiguration(resourceGroupName, lbName, ipConfigName, _).object;
    this._showVIP(newVip);
  },

  updateFrontEndIPConfig: function (resourceGroupName, lbName, ipConfigName, options, _) {
    var ipConfigResult = this._loadFrontendIpConfiguration(resourceGroupName, lbName, ipConfigName, _);
    var frontendIPConfig = ipConfigResult.object;
    if (!frontendIPConfig) {
      throw new Error(util.format($('Frontend IP configuration "%s" not found in the load balancer "%s"'), ipConfigName, lbName));
    }

    var lb = ipConfigResult.loadBalancer;

    frontendIPConfig = this._handleVIP(resourceGroupName, frontendIPConfig, options, _);

    lb.frontendIpConfigurations[ipConfigResult.index] = frontendIPConfig;

    this.update(resourceGroupName, lbName, lb, _);
    var newVip = this._loadFrontendIpConfiguration(resourceGroupName, lbName, ipConfigName, _).object;
    this._showVIP(newVip);
  },

  listFrontEndIPConfigs: function (resourceGroupName, lbName, options, _) {
    var lb = this.get(resourceGroupName, lbName, _);

    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    var output = this.cli.output;
    var vips = lb.loadBalancer.frontendIpConfigurations;

    this.cli.interaction.formatOutput(vips, function (outputData) {
      if (outputData.length !== 0) {
        output.table(outputData, function (row, item) {
          row.cell($('Name'), item.name);
          row.cell($('Provisioning state'), item.provisioningState);
          row.cell($('Private IP allocation method'), item.privateIpAllocationMethod);
          row.cell($('Public IP address'), item.publicIpAddress ? item.publicIpAddress.id : '');
          row.cell($('Subnet'), item.subnet ? item.subnet.id : '');
        });
      } else {
        if (output.format().json) {
          output.json([]);
        } else {
          output.info($('No vip\'s found'));
        }
      }
    });
  },

  deleteFrontEndIPConfig: function (resourceGroupName, lbName, ipConfigName, options, _) {
    var ipConfigResult = this._loadFrontendIpConfiguration(resourceGroupName, lbName, ipConfigName, _);
    var ipConfigIndex = ipConfigResult.index;

    if (ipConfigIndex) {
      throw new Error(util.format($('Frontend IP configuration "%s" nof found in the load balancer "%s"'), ipConfigName, lbName));
    }

    var lb = ipConfigResult.loadBalancer;
    if (!options.quiet && !this.cli.interaction.confirm(util.format($('Delete frontend ip configuration "%s"? [y/n] '), ipConfigName), _)) {
      return;
    }

    lb.frontendIpConfigurations.splice(ipConfigIndex, 1);
    this.update(resourceGroupName, lbName, lb, _);
  },

  addBackendAddressPool: function (resourceGroupName, lbName, poolName, options, _) {
    var backendAddressPoolObj = this._loadBackendAddressPool(resourceGroupName, lbName, poolName, _);

    lb = backendAddressPoolObj.loadBalancer;

    var addressPool = backendAddressPoolObj.object;
    if (addressPool) {
      throw new Error(util.format($('A backend address pool with name "%s" already exists in the load balancer "%s"'), poolName, lbName));
    }

    var backendAddressPool = {name: poolName, properties: {}};

    lb.backendAddressPools.push(backendAddressPool);

    this.update(resourceGroupName, lbName, lb, _);
    var newBackendAddressPool = this._loadBackendAddressPool(resourceGroupName, lbName, poolName, _).object;
    this._showBackendAddressPool(newBackendAddressPool);
  },

  addNicToBackendAddressPool: function (resourceGroupName, lbName, poolName, options, _) {
    var backendAddressPoolObj = this._loadBackendAddressPool(resourceGroupName, lbName, poolName, _);

    lb = backendAddressPoolObj.loadBalancer;

    var addressPool = backendAddressPoolObj.object;
    if (!addressPool) {
      throw new Error(util.format($('Backend address pool "%s" not found in the load balancer "%s"'), poolName, lbName));
    }

    addressPool = this._handleAddressPool(resourceGroupName, addressPool, true, options, _);

    var updatedBackendAddressPool = this._loadBackendAddressPool(resourceGroupName, lbName, poolName, _).object;
    this._showBackendAddressPool(updatedBackendAddressPool);
  },

  removeNicFromBackendAddressPool: function (resourceGroupName, lbName, poolName, options, _) {
    var backendAddressPoolObj = this._loadBackendAddressPool(resourceGroupName, lbName, poolName, _);

    lb = backendAddressPoolObj.loadBalancer;

    var addressPool = backendAddressPoolObj.object;
    if (!addressPool) {
      throw new Error(util.format($('Backend address pool "%s" not found in the load balancer "%s"'), poolName, lbName));
    }

    addressPool = this._handleAddressPool(resourceGroupName, addressPool, false, options, _);

    var updatedBackendAddressPool = this._loadBackendAddressPool(resourceGroupName, lbName, poolName, _).object;
    this._showBackendAddressPool(updatedBackendAddressPool);
  },

  listBackendAddressPools: function (resourceGroupName, lbName, options, _) {
    var lb = this.get(resourceGroupName, lbName, _);

    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    var output = this.cli.output;
    var pools = lb.loadBalancer.backendAddressPools;

    this.cli.interaction.formatOutput(pools, function (outputData) {
      if (outputData.length !== 0) {
        output.table(outputData, function (row, item) {
          row.cell($('Name'), item.name);
          row.cell($('Provisioning state'), item.provisioningState);
        });
      } else {
        if (output.format().json) {
          output.json([]);
        } else {
          output.info($('No backend address pools found'));
        }
      }
    });
  },

  deleteBackendAddressPool: function (resourceGroupName, lbName, poolName, options, _) {
    var backendAddressPoolObj = this._loadBackendAddressPool(resourceGroupName, lbName, poolName, _);

    lb = backendAddressPoolObj.loadBalancer;
    var backendAddressPoolIndex = backendAddressPoolObj.index;
    if (backendAddressPoolIndex === null || backendAddressPoolIndex === undefined || backendAddressPoolIndex === -1) {
      throw new Error(util.format($('Backend address pool with name "%s" not found in the load balancer "%s"'), poolName, lbName));
    }

    if (!options.quiet && !this.cli.interaction.confirm(util.format($('Delete backend address pool "%s"? [y/n] '), poolName), _)) {
      return;
    }

    lb.backendAddressPools.splice(backendAddressPoolIndex, 1);
    this.update(resourceGroupName, lbName, lb, _);
  },

  _parseAndValidateProbe: function (probeName, params, useDefaults) {
    var endpointUtil = new EndPointUtil();
    var self = this;
    var output = self.cli.output;

    var probeProfile = {
      name: probeName
    };

    if (params.path) {
      if (utils.stringIsNullOrEmpty(params.path)) {
        throw new Error($('Path parameter must not be null or empty string'));
      }
      probeProfile.requestPath = params.path;
    }

    if (params.protocol) {
      var protocolValidation = endpointUtil.validateProbProtocol(params.protocol, 'Protocol');
      if (protocolValidation.error) {
        throw new Error(protocolValidation.error);
      }

      var protocol = protocolValidation.protocol.toLowerCase();
      if (protocol === endpointUtil.protocols.TCP && params.path) {
        output.warn($('Probe request path will be ignored when its protocol is Tcp'));
        delete probeProfile.requestPath;
      }

      if (protocol === endpointUtil.protocols.HTTP && !params.path) {
        throw new Error($('Probe request path is required when its protocol is Http'));
      }

      probeProfile.protocol = protocolValidation.protocol;
    } else if (useDefaults) {
      output.warn(util.format($('Using default probe protocol: %s'), self.DEFAULT_PROBE_PROTOCOL));
      probeProfile.protocol = self.DEFAULT_PROBE_PROTOCOL;
    }

    if (params.port) {
      var portValidation = endpointUtil.validatePort(params.port, 'Port');
      if (portValidation.error) throw new Error(portValidation.error);
      probeProfile.port = portValidation.port;
    } else if (useDefaults) {
      output.warn(util.format($('Using default probe port: %s'), self.DEFAULT_PROBE_PORT));
      probeProfile.port = self.DEFAULT_PROBE_PORT;
    }

    if (params.interval) {
      var intervalValidation = endpointUtil.validateProbInterval(params.interval, 'Interval');
      if (intervalValidation.error) throw new Error(intervalValidation.error);
      probeProfile.intervalInSeconds = intervalValidation.interval;
    }

    if (params.count) {
      var countAsInt = utils.parseInt(params.count);
      if (isNaN(countAsInt)) {
        throw new Error(util.format($('Count parameter must be an integer'), countAsInt));
      }
      probeProfile.numberOfProbes = countAsInt;
    }

    if (params.newProbeName) {
      if (utils.stringIsNullOrEmpty(params.newProbeName)) {
        throw new Error($('Name parameter must not be null or empty string'));
      }
      probeProfile.name = params.newProbeName;
    }

    return probeProfile;
  },

  _parseInboundNatRule: function (resourceGroup, lb, inboundRule, options, useDefaults, _) {
    var endPointUtil = new EndPointUtil();

    if (options.protocol) {
      var protocolValidation = endPointUtil.validateProtocol(options.protocol, 'protocol');
      if (protocolValidation.error) {
        throw new Error(protocolValidation.error);
      }
      inboundRule.protocol = options.protocol;
    } else if (useDefaults) {
      options.protocol = this.DEFAULT_PROTOCOL;
      this.log.verbose(util.format($('Using default protocol: %s'), options.protocol));
      inboundRule.protocol = options.protocol;
    }

    if (options.frontendPort) {
      var frontendPortValidation = endPointUtil.validatePort(options.frontendPort, 'front end port');
      if (frontendPortValidation.error) {
        throw new Error(frontendPortValidation.error);
      }
      inboundRule.frontendPort = options.frontendPort;
    } else if (useDefaults) {
      options.frontendPort = this.DEFAULT_FRONTEND_PORT;
      this.log.verbose(util.format($('Using default frontend port: %s'), options.frontendPort));
      inboundRule.frontendPort = options.frontendPort;
    }

    if (options.backendPort) {
      var backendPortValidation = endPointUtil.validatePort(options.backendPort, 'back end port');
      if (backendPortValidation.error) {
        throw new Error(backendPortValidation.error);
      }
      inboundRule.backendPort = options.backendPort;
    } else if (useDefaults) {
      options.backendPort = this.DEFAULT_BACKEND_PORT;
      this.log.verbose(util.format($('Using default backend port: %s'), options.backendPort));
      inboundRule.backendPort = options.backendPort;
    }

    if (options.enableFloatingIp) {

      // Enable floating IP must be boolean.
      if (!utils.ignoreCaseEquals(options.enableFloatingIp, 'true') && !utils.ignoreCaseEquals(options.enableFloatingIp, 'false')) {
        throw new Error($('Enable floating IP parameter must be boolean'));
      }

      inboundRule.enableFloatingIP = options.enableFloatingIp;
    } else if (useDefaults) {
      options.enableFloatingIp = this.DEFAULT_FLOATING_IP;
      this.log.verbose(util.format($('Using default enable floating ip: %s'), options.enableFloatingIp));
      inboundRule.enableFloatingIP = options.enableFloatingIp;
    }

    if (options.vip) {
      inboundRule.frontendIPConfigurations = [];
      var vips = options.vip.split(',');
      for (var num in vips) {
        var vip = vips[num];
        var vipFound = utils.findFirstCaseIgnore(lb.frontendIpConfigurations, {name: vip});
        if (!vipFound) {
          throw new Error(util.format($('Frontend IP config "%s" not found'), vip));
        }
        inboundRule.frontendIPConfigurations.push({id: vipFound.id});
      }
    } else if (useDefaults) {
      if (!inboundRule.frontendIPConfigurations) {
        inboundRule.frontendIPConfigurations = [];
        var vipFoundList = lb.frontendIpConfigurations;
        if (!vipFoundList) {
          throw new Error(util.format($('Load balancer with name "%s" has no frontend IP config'), lb.name));
        }
        inboundRule.frontendIPConfigurations.push({id: vipFoundList[0].id});
        this.log.verbose($('Setting default inbound NAT rule frontend IP configuration'));
      }
    }

    var resultObj = null;
    if (options.vmId) {
      if (options.vmId !== true) {
        resultObj = this._getFirstIpConfigFromVMById(resourceGroup, options, _);
        inboundRule.backendIPConfiguration = {id: resultObj.ipConfig.id};
      }
    } else if (options.vmName) {
      resultObj = this._getFirstIpConfigFromVMByName(resourceGroup, options, _);
      inboundRule.backendIPConfiguration = {id: resultObj.ipConfig.id};
    } else if (useDefaults) {
      this.log.verbose($('Handling inbound NAT rule without specified backend address pool'));
    }

    return inboundRule;
  },

  _loadFrontendIpConfiguration: function (resourceGroupName, lbName, ipConfigName, _) {
    var lb = this.get(resourceGroupName, lbName, _);
    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    lb = lb.loadBalancer;

    var ipConfig = utils.findFirstCaseIgnore(lb.frontendIpConfigurations, {name: ipConfigName});
    var ipConfigIndex = utils.indexOfCaseIgnore(lb.frontendIpConfigurations, {name: ipConfigName});

    return {
      object: ipConfig,
      index: ipConfigIndex,
      loadBalancer: lb
    };
  },

  _loadBackendAddressPool: function (resourceGroupName, lbName, poolName, _) {
    var lb = this.get(resourceGroupName, lbName, _);
    if (!lb) {
      throw new Error(util.format($('A load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroupName));
    }

    lb = lb.loadBalancer;

    var addressPool = utils.findFirstCaseIgnore(lb.backendAddressPools, {name: poolName});
    var addressPoolIndex = utils.indexOfCaseIgnore(lb.backendAddressPools, {name: poolName});

    return {
      object: addressPool,
      index: addressPoolIndex,
      loadBalancer: lb
    };
  },

  _handleAddressPool: function (resourceGroupName, backendAddressPool, isAddOperation, options, _) {
    // check whether only one param is defined
    var params = [options.vmId, options.vmName, options.nicId, options.nicName];
    params.sort();
    if (params[1] !== undefined) {
      throw new Error('Only one parameter of the followings must be specified: --vm-id, --vm-name, --nic-id, --nic-name');
    }

    if (backendAddressPool.backendIpConfigurations === null || backendAddressPool.backendIpConfigurations === undefined) {
      backendAddressPool.backendIpConfigurations = [];
    }

    var resultObj = null;

    if (options.vmId) {
      resultObj = this._getFirstIpConfigFromVMById(resourceGroupName, options, _);
    }

    if (options.vmName) {
      resultObj = this._getFirstIpConfigFromVMByName(resourceGroupName, options, _);
    }

    if (options.nicId) {
      resultObj = this._getFirstIpConfigByNicId(resourceGroupName, backendAddressPool, options.nicId, _);
    }

    if (options.nicName) {
      resultObj = this._getFirstIpConfigByNicName(resourceGroupName, backendAddressPool, options.nicName, _);
    }

    var nic = resultObj.nic;
    var ipConfig = resultObj.ipConfig;

    if (isAddOperation) {
      var backendAddressPoolAlreadyAttached = utils.findFirstCaseIgnore(ipConfig.loadBalancerBackendAddressPools, {id: backendAddressPool.id});
      if (backendAddressPoolAlreadyAttached) {
        return;
      }

      ipConfig.loadBalancerBackendAddressPools.push({id: backendAddressPool.id});
    } else {
      var backendAddressPoolIndex = utils.findFirstCaseIgnore(ipConfig.loadBalancerBackendAddressPools, {id: backendAddressPool.id});
      if (!backendAddressPoolIndex) {
        return;
      }

      ipConfig.loadBalancerBackendAddressPools.splice(backendAddressPoolIndex, 1);
    }

    var nicCrud = new NIC(this.cli, this.networkResourceProviderClient);
    nicCrud.update(resourceGroupName, nic.name, nic, _);
  },

  _parseLBRuleParameters: function (lb, rule, options, useDefaults) {
    var endPointUtil = new EndPointUtil();

    if (options.protocol) {
      var protocolValidation = endPointUtil.validateProtocol(options.protocol, 'protocol');
      if (protocolValidation.error) {
        throw new Error(protocolValidation.error);
      }

      rule.protocol = options.protocol;
    } else if (useDefaults) {
      options.protocol = this.DEFAULT_PROTOCOL;
      this.log.verbose(util.format($('Using default protocol: %s'), options.protocol));
      rule.protocol = options.protocol;
    }

    if (options.frontendPort) {
      var frontendPortValidation = endPointUtil.validatePort(options.frontendPort, 'front end port');
      if (frontendPortValidation.error) {
        throw new Error(frontendPortValidation.error);
      }

      rule.frontendPort = options.frontendPort;
    } else if (useDefaults) {
      options.frontendPort = this.DEFAULT_FRONTEND_PORT;
      this.log.verbose(util.format($('Using default frontend port: %s'), options.frontendPort));
      rule.frontendPort = options.frontendPort;
    }

    if (options.backendPort) {
      var backendPortValidation = endPointUtil.validatePort(options.backendPort, 'back end port');
      if (backendPortValidation.error) {
        throw new Error(backendPortValidation.error);
      }

      rule.backendPort = options.backendPort;
    } else if (useDefaults) {
      options.backendPort = this.DEFAULT_BACKEND_PORT;
      this.log.verbose(util.format($('Using default backend port: %s'), options.backendPort));
      rule.backendPort = options.backendPort;
    }

    if (options.idleTimeout) {
      var parsed = utils.parseInt(options.idleTimeout);
      if (isNaN(parsed)) {
        throw new Error($('Idle timeout must be posivite integer'));
      }

      rule.idleTimeoutInMinutes = options.idleTimeout;
    } else if (useDefaults) {
      options.idleTimeout = this.DEFAULT_IDLE_TIMEOUT;
      this.log.verbose(util.format($('Using default idle timeout: %s'), options.idleTimeout));
      rule.idleTimeoutInMinutes = options.idleTimeout;
    }

    if (options.enableFloatingIp) {

      // Enable floating IP must be boolean.
      if (!utils.ignoreCaseEquals(options.enableFloatingIp, 'true') && !utils.ignoreCaseEquals(options.enableFloatingIp, 'false')) {
        throw new Error($('Enable floating IP parameter must be boolean'));
      }

      rule.enableFloatingIP = options.enableFloatingIp;
    } else if (useDefaults) {
      options.enableFloatingIp = this.DEFAULT_FLOATING_IP;
      this.log.verbose(util.format($('Using default enable floating ip: %s'), options.enableFloatingIp));
      rule.enableFloatingIP = options.enableFloatingIp;
    }

    var backendAddressPool = null;
    if (options.backendAddressPool) {
      backendAddressPool = utils.findFirstCaseIgnore(lb.backendAddressPools, {name: options.backendAddressPool});
      if (!backendAddressPool) {
        throw new Error(util.format($('Backend address pool "%s" not found'), options.backendAddressPool));
      }

      rule.backendAddressPool = {id: backendAddressPool.id};
    } else if (useDefaults) {
      if (!lb.backendAddressPools || lb.backendAddressPools.length === 0) {
        throw new Error($('Load balancer must have at least one backend address pool if --backend-address-pool parameter is not specified.'));
      }

      this.log.verbose(util.format($('Using first backend address pool: %s'), lb.backendAddressPools[0].name));
      backendAddressPool = lb.backendAddressPools[0];
      rule.backendAddressPool = {id: backendAddressPool.id};
    }

    if (options.frontendIpName) {
      rule.frontendIPConfiguration = {};
      vipFound = utils.findFirstCaseIgnore(lb.frontendIpConfigurations, {name: options.frontendIpName});
      if (!vipFound) {
        throw new Error(util.format($('Frontend IP config "%s" not found'), options.frontendIpName));
      }

      rule.frontendIPConfiguration.id = vipFound.id;
    } else if (useDefaults) {
      rule.frontendIPConfiguration = {};
      if (!lb.frontendIpConfigurations || lb.frontendIpConfigurations.length === 0) {
        throw new Error($('Load balancer must have at least one frontend IP configuration if --frontend-ip-name parameter is not specified.'));
      }

      this.log.verbose(util.format($('Using first frontend IP config: %s'), lb.frontendIpConfigurations[0].name));
      defaultVip = lb.frontendIpConfigurations[0];
      rule.frontendIPConfiguration.id = defaultVip.id;
    }

    var optionalProbe = utils.getOptionalArg(options.probeName);
    if (optionalProbe.hasValue) {
      if (optionalProbe.value !== null) {
        // probes must exist
        if (!lb.probes || lb.probes.length === 0) {
          throw new Error(util.format($('No probes found for the load balancer "%s"'), lb.name));
        }

        // probe with provided name must exist
        var probe = utils.findFirstCaseIgnore(lb.probes, {name: options.probeName});
        if (!probe) {
          throw new Error(util.format($('Probe "%s" not found in the load balancer "%s"'), options.probeName, lb.name));
        }

        rule.probe = {id: probe.id};
      } else {
        this.log.verbose($('Clearing probe'));
        if (rule.probe) {
          delete rule.probe;
        }
      }
    }

    return rule;
  },

  _handleVIP: function (resourceGroupName, frontendIPConfig, options, _) {
    if (options.privateIpAddress && options.publicIpName) {
      throw new Error($('Both optional parameters --private-ip-address and --public-ip-name cannot be specified together'));
    }

    if (options.privateIpAddress && options.publicIpId) {
      throw new Error($('Both optional parameters --private-ip-address and --public-ip-id cannot be specified together'));
    }

    if (options.publicIpName && options.publicIpId) {
      throw new Error($('Both optional parameters --public-ip-name and --public-ip-id cannot be specified together'));
    }

    if (options.subnetName && options.subnetId) {
      throw new Error($('Both optional parameters --subnet-name and --subnet-id cannot be specified together'));
    }

    if ((options.subnetName || options.subnetId) && !options.vnetName) {
      throw new Error($('You must specify subnet virtual network if subnet information is provided'));
    }

    if (options.privateIpAllocationMethod) {
      if (options.privateIpAllocationMethod !== 'Static' && options.privateIpAllocationMethod !== 'Dynamic') {
        throw new Error($('Private IP allocation method must be Static or Dynamic'));
      }
      if ((!options.subnetId && !options.subnetName) && utils.ignoreCaseEquals(options.privateIpAllocationMethod, 'Static')) {
        throw new Error($('Frontend Private IP Allocation Method must be set to Dynamic when Subnet is not specified'));
      }

      frontendIPConfig.privateIpAllocationMethod = options.privateIpAllocationMethod;
    }

    if (frontendIPConfig.privateIpAllocationMethod === undefined || frontendIPConfig.privateIpAllocationMethod === null) {
    	frontendIPConfig.privateIpAllocationMethod = 'Dynamic';
    }

    var allocationMethod = frontendIPConfig.privateIpAllocationMethod;

    var subnetCRUD = new Subnet(this.cli, this.networkResourceProviderClient);
    if (allocationMethod === 'Dynamic') {
      if (options.privateIpAddress) {
        this.cli.output.info('Using Dynamic private IP allocation method. --privateip-address parameter ignored.');
      }

      if (options.subnetName || options.subnetId) {
        frontendIPConfig.subnet = {};
        if (options.subnetName) {
          subnet = subnetCRUD.get(resourceGroupName, options.vnetName, options.subnetName, _);
          if (!subnet) {
            throw new Error(util.format($('Subnet with name "%s" not found'), options.subnetName));
          }
          frontendIPConfig.subnet.id = subnet.subnet.id;
        }

        if (options.subnetId) {
          frontendIPConfig.subnet.id = options.subnetId;
        }

        if (frontendIPConfig.publicIpAddress) {
          delete frontendIPConfig.publicIpAddress;
        }
      } else if (options.publicIpName || options.publicIpId) {
        frontendIPConfig.publicIpAddress = {};
        var publicip = null;

        if (options.publicIpName) {
          var publicIPcrud = new PublicIP(this.cli, this.networkResourceProviderClient);
          publicip = publicIPcrud.get(resourceGroupName, options.publicIpName, _);
          if (!publicip) {
            throw new Error(util.format($('Public IP "%s" not found'), options.publicIpName));
          }
        }

        if (publicip !== null && publicip.publicIpAddress) {
          frontendIPConfig.publicIpAddress.id = publicip.publicIpAddress.id;
        }

        if (options.publicIpId) {
          frontendIPConfig.publicIpAddress.id = options.publicIpId;
        }

        if (frontendIPConfig.subnet) {
          delete frontendIPConfig.subnet;
        }
      }
    } else if (allocationMethod === 'Static') {
      if (options.privateIpAddress) {
        var vnetUtil = new VNetUtil();
        var parsed = vnetUtil.parseIPv4(options.privateIpAddress);
        if (parsed.error) {
          throw new Error(parsed.error);
        }

        frontendIPConfig.privateIpAddress = options.privateIpAddress;
      }

      if (options.subnetName || options.subnetId) {
        frontendIPConfig.subnet = {};
        if (options.subnetName) {
          subnet = subnetCRUD.get(resourceGroupName, options.vnetName, options.subnetName, _);
          if (!subnet) {
            throw new Error(util.format($('Subnet with name "%s" not found'), options.subnetName));
          }
          frontendIPConfig.subnet.id = subnet.subnet.id;
        }

        if (options.subnetId) {
          frontendIPConfig.subnet.id = options.subnetId;
        }

        if (frontendIPConfig.publicIpAddress) {
          delete frontendIPConfig.publicIpAddress;
        }
      }

      if (options.publicIpId || options.publicIpName) {
        this.cli.output.info('You cant set public IP when private IP allocation method is Static.');
      }
    }

    return frontendIPConfig;
  },

  _getAllNics: function (resourceGroupName, _) {
    var nicCrud = new NIC(this.cli, this.networkResourceProviderClient);

    var progress = this.cli.interaction.progress($('Getting network interfaces'));
    var nics = null;
    try {
      nics = nicCrud.networkResourceProviderClient.networkInterfaces.list(resourceGroupName, _);
    } finally {
      progress.end();
    }

    return nics;
  },

  _getVmIdByName: function (resourceGroupName, vmName, _) {
    var virtualMachine = new VirtualMachine(this.cli, this.serviceClients);
    var vm = virtualMachine.getVM(resourceGroupName, vmName, _);

    if (!vm) {
      throw new Error(util.format($('Virtual machine with name "%s" not found'), vmName));
    }
    return vm.id;
  },

  _getFirstIpConfigByNicId: function (resourceGroup, backendAddressPool, nicId, _) {
    var nics = this._getAllNics(resourceGroup, _);
    if (!nics) {
      throw new Error(util.format($('No network interfaces found in the resource group "%s"'), resourceGroup));
    }

    var nic = utils.findFirstCaseIgnore(nics.networkInterfaces, {id: nicId});
    if (!nic) {
      throw new Error(util.format($('Network interface specified with id "%s" not found in the resource group "%s"'), nicId, resourceGroup));
    }

    var firstIpConfig = nic.ipConfigurations[0];
    if (!firstIpConfig.loadBalancerBackendAddressPools) {
      firstIpConfig.loadBalancerBackendAddressPools = [];
    }

    return {
      ipConfig: firstIpConfig,
      nic: nic
    };
  },

  _getFirstIpConfigByNicName: function (resourceGroup, backendAddressPool, nicName, _) {
    var nics = this._getAllNics(resourceGroup, _);
    if (!nics) {
      throw new Error(util.format($('No network interfaces found in the resource group "%s"'), resourceGroup));
    }

    var nic = utils.findFirstCaseIgnore(nics.networkInterfaces, {name: nicName});
    if (!nic) {
      throw new Error(util.format($('Network interface specified with name "%s" not found in the resource group "%s"'), nicName, resourceGroup));
    }

    if (!nic.ipConfigurations || nic.ipConfigurations.length === 0) {
      throw new Error(util.format($('Network interface with name "%s" does not contain any IP configuration'), nicName));
    }

    var firstIpConfig = nic.ipConfigurations[0];
    if (!firstIpConfig.loadBalancerBackendAddressPools) {
      firstIpConfig.loadBalancerBackendAddressPools = [];
    }

    return {
      ipConfig: firstIpConfig,
      nic: nic
    };
  },

  _getFirstIpConfigFromVMById: function (resourceGroup, options, _) {
    var virtualMachine = new VirtualMachine(this.cli, this.serviceClients);
    var vm = virtualMachine.getVMById(options.vmId, _);

    if (!vm) {
      throw new Error(util.format($('Virtual machine with id "%s" not found'), options.vmId));
    }

    vm = vm.virtualMachine;

    var vmNicId = vm.networkProfile.networkInterfaces[0].referenceUri;

    if (!vmNicId) {
      throw new Error(util.format($('Virtual machine with id "%s" has no any network interface with reference uri'), options.vmId));
    }

    var nics = this._getAllNics(resourceGroup, _);
    if (!nics) {
      throw new Error(util.format($('No network interfaces found in the resource group "%s"'), resourceGroup));
    }

    var nic = utils.findFirstCaseIgnore(nics.networkInterfaces, {id: vmNicId});
    if (!nic) {
      throw new Error(util.format($('Network interface specified for virtual machine with id "%s" not found in the resource group "%s"'), options.vmId, resourceGroup));
    }

    if (!nic.ipConfigurations || nic.ipConfigurations.length === 0) {
      throw new Error(util.format($('Network interface specified for virtual machine with id "%s" does not contain any IP configuration'), options.vmId));
    }

    var firstIpConfig = nic.ipConfigurations[0];
    return {
      ipConfig: firstIpConfig,
      nic: nic
    };
  },

  _getFirstIpConfigFromVMByName: function (resourceGroup, options, _) {
    var virtualMachine = new VirtualMachine(this.cli, this.serviceClients);
    var vm = virtualMachine.getVM(resourceGroup, options.vmName, _);

    if (!vm) {
      throw new Error(util.format($('Virtual machine with name "%s" not found'), options.vmName));
    }

    if (!vm.virtualMachine.networkProfile || !vm.virtualMachine.networkProfile.networkInterfaces || vm.virtualMachine.networkProfile.networkInterfaces.length === 0) {
      throw new Error(util.format($('Virtual machine with name "%s" does not contain any network interface'), options.vmName));
    }

    var vmNicId = vm.virtualMachine.networkProfile.networkInterfaces[0].referenceUri;

    if (!vmNicId) {
      throw new Error(util.format($('Virtual machine "%s" has no any network interface with reference uri'), options.vmName));
    }

    var nics = this._getAllNics(resourceGroup, _);
    if (!nics) {
      throw new Error(util.format($('No network interfaces found in the resource group "%s"'), resourceGroup));
    }

    var nic = utils.findFirstCaseIgnore(nics.networkInterfaces, {id: vmNicId});
    if (!nic) {
      throw new Error(util.format($('Network interface specified for virtual machine "%s" not found in the resource group "%s"'), options.vmName, resourceGroup));
    }

    if (!nic.ipConfigurations || nic.ipConfigurations.length === 0) {
      throw new Error(util.format($('Network interface specified for virtual machine "%s" does not contain any IP configuration'), options.vmName));
    }

    var firstIpConfig = nic.ipConfigurations[0];

    return {
      ipConfig: firstIpConfig,
      nic: nic
    };
  },

  _showLBRule: function (resource) {
    var resourceInformation = ResourceUtils.getResourceInformation(resource.id);
    var log = this.cli.output;
    this.cli.interaction.formatOutput(resource, function (resource) {
      log.data($('Id:                       '), resource.id);
      log.data($('Name:                     '), resourceInformation.resourceName || resource.name);
      log.data($('Type:                     '), resourceInformation.resourceType || resource.type);
      log.data($('Provisioning state:       '), resource.provisioningState);
      log.data($('Frontend IP configuration:'), resource.frontendIPConfiguration ? resource.frontendIPConfiguration.id : '');
      log.data($('Backend address pool:     '), resource.backendAddressPool);
      log.data($('Protocol:                 '), resource.protocol);
      log.data($('Frontend port:            '), resource.frontendPort);
      log.data($('Backend port:             '), resource.backendPort);
      log.data($('Enable floating IP:       '), resource.enableFloatingIP + '');
      log.data($('Idle timeout in minutes:  '), resource.idleTimeoutInMinutes);

      if (resource.probes && resource.probes.length > 0) {
        log.data($('Probes:'));
        for (var probeNum in resource.probes) {
          var probe = resource.probes[probeNum];
          log.data('', probe);
        }
      } else {
        log.data($('Probes'), '');
      }

      log.data('');
    });
  },

  _showBackendAddressPool: function (resource) {
    var resourceInformation = ResourceUtils.getResourceInformation(resource.id);
    var log = this.cli.output;
    this.cli.interaction.formatOutput(resource, function (resource) {
      log.data($('Id:                       '), resource.id);
      log.data($('Name:                     '), resourceInformation.resourceName || resource.name);
      log.data($('Type:                     '), resourceInformation.resourceType || resource.type);
      log.data($('Provisioning state:       '), resource.provisioningState);

      if (resource.backendIpConfigurations && resource.backendIpConfigurations.length > 0) {
        log.data($('Backend IP configurations:'));
        for (var backendNum in resource.backendIpConfigurations) {
          var backendIp = resource.backendIpConfigurations[backendNum];
          log.data('', backendIp);
        }
      } else {
        log.data($('Backend IP configurations:'), '');
      }

      if (resource.loadBalancingRules && resource.loadBalancingRules.length > 0) {
        log.data($('Load balancing rules:'));
        for (var lbNum in resource.loadBalancingRules) {
          var lbRule = resource.loadBalancingRules[lbNum];
          log.data('', lbRule);
        }
      } else {
        log.data($('Load balancing rules:'), '');
      }

      log.data('');
    });
  },

  _showVIP: function (resource) {
    var resourceInformation = ResourceUtils.getResourceInformation(resource.id);
    var log = this.cli.output;
    this.cli.interaction.formatOutput(resource, function (resource) {
      log.data($('Id:                          '), resource.id);
      log.data($('Name:                        '), resourceInformation.resourceName || resource.name);
      log.data($('Type:                        '), resourceInformation.resourceType || resource.type);
      log.data($('Provisioning state:          '), resource.provisioningState);
      log.data($('Private IP allocation method:'), resource.privateIpAllocationMethod);
      log.data($('Private IP address:          '), resource.privateIpAddress);
      log.data($('Subnet:                      '), resource.subnet);
      log.data($('Public IP address:           '), resource.publicIpAddress);

      if (resource.inboundNatRules && resource.inboundNatRules.length > 0) {
        log.data($('Inbound NAT rules:'));
        for (var inNum in resource.inboundNatRules) {
          var inboundRule = resource.inboundNatRules[inNum];
          log.data('', inboundRule);
        }
      } else {
        log.data($('Inbound NAT rules'), '');
      }

      if (resource.outboundNatRules && resource.outboundNatRules.length > 0) {
        log.data($('Outbound NAT rules:'));
        for (var outNum in resource.outboundNatRules) {
          var outboundRule = resource.outboundNatRules[outNum];
          log.data('', outboundRule);
        }
      } else {
        log.data($('Outbound NAT rules'), '');
      }

      if (resource.loadBalancingRules && resource.loadBalancingRules.length > 0) {
        log.data($('Load balancing rules:'));
        for (var loadnum in resource.loadBalancingRules) {
          var loadRule = resource.loadBalancingRules[loadnum];
          log.data('', loadRule);
        }
      } else {
        log.data($('Load balancing rules'), '');
      }

      log.data('');
    });
  },

  _showInboundNatRule: function (rule) {
    var log = this.log;
    var resourceInfo = ResourceUtils.getResourceInformation(rule.id);

    this.cli.interaction.formatOutput(rule, function (rule) {
      log.data($('Id:                       '), rule.id);
      log.data($('Name:                     '), resourceInfo.resourceName || rule.name);
      log.data($('Type:                     '), resourceInfo.resourceType || rule.type);
      log.data($('Provisioning state:       '), rule.provisioningState);
      log.data($('Frontend IP Configurations'), rule.frontendIPConfigurations);
      log.data($('Backend IP configuration  '), rule.backendIPConfiguration);
      log.data($('Protocol                  '), rule.protocol);
      log.data($('Frontend port             '), rule.frontendPort);
      log.data($('Backend port              '), rule.backendPort);
      log.data($('Enable floating IP        '), rule.enableFloatingIP + '');
    });
  }
});

module.exports = LoadBalancer;
