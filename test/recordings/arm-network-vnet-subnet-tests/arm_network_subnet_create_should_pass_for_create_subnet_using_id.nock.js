// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '286',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f4a35bf0-723f-4116-a2aa-1f5872c6ee23',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '5176995a-ef9f-41e0-be4c-b3ae5d844256',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091440Z:5176995a-ef9f-41e0-be4c-b3ae5d844256',
  date: 'Fri, 28 Jul 2017 09:14:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '286',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f4a35bf0-723f-4116-a2aa-1f5872c6ee23',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '5176995a-ef9f-41e0-be4c-b3ae5d844256',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091440Z:5176995a-ef9f-41e0-be4c-b3ae5d844256',
  date: 'Fri, 28 Jul 2017 09:14:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-06-01', '*')
  .reply(201, "{\r\n  \"name\": \"createSubnetUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName\",\r\n  \"etag\": \"W/\\\"35a702e0-b7c9-4640-be0f-500f00dada7e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '787',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '6e1828f0-c84f-4b47-9666-1aaaf9141b5f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/6e1828f0-c84f-4b47-9666-1aaaf9141b5f?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '722a00bf-043e-4610-8ced-cd3969ddf473',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091441Z:722a00bf-043e-4610-8ced-cd3969ddf473',
  date: 'Fri, 28 Jul 2017 09:14:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-06-01', '*')
  .reply(201, "{\r\n  \"name\": \"createSubnetUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName\",\r\n  \"etag\": \"W/\\\"35a702e0-b7c9-4640-be0f-500f00dada7e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '787',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '6e1828f0-c84f-4b47-9666-1aaaf9141b5f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/6e1828f0-c84f-4b47-9666-1aaaf9141b5f?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '722a00bf-043e-4610-8ced-cd3969ddf473',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091441Z:722a00bf-043e-4610-8ced-cd3969ddf473',
  date: 'Fri, 28 Jul 2017 09:14:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/6e1828f0-c84f-4b47-9666-1aaaf9141b5f?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '03198dbb-dbc7-469c-8ec5-ad12e5f675c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '79aaab60-77a4-4e7a-a95c-ed86dce3b830',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091512Z:79aaab60-77a4-4e7a-a95c-ed86dce3b830',
  date: 'Fri, 28 Jul 2017 09:15:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/6e1828f0-c84f-4b47-9666-1aaaf9141b5f?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '03198dbb-dbc7-469c-8ec5-ad12e5f675c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '79aaab60-77a4-4e7a-a95c-ed86dce3b830',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091512Z:79aaab60-77a4-4e7a-a95c-ed86dce3b830',
  date: 'Fri, 28 Jul 2017 09:15:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName\",\r\n  \"etag\": \"W/\\\"7679d712-49c7-4d4b-8615-536c9839e97e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '788',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7679d712-49c7-4d4b-8615-536c9839e97e"',
  'x-ms-request-id': 'e22b7854-2948-403f-a942-537613217f61',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '36883bd6-172a-4e0b-b0e8-79397b977e63',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091513Z:36883bd6-172a-4e0b-b0e8-79397b977e63',
  date: 'Fri, 28 Jul 2017 09:15:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName\",\r\n  \"etag\": \"W/\\\"7679d712-49c7-4d4b-8615-536c9839e97e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '788',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7679d712-49c7-4d4b-8615-536c9839e97e"',
  'x-ms-request-id': 'e22b7854-2948-403f-a942-537613217f61',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '36883bd6-172a-4e0b-b0e8-79397b977e63',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091513Z:36883bd6-172a-4e0b-b0e8-79397b977e63',
  date: 'Fri, 28 Jul 2017 09:15:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName\",\r\n  \"etag\": \"W/\\\"7679d712-49c7-4d4b-8615-536c9839e97e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '788',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7679d712-49c7-4d4b-8615-536c9839e97e"',
  'x-ms-request-id': '58b05d72-89c2-4104-8d19-74bc09303024',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '58178bd5-7ec4-4ae8-8705-a619935a6302',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091515Z:58178bd5-7ec4-4ae8-8705-a619935a6302',
  date: 'Fri, 28 Jul 2017 09:15:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName\",\r\n  \"etag\": \"W/\\\"7679d712-49c7-4d4b-8615-536c9839e97e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '788',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7679d712-49c7-4d4b-8615-536c9839e97e"',
  'x-ms-request-id': '58b05d72-89c2-4104-8d19-74bc09303024',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '58178bd5-7ec4-4ae8-8705-a619935a6302',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091515Z:58178bd5-7ec4-4ae8-8705-a619935a6302',
  date: 'Fri, 28 Jul 2017 09:15:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operationResults/14d55b6f-8e22-4774-aef4-aa50b0ec31c7?api-version=2017-06-01',
  'retry-after': '10',
  'x-ms-request-id': '14d55b6f-8e22-4774-aef4-aa50b0ec31c7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/14d55b6f-8e22-4774-aef4-aa50b0ec31c7?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'c449b405-2158-4c70-95a4-a5c13dc2f5ce',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091517Z:c449b405-2158-4c70-95a4-a5c13dc2f5ce',
  date: 'Fri, 28 Jul 2017 09:15:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operationResults/14d55b6f-8e22-4774-aef4-aa50b0ec31c7?api-version=2017-06-01',
  'retry-after': '10',
  'x-ms-request-id': '14d55b6f-8e22-4774-aef4-aa50b0ec31c7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/14d55b6f-8e22-4774-aef4-aa50b0ec31c7?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'c449b405-2158-4c70-95a4-a5c13dc2f5ce',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091517Z:c449b405-2158-4c70-95a4-a5c13dc2f5ce',
  date: 'Fri, 28 Jul 2017 09:15:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/14d55b6f-8e22-4774-aef4-aa50b0ec31c7?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0f954cd4-4e79-4b70-aea1-ddc490bf929e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'd5544b19-c0c6-4149-a5db-18c97aa597ba',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091548Z:d5544b19-c0c6-4149-a5db-18c97aa597ba',
  date: 'Fri, 28 Jul 2017 09:15:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/14d55b6f-8e22-4774-aef4-aa50b0ec31c7?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0f954cd4-4e79-4b70-aea1-ddc490bf929e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'd5544b19-c0c6-4149-a5db-18c97aa597ba',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091548Z:d5544b19-c0c6-4149-a5db-18c97aa597ba',
  date: 'Fri, 28 Jul 2017 09:15:48 GMT',
  connection: 'close' });
 return result; }]];