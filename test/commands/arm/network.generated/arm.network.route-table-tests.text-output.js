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

var testPrefix = 'arm-network-route-table-tests-generated',
  groupName = 'xplat-test-route-table',
  location;
var index = 0;

var routeTables = {
  location: 'westus',
  name: 'routeTableName'
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
        location = routeTables.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        routeTables.location = location;
        routeTables.name = suite.isMocked ? routeTables.name : suite.generateId(routeTables.name, null);
        routeTables.group = groupName;
        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            done();
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

    describe('route tables', function () {
      this.timeout(testTimeout);
      it('create should create route tables', function (done) {
        var cmd = 'network route-table create -g {group} -n {name} --location {location}'.formatArgs(routeTables);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('show should display route tables details', function (done) {
        var cmd = 'network route-table show -g {group} -n {name}'.formatArgs(routeTables);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('set should update route tables', function (done) {
        var cmd = 'network route-table set -g {group} -n {name}'.formatArgs(routeTables);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('list should display all route tables in resource group', function (done) {
        var cmd = 'network route-table list -g {group}'.formatArgs(routeTables);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('delete should delete route tables', function (done) {
        var cmd = 'network route-table delete -g {group} -n {name} --quiet'.formatArgs(routeTables);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network route-table show -g {group} -n {name}'.formatArgs(routeTables);
          generatorUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);

            cmd = 'network route-table list -g {group}'.formatArgs(routeTables);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              done();
            });
          });
        });
      });
    });
  });
});
