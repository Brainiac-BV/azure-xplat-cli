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
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-3ba3-174bc177d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.azure-dns.com.\",\"ns2-04.azure-dns.net.\",\"ns3-04.azure-dns.org.\",\"ns4-04.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-3ba3-174bc177d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f013d21e-8ee2-4ad9-b5bb-522654930d82',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'f3cdfa8d-717c-4994-9fba-2b8b1aecef35',
  'x-ms-routing-request-id': 'CANADAEAST:20170126T104552Z:f3cdfa8d-717c-4994-9fba-2b8b1aecef35',
  date: 'Thu, 26 Jan 2017 10:45:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7586/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-3ba3-174bc177d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.azure-dns.com.\",\"ns2-04.azure-dns.net.\",\"ns3-04.azure-dns.org.\",\"ns4-04.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-3ba3-174bc177d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f013d21e-8ee2-4ad9-b5bb-522654930d82',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'f3cdfa8d-717c-4994-9fba-2b8b1aecef35',
  'x-ms-routing-request-id': 'CANADAEAST:20170126T104552Z:f3cdfa8d-717c-4994-9fba-2b8b1aecef35',
  date: 'Thu, 26 Jan 2017 10:45:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7586/providers/Microsoft.Network/dnszones/exampledns.com/AAAA/set-aaaa?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"64705d8e-8fe0-48ce-adb3-f7c8b0973e09\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-aaaa.exampledns.com.\",\"TTL\":3600,\"AAAARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '409',
  'content-type': 'application/json; charset=utf-8',
  etag: '64705d8e-8fe0-48ce-adb3-f7c8b0973e09',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '966c6f82-4d79-430c-b57f-de1c97b8bb32',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'ef1d36f6-e341-4f8d-ab28-4a090f5843cf',
  'x-ms-routing-request-id': 'CANADAEAST:20170126T104553Z:ef1d36f6-e341-4f8d-ab28-4a090f5843cf',
  date: 'Thu, 26 Jan 2017 10:45:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7586/providers/Microsoft.Network/dnszones/exampledns.com/AAAA/set-aaaa?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"64705d8e-8fe0-48ce-adb3-f7c8b0973e09\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-aaaa.exampledns.com.\",\"TTL\":3600,\"AAAARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '409',
  'content-type': 'application/json; charset=utf-8',
  etag: '64705d8e-8fe0-48ce-adb3-f7c8b0973e09',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '966c6f82-4d79-430c-b57f-de1c97b8bb32',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'ef1d36f6-e341-4f8d-ab28-4a090f5843cf',
  'x-ms-routing-request-id': 'CANADAEAST:20170126T104553Z:ef1d36f6-e341-4f8d-ab28-4a090f5843cf',
  date: 'Thu, 26 Jan 2017 10:45:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7586/providers/Microsoft.Network/dnszones/exampledns.com/AAAA/set-aaaa?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"f6f74cee-2b51-4e5d-9b5f-7577dd55b2a3\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-aaaa.exampledns.com.\",\"TTL\":3600,\"AAAARecords\":[{\"ipv6Address\":\"2001:cafe:130::100\"}]}}", { 'cache-control': 'private',
  'content-length': '445',
  'content-type': 'application/json; charset=utf-8',
  etag: 'f6f74cee-2b51-4e5d-9b5f-7577dd55b2a3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7e79e0d1-4ead-4356-8c19-dd9f2cc10e50',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '5ba25932-7f17-4324-a307-67a6352825d8',
  'x-ms-routing-request-id': 'CANADAEAST:20170126T104555Z:5ba25932-7f17-4324-a307-67a6352825d8',
  date: 'Thu, 26 Jan 2017 10:45:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7586/providers/Microsoft.Network/dnszones/exampledns.com/AAAA/set-aaaa?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"f6f74cee-2b51-4e5d-9b5f-7577dd55b2a3\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-aaaa.exampledns.com.\",\"TTL\":3600,\"AAAARecords\":[{\"ipv6Address\":\"2001:cafe:130::100\"}]}}", { 'cache-control': 'private',
  'content-length': '445',
  'content-type': 'application/json; charset=utf-8',
  etag: 'f6f74cee-2b51-4e5d-9b5f-7577dd55b2a3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7e79e0d1-4ead-4356-8c19-dd9f2cc10e50',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '5ba25932-7f17-4324-a307-67a6352825d8',
  'x-ms-routing-request-id': 'CANADAEAST:20170126T104555Z:5ba25932-7f17-4324-a307-67a6352825d8',
  date: 'Thu, 26 Jan 2017 10:45:54 GMT',
  connection: 'close' });
 return result; }]];