// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'AAD_POLICY_ADMINISTRATION_SERVICE_TEST_CLI',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME'] = 'testUserAuto2@rbacCliTest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_PASSWORD'] = 'Pa$$w0rd2';
  process.env['AZURE_AD_TEST_GROUP_NAME'] = 'testgroupauto';
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_AD_TEST_SP_DISPLAY_NAME'] = 'mytestapprandomauto0012345';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/26bcdc6f-b67f-4783-8798-872472f66ee0?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_28dcbc9f-da4a-4b2d-ba17-865d32e87f2b\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2017-05-18T00:15:36.5261265Z\",\"updatedOn\":\"2017-05-18T00:15:36.5261265Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/26bcdc6f-b67f-4783-8798-872472f66ee0\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"26bcdc6f-b67f-4783-8798-872472f66ee0\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c7046373-6b15-460d-9e5a-cd2d38d82c55',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '0ebcc0f6-9ae3-451f-ace8-a7fa98d4dd04',
  'x-ms-routing-request-id': 'WESTUS2:20170518T001537Z:0ebcc0f6-9ae3-451f-ace8-a7fa98d4dd04',
  date: 'Thu, 18 May 2017 00:15:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/26bcdc6f-b67f-4783-8798-872472f66ee0?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_28dcbc9f-da4a-4b2d-ba17-865d32e87f2b\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2017-05-18T00:15:36.5261265Z\",\"updatedOn\":\"2017-05-18T00:15:36.5261265Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/26bcdc6f-b67f-4783-8798-872472f66ee0\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"26bcdc6f-b67f-4783-8798-872472f66ee0\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c7046373-6b15-460d-9e5a-cd2d38d82c55',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '0ebcc0f6-9ae3-451f-ace8-a7fa98d4dd04',
  'x-ms-routing-request-id': 'WESTUS2:20170518T001537Z:0ebcc0f6-9ae3-451f-ace8-a7fa98d4dd04',
  date: 'Thu, 18 May 2017 00:15:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/26bcdc6f-b67f-4783-8798-872472f66ee0?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_28dcbc9f-da4a-4b2d-ba17-865d32e87f2b\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2017-05-18T00:15:36.5261265Z\",\"updatedOn\":\"2017-05-18T00:15:36.5261265Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/26bcdc6f-b67f-4783-8798-872472f66ee0\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"26bcdc6f-b67f-4783-8798-872472f66ee0\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8ab165c1-ec1d-42c3-84ec-1e8fd20fafb8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-correlation-request-id': '3c908b57-6419-4270-8eb7-118acefffb55',
  'x-ms-routing-request-id': 'WESTUS2:20170518T001537Z:3c908b57-6419-4270-8eb7-118acefffb55',
  date: 'Thu, 18 May 2017 00:15:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/26bcdc6f-b67f-4783-8798-872472f66ee0?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_28dcbc9f-da4a-4b2d-ba17-865d32e87f2b\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2017-05-18T00:15:36.5261265Z\",\"updatedOn\":\"2017-05-18T00:15:36.5261265Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/26bcdc6f-b67f-4783-8798-872472f66ee0\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"26bcdc6f-b67f-4783-8798-872472f66ee0\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8ab165c1-ec1d-42c3-84ec-1e8fd20fafb8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-correlation-request-id': '3c908b57-6419-4270-8eb7-118acefffb55',
  'x-ms-routing-request-id': 'WESTUS2:20170518T001537Z:3c908b57-6419-4270-8eb7-118acefffb55',
  date: 'Thu, 18 May 2017 00:15:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/26bcdc6f-b67f-4783-8798-872472f66ee0?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_28dcbc9f-da4a-4b2d-ba17-865d32e87f2b\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2017-05-18T00:15:36.5261265Z\",\"updatedOn\":\"2017-05-18T00:15:36.5261265Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/26bcdc6f-b67f-4783-8798-872472f66ee0\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"26bcdc6f-b67f-4783-8798-872472f66ee0\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e4583bfb-d00e-4abe-a6ef-681eca02645a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '6b259679-c2e9-466d-bd54-12cab282bebb',
  'x-ms-routing-request-id': 'WESTUS2:20170518T001538Z:6b259679-c2e9-466d-bd54-12cab282bebb',
  date: 'Thu, 18 May 2017 00:15:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/26bcdc6f-b67f-4783-8798-872472f66ee0?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_28dcbc9f-da4a-4b2d-ba17-865d32e87f2b\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2017-05-18T00:15:36.5261265Z\",\"updatedOn\":\"2017-05-18T00:15:36.5261265Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/26bcdc6f-b67f-4783-8798-872472f66ee0\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"26bcdc6f-b67f-4783-8798-872472f66ee0\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e4583bfb-d00e-4abe-a6ef-681eca02645a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '6b259679-c2e9-466d-bd54-12cab282bebb',
  'x-ms-routing-request-id': 'WESTUS2:20170518T001538Z:6b259679-c2e9-466d-bd54-12cab282bebb',
  date: 'Thu, 18 May 2017 00:15:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/26bcdc6f-b67f-4783-8798-872472f66ee0?api-version=2015-07-01')
  .reply(404, "{\"error\":{\"code\":\"RoleDefinitionDoesNotExist\",\"message\":\"The specified role definition with ID '26bcdc6f-b67f-4783-8798-872472f66ee0' does not exist.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '152',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a3de3ccc-d520-44aa-b232-7421c6afc3ee',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': 'f2346515-8b88-4d2f-8fad-568fa724cb8f',
  'x-ms-routing-request-id': 'WESTUS2:20170518T001539Z:f2346515-8b88-4d2f-8fad-568fa724cb8f',
  date: 'Thu, 18 May 2017 00:15:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/26bcdc6f-b67f-4783-8798-872472f66ee0?api-version=2015-07-01')
  .reply(404, "{\"error\":{\"code\":\"RoleDefinitionDoesNotExist\",\"message\":\"The specified role definition with ID '26bcdc6f-b67f-4783-8798-872472f66ee0' does not exist.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '152',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a3de3ccc-d520-44aa-b232-7421c6afc3ee',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': 'f2346515-8b88-4d2f-8fad-568fa724cb8f',
  'x-ms-routing-request-id': 'WESTUS2:20170518T001539Z:f2346515-8b88-4d2f-8fad-568fa724cb8f',
  date: 'Thu, 18 May 2017 00:15:38 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['28dcbc9f-da4a-4b2d-ba17-865d32e87f2b','26bcdc6f-b67f-4783-8798-872472f66ee0'];};