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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkPeeringName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName\",\r\n  \"etag\": \"W/\\\"4fcef45c-cd33-4e66-a1da-99da45291238\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringState\": \"Initiated\",\r\n    \"remoteVirtualNetwork\": {\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/remoteNetworkName\"\r\n    },\r\n    \"allowVirtualNetworkAccess\": false,\r\n    \"allowForwardedTraffic\": false,\r\n    \"allowGatewayTransit\": false,\r\n    \"useRemoteGateways\": false,\r\n    \"remoteAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"11.0.0.0/8\"\r\n      ]\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '851',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4fcef45c-cd33-4e66-a1da-99da45291238"',
  'x-ms-request-id': 'f863560d-4f83-4d63-8083-df6e08cb0df0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'f70e6867-cc6a-44a5-a51e-826a6408a0e9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130112Z:f70e6867-cc6a-44a5-a51e-826a6408a0e9',
  date: 'Fri, 01 Sep 2017 13:01:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkPeeringName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName\",\r\n  \"etag\": \"W/\\\"4fcef45c-cd33-4e66-a1da-99da45291238\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringState\": \"Initiated\",\r\n    \"remoteVirtualNetwork\": {\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/remoteNetworkName\"\r\n    },\r\n    \"allowVirtualNetworkAccess\": false,\r\n    \"allowForwardedTraffic\": false,\r\n    \"allowGatewayTransit\": false,\r\n    \"useRemoteGateways\": false,\r\n    \"remoteAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"11.0.0.0/8\"\r\n      ]\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '851',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4fcef45c-cd33-4e66-a1da-99da45291238"',
  'x-ms-request-id': 'f863560d-4f83-4d63-8083-df6e08cb0df0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'f70e6867-cc6a-44a5-a51e-826a6408a0e9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130112Z:f70e6867-cc6a-44a5-a51e-826a6408a0e9',
  date: 'Fri, 01 Sep 2017 13:01:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/c080767e-fee4-48e0-af37-3f53de9a84be?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'c080767e-fee4-48e0-af37-3f53de9a84be',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/c080767e-fee4-48e0-af37-3f53de9a84be?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd85e6443-6feb-4ce3-9f00-c7677597d9a4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130115Z:d85e6443-6feb-4ce3-9f00-c7677597d9a4',
  date: 'Fri, 01 Sep 2017 13:01:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/c080767e-fee4-48e0-af37-3f53de9a84be?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'c080767e-fee4-48e0-af37-3f53de9a84be',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/c080767e-fee4-48e0-af37-3f53de9a84be?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd85e6443-6feb-4ce3-9f00-c7677597d9a4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130115Z:d85e6443-6feb-4ce3-9f00-c7677597d9a4',
  date: 'Fri, 01 Sep 2017 13:01:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/c080767e-fee4-48e0-af37-3f53de9a84be?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6416dac4-2843-4c97-b1d3-ffa76b818670',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'ee2a5516-52ee-4c4e-bd63-36e4583bc0ba',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130146Z:ee2a5516-52ee-4c4e-bd63-36e4583bc0ba',
  date: 'Fri, 01 Sep 2017 13:01:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/c080767e-fee4-48e0-af37-3f53de9a84be?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6416dac4-2843-4c97-b1d3-ffa76b818670',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'ee2a5516-52ee-4c4e-bd63-36e4583bc0ba',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130146Z:ee2a5516-52ee-4c4e-bd63-36e4583bc0ba',
  date: 'Fri, 01 Sep 2017 13:01:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName?api-version=2017-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '304',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '32677569-e2c1-4b2e-a304-f6f9dec659c1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'fb80e13a-2132-494c-9876-3ba9f83d211e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130148Z:fb80e13a-2132-494c-9876-3ba9f83d211e',
  date: 'Fri, 01 Sep 2017 13:01:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName?api-version=2017-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '304',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '32677569-e2c1-4b2e-a304-f6f9dec659c1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'fb80e13a-2132-494c-9876-3ba9f83d211e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T130148Z:fb80e13a-2132-494c-9876-3ba9f83d211e',
  date: 'Fri, 01 Sep 2017 13:01:47 GMT',
  connection: 'close' });
 return result; }]];