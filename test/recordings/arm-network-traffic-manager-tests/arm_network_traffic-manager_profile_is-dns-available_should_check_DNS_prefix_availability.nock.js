// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/providers/Microsoft.Network/checkTrafficManagerNameAvailability?api-version=2017-03-01', '*')
  .reply(200, "{\"name\":\"test-profile-dns\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"nameAvailable\":false,\"reason\":\"AlreadyExists\",\"message\":\"Domain name test-profile-dns.trafficmanager.net already exists. Please choose a different DNS prefix.\"}", { 'cache-control': 'private',
  'content-length': '239',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '040245d5-46f7-433c-b635-345d33f0986a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-writes': '1199',
  'x-ms-correlation-request-id': '1872f3db-5029-4969-a7a0-8919dacdca1f',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T045525Z:1872f3db-5029-4969-a7a0-8919dacdca1f',
  date: 'Sun, 26 Mar 2017 04:55:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/providers/Microsoft.Network/checkTrafficManagerNameAvailability?api-version=2017-03-01', '*')
  .reply(200, "{\"name\":\"test-profile-dns\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"nameAvailable\":false,\"reason\":\"AlreadyExists\",\"message\":\"Domain name test-profile-dns.trafficmanager.net already exists. Please choose a different DNS prefix.\"}", { 'cache-control': 'private',
  'content-length': '239',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '040245d5-46f7-433c-b635-345d33f0986a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-writes': '1199',
  'x-ms-correlation-request-id': '1872f3db-5029-4969-a7a0-8919dacdca1f',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T045525Z:1872f3db-5029-4969-a7a0-8919dacdca1f',
  date: 'Sun, 26 Mar 2017 04:55:24 GMT',
  connection: 'close' });
 return result; }]];