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
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7586/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-3ba3-174bc177d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.azure-dns.com.\",\"ns2-04.azure-dns.net.\",\"ns3-04.azure-dns.org.\",\"ns4-04.azure-dns.info.\"],\"numberOfRecordSets\":4}}", { 'cache-control': 'private',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-3ba3-174bc177d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'a74ecafe-fc93-4b46-8002-fb9bebaa99e1',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11995',
  'x-ms-correlation-request-id': '4f402a8f-241c-4c8b-8a3c-479f5a0f0f67',
  'x-ms-routing-request-id': 'CANADAEAST:20170126T104704Z:4f402a8f-241c-4c8b-8a3c-479f5a0f0f67',
  date: 'Thu, 26 Jan 2017 10:47:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7586/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-3ba3-174bc177d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.azure-dns.com.\",\"ns2-04.azure-dns.net.\",\"ns3-04.azure-dns.org.\",\"ns4-04.azure-dns.info.\"],\"numberOfRecordSets\":4}}", { 'cache-control': 'private',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-3ba3-174bc177d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'a74ecafe-fc93-4b46-8002-fb9bebaa99e1',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11995',
  'x-ms-correlation-request-id': '4f402a8f-241c-4c8b-8a3c-479f5a0f0f67',
  'x-ms-routing-request-id': 'CANADAEAST:20170126T104704Z:4f402a8f-241c-4c8b-8a3c-479f5a0f0f67',
  date: 'Thu, 26 Jan 2017 10:47:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7586/providers/Microsoft.Network/dnszones/exampledns.com/TXT/set-txt?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"c9022ca3-a6b2-4e94-b72a-56b0d60ab779\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.exampledns.com.\",\"TTL\":3600,\"TXTRecords\":[{\"value\":[\"longtexthere\"]}]}}", { 'cache-control': 'private',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  etag: 'c9022ca3-a6b2-4e94-b72a-56b0d60ab779',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c32d1682-db26-4f20-a76f-51fa7917e086',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '33c7c556-eaf9-4b77-8583-e864cb068d19',
  'x-ms-routing-request-id': 'CANADAEAST:20170126T104705Z:33c7c556-eaf9-4b77-8583-e864cb068d19',
  date: 'Thu, 26 Jan 2017 10:47:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7586/providers/Microsoft.Network/dnszones/exampledns.com/TXT/set-txt?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"c9022ca3-a6b2-4e94-b72a-56b0d60ab779\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.exampledns.com.\",\"TTL\":3600,\"TXTRecords\":[{\"value\":[\"longtexthere\"]}]}}", { 'cache-control': 'private',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  etag: 'c9022ca3-a6b2-4e94-b72a-56b0d60ab779',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c32d1682-db26-4f20-a76f-51fa7917e086',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '33c7c556-eaf9-4b77-8583-e864cb068d19',
  'x-ms-routing-request-id': 'CANADAEAST:20170126T104705Z:33c7c556-eaf9-4b77-8583-e864cb068d19',
  date: 'Thu, 26 Jan 2017 10:47:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7586/providers/Microsoft.Network/dnszones/exampledns.com/TXT/set-txt?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"aaa8bc91-e03a-4d09-951c-b00fdf3b30c9\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.exampledns.com.\",\"TTL\":3600,\"TXTRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: 'aaa8bc91-e03a-4d09-951c-b00fdf3b30c9',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '13117860-7f5b-401a-8bca-ec6e9994ee0d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '6e50cde1-aa44-414d-b59c-bc00539aa201',
  'x-ms-routing-request-id': 'CANADAEAST:20170126T104707Z:6e50cde1-aa44-414d-b59c-bc00539aa201',
  date: 'Thu, 26 Jan 2017 10:47:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7586/providers/Microsoft.Network/dnszones/exampledns.com/TXT/set-txt?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"aaa8bc91-e03a-4d09-951c-b00fdf3b30c9\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.exampledns.com.\",\"TTL\":3600,\"TXTRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: 'aaa8bc91-e03a-4d09-951c-b00fdf3b30c9',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '13117860-7f5b-401a-8bca-ec6e9994ee0d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '6e50cde1-aa44-414d-b59c-bc00539aa201',
  'x-ms-routing-request-id': 'CANADAEAST:20170126T104707Z:6e50cde1-aa44-414d-b59c-bc00539aa201',
  date: 'Thu, 26 Jan 2017 10:47:06 GMT',
  connection: 'close' });
 return result; }]];