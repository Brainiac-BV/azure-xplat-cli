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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles?api-version=2017-05-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profileName\",\"name\":\"profileName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Disabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":400},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTPS\",\"port\":90,\"path\":\"\\/index.aspx\",\"intervalInSeconds\":10,\"toleratedNumberOfFailures\":5,\"timeoutInSeconds\":5},\"endpoints\":[]}}]}", { 'cache-control': 'private',
  'content-length': '644',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '68fb373d-15f1-4de5-8d71-eacc7d204e22',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '62a8d4c8-dbb7-44b7-80a1-07adff91977f',
  'x-ms-routing-request-id': 'WESTEUROPE:20171017T085720Z:62a8d4c8-dbb7-44b7-80a1-07adff91977f',
  date: 'Tue, 17 Oct 2017 08:57:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles?api-version=2017-05-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profileName\",\"name\":\"profileName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Disabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":400},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTPS\",\"port\":90,\"path\":\"\\/index.aspx\",\"intervalInSeconds\":10,\"toleratedNumberOfFailures\":5,\"timeoutInSeconds\":5},\"endpoints\":[]}}]}", { 'cache-control': 'private',
  'content-length': '644',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '68fb373d-15f1-4de5-8d71-eacc7d204e22',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '62a8d4c8-dbb7-44b7-80a1-07adff91977f',
  'x-ms-routing-request-id': 'WESTEUROPE:20171017T085720Z:62a8d4c8-dbb7-44b7-80a1-07adff91977f',
  date: 'Tue, 17 Oct 2017 08:57:20 GMT',
  connection: 'close' });
 return result; }]];