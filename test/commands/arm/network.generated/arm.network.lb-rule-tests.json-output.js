﻿/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var testUtils = require('../../../util/util');

var networkTestUtil = new (require('../../../util/networkTestUtil'))();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');

var testPrefix = 'arm-network-lb-rule-tests-generated',
  groupName = 'xplat-test-rule',
  location;
var index = 0;

var loadBalancingRules = {
  protocol: 'Udp',
  protocolNew: 'Tcp',
  loadDistribution: 'Default',
  loadDistributionNew: 'SourceIP',
  frontendPort: '1024',
  frontendPortNew: '2048',
  backendPort: '4096',
  backendPortNew: '3072',
  idleTimeoutInMinutes: '5',
  idleTimeoutInMinutesNew: '29',
  enableFloatingIP: 'true',
  enableFloatingIPNew: 'false',
  name: 'loadBalancingRuleName'
};

loadBalancingRules.loadBalancerName = 'loadBalancerName';
loadBalancingRules.publicIPAddressName = 'publicIPAddressName';
loadBalancingRules.frontendIPConfigurationName = 'frontendIPConfigurationName';
loadBalancingRules.backendAddressPoolName = 'backendAddressPoolName';
loadBalancingRules.probeName = 'probeName';

var publicIPAddress = {
  location: 'westus',
  name: 'publicIPAddressName'
};

var backendAddressPool = {
  loadBalancerName: 'loadBalancerName',
  name: 'backendAddressPoolName'
};

var loadBalancer = {
  location: 'westus',
  name: 'loadBalancerName'
};

var frontendIPConfiguration = {
  loadBalancerName: 'loadBalancerName',
  publicIPAddressName: 'publicIPAddressName',
  name: 'frontendIPConfigurationName'
};

var probe = {
  loadBalancerName: 'loadBalancerName',
  name: 'probeName'
};

var loadBalancingRulesDefault = {
  protocol: 'TCP',
  loadDistribution: 'Default',
  frontendPort: '80',
  backendPort: '80',
  idleTimeoutInMinutes: '4',
  enableFloatingIP: 'false',
  loadBalancerName: 'loadBalancerName',
  publicIPAddressName: 'publicIPAddressName',
  probeName: 'probeName',
  name: 'loadBalancingRulesDefaultName',
  group: groupName
};

var protocolOutOfRange = {
  protocol: 'TcpUdp',
  loadBalancerName: 'loadBalancerName',
  name: 'ProtocolOutOfRangeName'
};

var frontendPortUnderAllowedValue = {
  frontendPort: '0',
  loadBalancerName: 'loadBalancerName',
  name: 'FrontendPortUnderAllowedValueName'
};

var frontendPortOverAllowedValue = {
  frontendPort: '65535',
  loadBalancerName: 'loadBalancerName',
  name: 'FrontendPortOverAllowedValueName'
};

var backendPortOutOfRange = {
  backendPort: '65536',
  loadBalancerName: 'loadBalancerName',
  name: 'BackendPortOutOfRangeName'
};

var loadDistributionOutOfRange = {
  loadDistribution: 'SomeRandomValue',
  loadBalancerName: 'loadBalancerName',
  name: 'LoadDistributionOutOfRangeName'
};

var idleTimeoutInMinutesOverAllowedValue = {
  idleTimeoutInMinutes: '31',
  loadBalancerName: 'loadBalancerName',
  name: 'IdleTimeoutInMinutesOverAllowedValueName'
};

var idleTimeoutInMinutesUnderAllowedValue = {
  idleTimeoutInMinutes: '3',
  loadBalancerName: 'loadBalancerName',
  name: 'IdleTimeoutInMinutesUnderAllowedValueName'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;
    var testTimeout = hour;

    before(function (done) {
      this.timeout(testTimeout);
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = loadBalancingRules.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        loadBalancingRules.location = location;
        loadBalancingRules.name = suite.isMocked ? loadBalancingRules.name : suite.generateId(loadBalancingRules.name, null);

        loadBalancingRules.group = groupName;
        protocolOutOfRange.group = groupName;
        frontendPortUnderAllowedValue.group = groupName;
        frontendPortOverAllowedValue.group = groupName;
        backendPortOutOfRange.group = groupName;
        loadDistributionOutOfRange.group = groupName;
        idleTimeoutInMinutesOverAllowedValue.group = groupName;
        idleTimeoutInMinutesUnderAllowedValue.group = groupName;

        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network lb create -g {1} -n {name} --location {location} --json'.formatArgs(loadBalancer, groupName);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              if (!testUtils.assertExitStatus(result, done)) return;
              var cmd = 'network public-ip create -g {1} -n {name} --location {location} --json'.formatArgs(publicIPAddress, groupName);
              generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                if (!testUtils.assertExitStatus(result, done)) return;
                var cmd = 'network lb frontend-ip create -g {1} -n {name} --lb-name {loadBalancerName} --public-ip-name {publicIPAddressName} --json'.formatArgs(frontendIPConfiguration, groupName);
                generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                  if (!testUtils.assertExitStatus(result, done)) return;
                  var cmd = 'network lb address-pool create -g {1} -n {name} --lb-name {loadBalancerName} --json'.formatArgs(backendAddressPool, groupName);
                  generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                    if (!testUtils.assertExitStatus(result, done)) return;
                    var cmd = 'network lb probe create -g {1} -n {name} --lb-name {loadBalancerName} --json'.formatArgs(probe, groupName);
                    generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                      if (!testUtils.assertExitStatus(result, done)) return;
                      done();
                    });
                  });
                });
              });
            });
          });
        } else {
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(testTimeout);
      networkTestUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('load balancing rules', function () {
      this.timeout(testTimeout);
      it('create should create load balancing rules', function (done) {
        var cmd = 'network lb rule create -g {group} -n {name} --protocol {protocol} --load-distribution {loadDistribution} --frontend-port {frontendPort} --backend-port {backendPort} --idle-timeout {idleTimeoutInMinutes} --enable-floating-ip {enableFloatingIP} --lb-name {loadBalancerName} --frontend-ip-name {frontendIPConfigurationName} --backend-address-pool-name {backendAddressPoolName} --probe-name {probeName} --json'.formatArgs(loadBalancingRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(loadBalancingRules.name);
          output.protocol.toLowerCase().should.equal(loadBalancingRules.protocol.toLowerCase());
          output.loadDistribution.toLowerCase().should.equal(loadBalancingRules.loadDistribution.toLowerCase());
          output.frontendPort.should.equal(parseInt(loadBalancingRules.frontendPort, 10));
          output.backendPort.should.equal(parseInt(loadBalancingRules.backendPort, 10));
          output.idleTimeoutInMinutes.should.equal(parseInt(loadBalancingRules.idleTimeoutInMinutes, 10));
          output.enableFloatingIP.should.equal(utils.parseBool(loadBalancingRules.enableFloatingIP));
          done();
        });
      });
      it('show should display load balancing rules details', function (done) {
        var cmd = 'network lb rule show -g {group} -n {name} --lb-name {loadBalancerName} --json'.formatArgs(loadBalancingRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(loadBalancingRules.name);
          output.protocol.toLowerCase().should.equal(loadBalancingRules.protocol.toLowerCase());
          output.loadDistribution.toLowerCase().should.equal(loadBalancingRules.loadDistribution.toLowerCase());
          output.frontendPort.should.equal(parseInt(loadBalancingRules.frontendPort, 10));
          output.backendPort.should.equal(parseInt(loadBalancingRules.backendPort, 10));
          output.idleTimeoutInMinutes.should.equal(parseInt(loadBalancingRules.idleTimeoutInMinutes, 10));
          output.enableFloatingIP.should.equal(utils.parseBool(loadBalancingRules.enableFloatingIP));
          done();
        });
      });
      it('set should update load balancing rules', function (done) {
        var cmd = 'network lb rule set -g {group} -n {name} --protocol {protocolNew} --load-distribution {loadDistributionNew} --frontend-port {frontendPortNew} --backend-port {backendPortNew} --idle-timeout {idleTimeoutInMinutesNew} --enable-floating-ip {enableFloatingIPNew} --lb-name {loadBalancerName} --json'.formatArgs(loadBalancingRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(loadBalancingRules.name);
          output.protocol.toLowerCase().should.equal(loadBalancingRules.protocolNew.toLowerCase());
          output.loadDistribution.toLowerCase().should.equal(loadBalancingRules.loadDistributionNew.toLowerCase());
          output.frontendPort.should.equal(parseInt(loadBalancingRules.frontendPortNew, 10));
          output.backendPort.should.equal(parseInt(loadBalancingRules.backendPortNew, 10));
          output.idleTimeoutInMinutes.should.equal(parseInt(loadBalancingRules.idleTimeoutInMinutesNew, 10));
          output.enableFloatingIP.should.equal(utils.parseBool(loadBalancingRules.enableFloatingIPNew));
          done();
        });
      });
      it('list should display all load balancing rules in resource group', function (done) {
        var cmd = 'network lb rule list -g {group} --lb-name {loadBalancerName} --json'.formatArgs(loadBalancingRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === loadBalancingRules.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete load balancing rules', function (done) {
        var cmd = 'network lb rule delete -g {group} -n {name} --lb-name {loadBalancerName} --quiet --json'.formatArgs(loadBalancingRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network lb rule show -g {group} -n {name} --lb-name {loadBalancerName} --json'.formatArgs(loadBalancingRules);
          generatorUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text || '{}');
            output.should.be.empty;

            cmd = 'network lb rule list -g {group} --lb-name {loadBalancerName} --json'.formatArgs(loadBalancingRules);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var outputs = JSON.parse(result.text);
              _.some(outputs, function (output) {
                return output.name === loadBalancingRules.name;
              }).should.be.false;
              done();
            });
          });
        });
      });
      it('create with defaults should create load balancing rules with default values', function (done) {
        var cmd = 'network lb rule create -g {group} -n {name} --lb-name {loadBalancerName} --json'.formatArgs(loadBalancingRulesDefault);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(loadBalancingRulesDefault.name);
          output.protocol.toLowerCase().should.equal(loadBalancingRulesDefault.protocol.toLowerCase());
          output.loadDistribution.toLowerCase().should.equal(loadBalancingRulesDefault.loadDistribution.toLowerCase());
          output.frontendPort.should.equal(parseInt(loadBalancingRulesDefault.frontendPort, 10));
          output.backendPort.should.equal(parseInt(loadBalancingRulesDefault.backendPort, 10));
          output.idleTimeoutInMinutes.should.equal(parseInt(loadBalancingRulesDefault.idleTimeoutInMinutes, 10));
          output.enableFloatingIP.should.equal(utils.parseBool(loadBalancingRulesDefault.enableFloatingIP))

          cmd = 'network lb rule delete -g {group} -n {name} --lb-name {loadBalancerName} --quiet --json'.formatArgs(loadBalancingRulesDefault);
          generatorUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create should fail for protocol out of range', function (done) {
        var cmd = 'network lb rule create -g {group} -n {name} --protocol {protocol} --lb-name {loadBalancerName} --json'.formatArgs(protocolOutOfRange);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for frontend port under allowed value', function (done) {
        var cmd = 'network lb rule create -g {group} -n {name} --frontend-port {frontendPort} --lb-name {loadBalancerName} --json'.formatArgs(frontendPortUnderAllowedValue);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for frontend port over allowed value', function (done) {
        var cmd = 'network lb rule create -g {group} -n {name} --frontend-port {frontendPort} --lb-name {loadBalancerName} --json'.formatArgs(frontendPortOverAllowedValue);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for backend port out of range', function (done) {
        var cmd = 'network lb rule create -g {group} -n {name} --backend-port {backendPort} --lb-name {loadBalancerName} --json'.formatArgs(backendPortOutOfRange);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for load distribution out of range', function (done) {
        var cmd = 'network lb rule create -g {group} -n {name} --load-distribution {loadDistribution} --lb-name {loadBalancerName} --json'.formatArgs(loadDistributionOutOfRange);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for idle timeout in minutes over allowed value', function (done) {
        var cmd = 'network lb rule create -g {group} -n {name} --idle-timeout {idleTimeoutInMinutes} --lb-name {loadBalancerName} --json'.formatArgs(idleTimeoutInMinutesOverAllowedValue);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for idle timeout in minutes under allowed value', function (done) {
        var cmd = 'network lb rule create -g {group} -n {name} --idle-timeout {idleTimeoutInMinutes} --lb-name {loadBalancerName} --json'.formatArgs(idleTimeoutInMinutesUnderAllowedValue);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
    });
  });
});
