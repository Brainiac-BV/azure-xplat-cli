// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidServiceProviderName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/invalidServiceProviderName' under resource group 'xplat-test-circuit' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '39ff81d0-9f35-4451-b60c-f05bc5b9d198',
  'x-ms-correlation-request-id': '39ff81d0-9f35-4451-b60c-f05bc5b9d198',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114129Z:39ff81d0-9f35-4451-b60c-f05bc5b9d198',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 11:41:28 GMT',
  connection: 'close',
  'content-length': '187' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidServiceProviderName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/invalidServiceProviderName' under resource group 'xplat-test-circuit' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '39ff81d0-9f35-4451-b60c-f05bc5b9d198',
  'x-ms-correlation-request-id': '39ff81d0-9f35-4451-b60c-f05bc5b9d198',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114129Z:39ff81d0-9f35-4451-b60c-f05bc5b9d198',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 11:41:28 GMT',
  connection: 'close',
  'content-length': '187' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidServiceProviderName?api-version=2017-08-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"ExpressRouteCircuitServiceProviderDoesNotExist\",\r\n    \"message\": \"The Service Provider FakeProvider specified for Express Route Circuit /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidServiceProviderName does not exist.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '372',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '77a0671c-520e-404e-b8d3-aef2ff9c6e48',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '27ba0b61-dd46-4c40-9311-c6b0ab9c2191',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114136Z:27ba0b61-dd46-4c40-9311-c6b0ab9c2191',
  date: 'Fri, 01 Sep 2017 11:41:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidServiceProviderName?api-version=2017-08-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"ExpressRouteCircuitServiceProviderDoesNotExist\",\r\n    \"message\": \"The Service Provider FakeProvider specified for Express Route Circuit /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidServiceProviderName does not exist.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '372',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '77a0671c-520e-404e-b8d3-aef2ff9c6e48',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '27ba0b61-dd46-4c40-9311-c6b0ab9c2191',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114136Z:27ba0b61-dd46-4c40-9311-c6b0ab9c2191',
  date: 'Fri, 01 Sep 2017 11:41:35 GMT',
  connection: 'close' });
 return result; }]];