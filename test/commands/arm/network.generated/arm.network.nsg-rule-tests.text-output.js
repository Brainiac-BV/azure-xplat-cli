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
var $ = utils.getLocaleString;

var testPrefix = 'arm-network-nsg-rule-tests-generated',
  groupName = 'xplat-test-rule',
  location;
var index = 0;

var securityRules = {
  description: 'createdesc',
  descriptionNew: 'setdesc',
  protocol: 'Tcp',
  protocolNew: 'Udp',
  sourcePortRange: '1025',
  sourcePortRangeNew: '65535',
  destinationPortRange: '4242',
  destinationPortRangeNew: '65042',
  sourceAddressPrefix: '10.0.0.0/16',
  sourceAddressPrefixNew: '10.0.0.0/8',
  destinationAddressPrefix: '11.0.0.0/24',
  destinationAddressPrefixNew: '11.0.0.0/8',
  access: 'Allow',
  accessNew: 'Deny',
  priority: '1500',
  priorityNew: '1542',
  direction: 'Inbound',
  directionNew: 'Outbound',
  name: 'securityRuleName'
};

securityRules.networkSecurityGroupName = 'networkSecurityGroupName';

var networkSecurityGroup = {
  location: 'westus',
  name: 'networkSecurityGroupName'
};

var securityRulesDefault = {
  priority: '1500',
  protocol: '*',
  sourcePortRange: '*',
  destinationPortRange: '80',
  sourceAddressPrefix: '*',
  destinationAddressPrefix: '*',
  access: 'Allow',
  direction: 'Inbound',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'securityRulesDefaultName',
  group: groupName
};

var tooLongDescription = {
  description: 'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'tooLongDescriptionName'
};

var protocolOutOfRange = {
  protocol: 'Http',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'protocolOutOfRangeName'
};

var sourcePortOutOfRange = {
  sourcePortRange: '66600',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'sourcePortOutOfRangeName'
};

var destinationPortOutOfRange = {
  destinationPortRange: '66600',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'destinationPortOutOfRangeName'
};

var invalidSourceAddressPrefix = {
  sourceAddressPrefix: '10.0.0.0/42',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'invalidSourceAddressPrefixName'
};

var invalidDestinationAddressPrefix = {
  destinationAddressPrefix: '10.0.0.0/42',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'invalidDestinationAddressPrefixName'
};

var accessOutOfRange = {
  access: 'Access',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'accessOutOfRangeName'
};

var rulePriorityUnderRange = {
  priority: '99',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'rulePriorityUnderRangeName'
};

var rulePriorityOverRange = {
  priority: '4097',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'rulePriorityOverRangeName'
};

var directionOutOfRange = {
  direction: 'Direction',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'directionOutOfRangeName'
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
      suite = new CLITest(this, testPrefix, requiredEnvironment, true);
      suite.isRecording = false;
      suite.setupSuite(function () {
        location = securityRules.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        securityRules.location = location;
        securityRules.name = suite.isMocked ? securityRules.name : suite.generateId(securityRules.name, null);

        securityRules.group = groupName;
        tooLongDescription.group = groupName;
        protocolOutOfRange.group = groupName;
        sourcePortOutOfRange.group = groupName;
        destinationPortOutOfRange.group = groupName;
        invalidSourceAddressPrefix.group = groupName;
        invalidDestinationAddressPrefix.group = groupName;
        accessOutOfRange.group = groupName;
        rulePriorityUnderRange.group = groupName;
        rulePriorityOverRange.group = groupName;
        directionOutOfRange.group = groupName;

        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network nsg create -g {1} -n {name} --location {location} --json'.formatArgs(networkSecurityGroup, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              done();
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

    describe('security rules', function () {
      this.timeout(testTimeout);
      it('create should create security rules', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --description {description} --protocol {protocol} --source-port-range {sourcePortRange} --destination-port-range {destinationPortRange} --source-address-prefix {sourceAddressPrefix} --destination-address-prefix {destinationAddressPrefix} --access {access} --priority {priority} --direction {direction} --nsg-name {networkSecurityGroupName}'.formatArgs(securityRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('show should display security rules details', function (done) {
        var cmd = 'network nsg rule show -g {group} -n {name} --nsg-name {networkSecurityGroupName}'.formatArgs(securityRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('set should update security rules', function (done) {
        var cmd = 'network nsg rule set -g {group} -n {name} --description {descriptionNew} --protocol {protocolNew} --source-port-range {sourcePortRangeNew} --destination-port-range {destinationPortRangeNew} --source-address-prefix {sourceAddressPrefixNew} --destination-address-prefix {destinationAddressPrefixNew} --access {accessNew} --priority {priorityNew} --direction {directionNew} --nsg-name {networkSecurityGroupName}'.formatArgs(securityRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('list should display all security rules in resource group', function (done) {
        var cmd = 'network nsg rule list -g {group} --nsg-name {networkSecurityGroupName}'.formatArgs(securityRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('delete should delete security rules', function (done) {
        var cmd = 'network nsg rule delete -g {group} -n {name} --nsg-name {networkSecurityGroupName} --quiet'.formatArgs(securityRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network nsg rule show -g {group} -n {name} --nsg-name {networkSecurityGroupName}'.formatArgs(securityRules);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create with defaults should create security rules with default values', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --priority {priority} --nsg-name {networkSecurityGroupName}'.formatArgs(securityRulesDefault);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network nsg rule delete -g {group} -n {name} --nsg-name {networkSecurityGroupName} --quiet'.formatArgs(securityRulesDefault);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create should fail for too long description', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --description {description} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(tooLongDescription);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for protocol out of range', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --protocol {protocol} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(protocolOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for source port out of range', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --source-port-range {sourcePortRange} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(sourcePortOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for destination port out of range', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --destination-port-range {destinationPortRange} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(destinationPortOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid source address prefix', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --source-address-prefix {sourceAddressPrefix} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(invalidSourceAddressPrefix);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid destination address prefix', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --destination-address-prefix {destinationAddressPrefix} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(invalidDestinationAddressPrefix);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for access out of range', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --access {access} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(accessOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for rule priority under range', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(rulePriorityUnderRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for rule priority over range', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(rulePriorityOverRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for direction out of range', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --direction {direction} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(directionOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
    });
  });
});
