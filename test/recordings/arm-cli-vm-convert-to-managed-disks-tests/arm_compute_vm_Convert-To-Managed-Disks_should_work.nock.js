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
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert7943/providers/Microsoft.Compute/virtualMachines/xplatvmStSp4643/convertToManagedDisks?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d13d1888-f02e-4091-9817-5b82b5b7fa42?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d13d1888-f02e-4091-9817-5b82b5b7fa42?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'd13d1888-f02e-4091-9817-5b82b5b7fa42',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'e17fd425-495c-4c2a-a397-f877af8a941a',
  'x-ms-routing-request-id': 'WESTUS2:20170602T163518Z:e17fd425-495c-4c2a-a397-f877af8a941a',
  date: 'Fri, 02 Jun 2017 16:35:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert7943/providers/Microsoft.Compute/virtualMachines/xplatvmStSp4643/convertToManagedDisks?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d13d1888-f02e-4091-9817-5b82b5b7fa42?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d13d1888-f02e-4091-9817-5b82b5b7fa42?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'd13d1888-f02e-4091-9817-5b82b5b7fa42',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'e17fd425-495c-4c2a-a397-f877af8a941a',
  'x-ms-routing-request-id': 'WESTUS2:20170602T163518Z:e17fd425-495c-4c2a-a397-f877af8a941a',
  date: 'Fri, 02 Jun 2017 16:35:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d13d1888-f02e-4091-9817-5b82b5b7fa42?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T16:35:18.7288113+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"d13d1888-f02e-4091-9817-5b82b5b7fa42\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '3ab53080-c441-4e0a-b44f-a6c78228a3d1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '840c83fd-29c5-4a23-b735-28a8c25a5cbb',
  'x-ms-routing-request-id': 'WESTUS2:20170602T163549Z:840c83fd-29c5-4a23-b735-28a8c25a5cbb',
  date: 'Fri, 02 Jun 2017 16:35:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d13d1888-f02e-4091-9817-5b82b5b7fa42?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T16:35:18.7288113+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"d13d1888-f02e-4091-9817-5b82b5b7fa42\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '3ab53080-c441-4e0a-b44f-a6c78228a3d1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '840c83fd-29c5-4a23-b735-28a8c25a5cbb',
  'x-ms-routing-request-id': 'WESTUS2:20170602T163549Z:840c83fd-29c5-4a23-b735-28a8c25a5cbb',
  date: 'Fri, 02 Jun 2017 16:35:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d13d1888-f02e-4091-9817-5b82b5b7fa42?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T16:35:18.7288113+00:00\",\r\n  \"endTime\": \"2017-06-02T16:36:13.8895686+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"d13d1888-f02e-4091-9817-5b82b5b7fa42\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'e4b3e73d-374f-4115-908f-1228876ead66',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': 'cbf052b3-1054-44e0-80ed-a6a11493ae42',
  'x-ms-routing-request-id': 'WESTUS:20170602T163620Z:cbf052b3-1054-44e0-80ed-a6a11493ae42',
  date: 'Fri, 02 Jun 2017 16:36:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d13d1888-f02e-4091-9817-5b82b5b7fa42?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T16:35:18.7288113+00:00\",\r\n  \"endTime\": \"2017-06-02T16:36:13.8895686+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"d13d1888-f02e-4091-9817-5b82b5b7fa42\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'e4b3e73d-374f-4115-908f-1228876ead66',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': 'cbf052b3-1054-44e0-80ed-a6a11493ae42',
  'x-ms-routing-request-id': 'WESTUS:20170602T163620Z:cbf052b3-1054-44e0-80ed-a6a11493ae42',
  date: 'Fri, 02 Jun 2017 16:36:20 GMT',
  connection: 'close' });
 return result; }]];
