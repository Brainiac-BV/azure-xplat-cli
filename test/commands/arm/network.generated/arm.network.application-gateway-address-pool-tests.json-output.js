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

var testPrefix = 'arm-network-application-gateway-address-pool-tests-generated',
  groupName = 'xplat-test-address-pool',
  location;
var index = 0;

var backendAddressPools = {
  backendAddresses: '12.13.14.15',
  name: 'backendAddressPoolName'
};

backendAddressPools.virtualNetworkName = 'virtualNetworkName';
backendAddressPools.subnetName = 'subnetName';
backendAddressPools.publicIPAddressName = 'publicIPAddressName';
backendAddressPools.applicationGatewayName = 'applicationGatewayName';

var subnet = {
  addressPrefix: '10.0.0.0/16',
  virtualNetworkName: 'virtualNetworkName',
  name: 'subnetName'
};

var virtualNetwork = {
  location: 'westus',
  name: 'virtualNetworkName'
};

var applicationGateway = {
  backendAddresses: '10.0.0.0',
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'subnetName',
  publicIPAddressName: 'publicIPAddressName',
  name: 'applicationGatewayName'
};

var publicIPAddress = {
  location: 'westus',
  name: 'publicIPAddressName'
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
        location = backendAddressPools.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        backendAddressPools.location = location;
        backendAddressPools.name = suite.isMocked ? backendAddressPools.name : suite.generateId(backendAddressPools.name, null);
        backendAddressPools.group = groupName;
        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network vnet create -g {1} -n {name} --location {location} --json'.formatArgs(virtualNetwork, groupName);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              if (!testUtils.assertExitStatus(result, done)) return;
              var cmd = 'network vnet subnet create -g {1} -n {name} --address-prefix {addressPrefix} --vnet-name {virtualNetworkName} --json'.formatArgs(subnet, groupName);
              generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                if (!testUtils.assertExitStatus(result, done)) return;
                var cmd = 'network public-ip create -g {1} -n {name} --location {location} --json'.formatArgs(publicIPAddress, groupName);
                generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                  if (!testUtils.assertExitStatus(result, done)) return;
                  var cmd = 'network application-gateway create -g {1} -n {name} --servers {backendAddresses} --location {location} --vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(applicationGateway, groupName);
                  generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                    if (!testUtils.assertExitStatus(result, done)) return;
                    done();
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

    describe('backend address pools', function () {
      this.timeout(testTimeout);
      it('create should create backend address pools', function (done) {
        var cmd = 'network application-gateway address-pool create -g {group} -n {name} --servers {backendAddresses} --gateway-name {applicationGatewayName} --json'.formatArgs(backendAddressPools);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var parentOutput = JSON.parse(result.text);
          parentOutput.name.should.equal('applicationGatewayName');
          var output = utils.findFirstCaseIgnore(parentOutput.backendAddressPools, {name: 'backendAddressPoolName'});
          output.name.should.equal(backendAddressPools.name);
          generatorUtils.splitStringByCharacter(backendAddressPools.backendAddresses, ',').forEach(function (item) { output.backendAddresses.should.containEql({ ipAddress : item }) });
          done();
        });
      });
      it('show should display backend address pools details', function (done) {
        var cmd = 'network application-gateway address-pool show -g {group} -n {name} --gateway-name {applicationGatewayName} --json'.formatArgs(backendAddressPools);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(backendAddressPools.name);
          generatorUtils.splitStringByCharacter(backendAddressPools.backendAddresses, ',').forEach(function (item) { output.backendAddresses.should.containEql({ ipAddress : item }) });
          done();
        });
      });
      it('list should display all backend address pools in resource group', function (done) {
        var cmd = 'network application-gateway address-pool list -g {group} --gateway-name {applicationGatewayName} --json'.formatArgs(backendAddressPools);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === backendAddressPools.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete backend address pools', function (done) {
        var cmd = 'network application-gateway address-pool delete -g {group} -n {name} --gateway-name {applicationGatewayName} --quiet --json'.formatArgs(backendAddressPools);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network application-gateway address-pool show -g {group} -n {name} --gateway-name {applicationGatewayName} --json'.formatArgs(backendAddressPools);
          generatorUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text || '{}');
            output.should.be.empty;

            cmd = 'network application-gateway address-pool list -g {group} --gateway-name {applicationGatewayName} --json'.formatArgs(backendAddressPools);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var outputs = JSON.parse(result.text);
              _.some(outputs, function (output) {
                return output.name === backendAddressPools.name;
              }).should.be.false;
              done();
            });
          });
        });
      });
    });
  });
});
