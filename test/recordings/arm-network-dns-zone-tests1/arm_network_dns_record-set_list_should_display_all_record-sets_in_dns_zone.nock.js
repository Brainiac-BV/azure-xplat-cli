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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7586/providers/Microsoft.Network/dnszones/exampledns.com/recordsets?api-version=2016-04-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"df264c8b-1f16-4684-8ce1-e7bf2bb447c3\",\"properties\":{\"fqdn\":\"exampledns.com.\",\"TTL\":172800,\"NSRecords\":[{\"nsdname\":\"ns1-04.azure-dns.com.\"},{\"nsdname\":\"ns2-04.azure-dns.net.\"},{\"nsdname\":\"ns3-04.azure-dns.org.\"},{\"nsdname\":\"ns4-04.azure-dns.info.\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"8a90ec24-3027-472d-8657-7a69b56a77bd\",\"properties\":{\"fqdn\":\"exampledns.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"azuredns-hostmaster.microsoft.com\",\"expireTime\":2419200,\"host\":\"ns1-04.azure-dns.com.\",\"minimumTTL\":300,\"refreshTime\":3600,\"retryTime\":300,\"serialNumber\":1}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"b6d30143-9ded-47e9-a95f-298f2d902c56\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"fqdn\":\"set-a.exampledns.com.\",\"TTL\":255,\"ARecords\":[]}}]}", { 'cache-control': 'private',
  'content-length': '1411',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '66959a7d-c973-4de8-a479-f1d4b344a7ff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '0c8f1ffc-ade3-49c2-8613-33d55f8b7df0',
  'x-ms-routing-request-id': 'CANADAEAST:20170126T104544Z:0c8f1ffc-ade3-49c2-8613-33d55f8b7df0',
  date: 'Thu, 26 Jan 2017 10:45:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7586/providers/Microsoft.Network/dnszones/exampledns.com/recordsets?api-version=2016-04-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"df264c8b-1f16-4684-8ce1-e7bf2bb447c3\",\"properties\":{\"fqdn\":\"exampledns.com.\",\"TTL\":172800,\"NSRecords\":[{\"nsdname\":\"ns1-04.azure-dns.com.\"},{\"nsdname\":\"ns2-04.azure-dns.net.\"},{\"nsdname\":\"ns3-04.azure-dns.org.\"},{\"nsdname\":\"ns4-04.azure-dns.info.\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"8a90ec24-3027-472d-8657-7a69b56a77bd\",\"properties\":{\"fqdn\":\"exampledns.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"azuredns-hostmaster.microsoft.com\",\"expireTime\":2419200,\"host\":\"ns1-04.azure-dns.com.\",\"minimumTTL\":300,\"refreshTime\":3600,\"retryTime\":300,\"serialNumber\":1}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7586\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"b6d30143-9ded-47e9-a95f-298f2d902c56\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"fqdn\":\"set-a.exampledns.com.\",\"TTL\":255,\"ARecords\":[]}}]}", { 'cache-control': 'private',
  'content-length': '1411',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '66959a7d-c973-4de8-a479-f1d4b344a7ff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '0c8f1ffc-ade3-49c2-8613-33d55f8b7df0',
  'x-ms-routing-request-id': 'CANADAEAST:20170126T104544Z:0c8f1ffc-ade3-49c2-8613-33d55f8b7df0',
  date: 'Thu, 26 Jan 2017 10:45:43 GMT',
  connection: 'close' });
 return result; }]];