// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Compute/virtualMachines/vm15311?api-version=2017-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"9fde673f-d1fd-4d9e-a9cb-fb704d3a8a2d\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Compute/availabilitySets/XPLATTESTAVS7\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"CoreOS\",\r\n        \"offer\": \"CoreOS\",\r\n        \"sku\": \"Stable\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"vm15311_OsDisk_1_fdcddd8762584e84b70af1b3ba18d02d\",\r\n        \"createOption\": \"FromImage\",\r\n        \"caching\": \"None\",\r\n        \"managedDisk\": {\r\n          \"storageAccountType\": \"Premium_LRS\",\r\n          \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Compute/disks/vm15311_OsDisk_1_fdcddd8762584e84b70af1b3ba18d02d\"\r\n        },\r\n        \"diskSizeGB\": 31\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"diskvm1\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Network/networkInterfaces/xplattestnic2611\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Compute/virtualMachines/vm15311\",\r\n  \"name\": \"vm15311\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1764',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'd2c719a4-93f8-4ec2-b08c-6e3d1408f3ea',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'e99af08f-bcac-4293-9639-8d999f81776c',
  'x-ms-routing-request-id': 'WESTUS2:20170602T164830Z:e99af08f-bcac-4293-9639-8d999f81776c',
  date: 'Fri, 02 Jun 2017 16:48:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Compute/virtualMachines/vm15311?api-version=2017-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"9fde673f-d1fd-4d9e-a9cb-fb704d3a8a2d\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Compute/availabilitySets/XPLATTESTAVS7\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"CoreOS\",\r\n        \"offer\": \"CoreOS\",\r\n        \"sku\": \"Stable\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"vm15311_OsDisk_1_fdcddd8762584e84b70af1b3ba18d02d\",\r\n        \"createOption\": \"FromImage\",\r\n        \"caching\": \"None\",\r\n        \"managedDisk\": {\r\n          \"storageAccountType\": \"Premium_LRS\",\r\n          \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Compute/disks/vm15311_OsDisk_1_fdcddd8762584e84b70af1b3ba18d02d\"\r\n        },\r\n        \"diskSizeGB\": 31\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"diskvm1\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Network/networkInterfaces/xplattestnic2611\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Compute/virtualMachines/vm15311\",\r\n  \"name\": \"vm15311\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1764',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'd2c719a4-93f8-4ec2-b08c-6e3d1408f3ea',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'e99af08f-bcac-4293-9639-8d999f81776c',
  'x-ms-routing-request-id': 'WESTUS2:20170602T164830Z:e99af08f-bcac-4293-9639-8d999f81776c',
  date: 'Fri, 02 Jun 2017 16:48:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Compute/virtualMachines/vm15311?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/42d297e6-0be5-4965-8bcc-bc7e2b22981d?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/42d297e6-0be5-4965-8bcc-bc7e2b22981d?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '42d297e6-0be5-4965-8bcc-bc7e2b22981d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '48e3ec1a-fd77-4877-928b-fae02a87a0fa',
  'x-ms-routing-request-id': 'WESTUS2:20170602T164832Z:48e3ec1a-fd77-4877-928b-fae02a87a0fa',
  date: 'Fri, 02 Jun 2017 16:48:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Compute/virtualMachines/vm15311?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/42d297e6-0be5-4965-8bcc-bc7e2b22981d?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/42d297e6-0be5-4965-8bcc-bc7e2b22981d?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '42d297e6-0be5-4965-8bcc-bc7e2b22981d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '48e3ec1a-fd77-4877-928b-fae02a87a0fa',
  'x-ms-routing-request-id': 'WESTUS2:20170602T164832Z:48e3ec1a-fd77-4877-928b-fae02a87a0fa',
  date: 'Fri, 02 Jun 2017 16:48:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/42d297e6-0be5-4965-8bcc-bc7e2b22981d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T16:48:32.8935456+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"42d297e6-0be5-4965-8bcc-bc7e2b22981d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '68ff945d-372c-4b8c-8b9d-af1c8b124580',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'f665c659-3562-4952-8654-18320485024c',
  'x-ms-routing-request-id': 'WESTUS2:20170602T164903Z:f665c659-3562-4952-8654-18320485024c',
  date: 'Fri, 02 Jun 2017 16:49:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/42d297e6-0be5-4965-8bcc-bc7e2b22981d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T16:48:32.8935456+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"42d297e6-0be5-4965-8bcc-bc7e2b22981d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '68ff945d-372c-4b8c-8b9d-af1c8b124580',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'f665c659-3562-4952-8654-18320485024c',
  'x-ms-routing-request-id': 'WESTUS2:20170602T164903Z:f665c659-3562-4952-8654-18320485024c',
  date: 'Fri, 02 Jun 2017 16:49:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/42d297e6-0be5-4965-8bcc-bc7e2b22981d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T16:48:32.8935456+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"42d297e6-0be5-4965-8bcc-bc7e2b22981d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '0e85f06a-4e44-4515-915b-0114d41b4cb1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '14e54917-1434-4eb5-b88b-5b536dc2af98',
  'x-ms-routing-request-id': 'WESTUS:20170602T164934Z:14e54917-1434-4eb5-b88b-5b536dc2af98',
  date: 'Fri, 02 Jun 2017 16:49:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/42d297e6-0be5-4965-8bcc-bc7e2b22981d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T16:48:32.8935456+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"42d297e6-0be5-4965-8bcc-bc7e2b22981d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '0e85f06a-4e44-4515-915b-0114d41b4cb1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '14e54917-1434-4eb5-b88b-5b536dc2af98',
  'x-ms-routing-request-id': 'WESTUS:20170602T164934Z:14e54917-1434-4eb5-b88b-5b536dc2af98',
  date: 'Fri, 02 Jun 2017 16:49:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/42d297e6-0be5-4965-8bcc-bc7e2b22981d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T16:48:32.8935456+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"42d297e6-0be5-4965-8bcc-bc7e2b22981d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '6ac74064-a6e0-43bb-8887-8a5d975f4657',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '0a0897f8-6cc1-4588-b88c-253fe2005c79',
  'x-ms-routing-request-id': 'WESTUS:20170602T165005Z:0a0897f8-6cc1-4588-b88c-253fe2005c79',
  date: 'Fri, 02 Jun 2017 16:50:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/42d297e6-0be5-4965-8bcc-bc7e2b22981d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T16:48:32.8935456+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"42d297e6-0be5-4965-8bcc-bc7e2b22981d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '6ac74064-a6e0-43bb-8887-8a5d975f4657',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '0a0897f8-6cc1-4588-b88c-253fe2005c79',
  'x-ms-routing-request-id': 'WESTUS:20170602T165005Z:0a0897f8-6cc1-4588-b88c-253fe2005c79',
  date: 'Fri, 02 Jun 2017 16:50:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/42d297e6-0be5-4965-8bcc-bc7e2b22981d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T16:48:32.8935456+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"42d297e6-0be5-4965-8bcc-bc7e2b22981d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'fa84923f-d19e-44b2-b499-e33a4b02d64b',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': '9f63137a-fb4b-4a8f-8c58-2823f879e2f1',
  'x-ms-routing-request-id': 'WESTUS:20170602T165036Z:9f63137a-fb4b-4a8f-8c58-2823f879e2f1',
  date: 'Fri, 02 Jun 2017 16:50:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/42d297e6-0be5-4965-8bcc-bc7e2b22981d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T16:48:32.8935456+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"42d297e6-0be5-4965-8bcc-bc7e2b22981d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'fa84923f-d19e-44b2-b499-e33a4b02d64b',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': '9f63137a-fb4b-4a8f-8c58-2823f879e2f1',
  'x-ms-routing-request-id': 'WESTUS:20170602T165036Z:9f63137a-fb4b-4a8f-8c58-2823f879e2f1',
  date: 'Fri, 02 Jun 2017 16:50:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/42d297e6-0be5-4965-8bcc-bc7e2b22981d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T16:48:32.8935456+00:00\",\r\n  \"endTime\": \"2017-06-02T16:50:58.6120703+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"42d297e6-0be5-4965-8bcc-bc7e2b22981d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '2ec8b8b9-c63f-49b7-8469-f808ba61c5ed',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'b70d742a-e880-4243-b9df-efcafbca9ae0',
  'x-ms-routing-request-id': 'WESTUS:20170602T165107Z:b70d742a-e880-4243-b9df-efcafbca9ae0',
  date: 'Fri, 02 Jun 2017 16:51:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/42d297e6-0be5-4965-8bcc-bc7e2b22981d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T16:48:32.8935456+00:00\",\r\n  \"endTime\": \"2017-06-02T16:50:58.6120703+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"42d297e6-0be5-4965-8bcc-bc7e2b22981d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '2ec8b8b9-c63f-49b7-8469-f808ba61c5ed',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'b70d742a-e880-4243-b9df-efcafbca9ae0',
  'x-ms-routing-request-id': 'WESTUS:20170602T165107Z:b70d742a-e880-4243-b9df-efcafbca9ae0',
  date: 'Fri, 02 Jun 2017 16:51:06 GMT',
  connection: 'close' });
 return result; }]];
