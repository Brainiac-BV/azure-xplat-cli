// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg19948/providers/Microsoft.Web/sites?api-version=2015-08-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg19948/providers/Microsoft.Web/sites/webappclitests3423\",\"name\":\"webappclitests3423\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests3423\",\"state\":\"Running\",\"hostNames\":[\"webappclitests3423.azurewebsites.net\"],\"webSpace\":\"testrg19948-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-019.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg19948-WestUSwebspace/sites/webappclitests3423\",\"repositorySiteName\":\"webappclitests3423\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests3423.azurewebsites.net\",\"webappclitests3423.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests3423.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests3423.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg19948/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests4055\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-10-05T22:44:00.133\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests3423\",\"trafficManagerHostNames\":null,\"sku\":\"Basic\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"104.40.57.101,104.40.82.23,104.40.81.188,104.40.85.254\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-019\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg19948\",\"defaultHostName\":\"webappclitests3423.azurewebsites.net\"}}],\"nextLink\":null,\"id\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2555',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '0b468f2e-d548-4cce-ab60-eada6baaa226',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '238d3dd4-b2dd-49ad-b249-849bbd97ba02',
  'x-ms-routing-request-id': 'WESTUS2:20161005T224402Z:238d3dd4-b2dd-49ad-b249-849bbd97ba02',
  date: 'Wed, 05 Oct 2016 22:44:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg19948/providers/Microsoft.Web/sites?api-version=2015-08-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg19948/providers/Microsoft.Web/sites/webappclitests3423\",\"name\":\"webappclitests3423\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests3423\",\"state\":\"Running\",\"hostNames\":[\"webappclitests3423.azurewebsites.net\"],\"webSpace\":\"testrg19948-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-019.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg19948-WestUSwebspace/sites/webappclitests3423\",\"repositorySiteName\":\"webappclitests3423\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests3423.azurewebsites.net\",\"webappclitests3423.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests3423.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests3423.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg19948/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests4055\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-10-05T22:44:00.133\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests3423\",\"trafficManagerHostNames\":null,\"sku\":\"Basic\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"104.40.57.101,104.40.82.23,104.40.81.188,104.40.85.254\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-019\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg19948\",\"defaultHostName\":\"webappclitests3423.azurewebsites.net\"}}],\"nextLink\":null,\"id\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2555',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '0b468f2e-d548-4cce-ab60-eada6baaa226',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '238d3dd4-b2dd-49ad-b249-849bbd97ba02',
  'x-ms-routing-request-id': 'WESTUS2:20161005T224402Z:238d3dd4-b2dd-49ad-b249-849bbd97ba02',
  date: 'Wed, 05 Oct 2016 22:44:01 GMT',
  connection: 'close' });
 return result; }]];