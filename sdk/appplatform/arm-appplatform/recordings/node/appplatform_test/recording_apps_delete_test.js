let nock = require('nock');

module.exports.hash = "47aa28c05534ca3ce321db3690e279bb";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '08bf8f0b-4550-445e-84eb-19e84daf1600',
  'x-ms-ests-server',
  '2.1.12744.11 - SEASLR2 ProdSlices',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=AminM19Av4JFthtCDshoWnU; expires=Sun, 19-Jun-2022 02:09:18 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr6LMQH1DOsbaHyBzBPpHzXvT524gjGzDy8mbaj1Sw5xQ7Aq_3ArHHuBIwF1s46-RaTmJ_DTFms1fMIBLbKIADGfkQqHY2bj1L_PdbbtSAwa1F7iw6ciWhH9AyuPzwkEaUIUOdWb9_MvyKfxLBonyuulF80r4GdU1y1rZuoiWHLmggAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 20 May 2022 02:09:17 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '8a792fe0-a397-4743-a52e-79eb4fa25200',
  'x-ms-ests-server',
  '2.1.12794.4 - KRSLR2 ProdSlices',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=AixphD8LTD1Aomu0pMiIdeg; expires=Sun, 19-Jun-2022 02:09:18 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrGDyX9gRQePs3nK4o18qPG8lm36jzBazimwRQE9R6TKX4BiINGzYb4tqmrK-3qKXFPvqG0301nct_rx5BoNSVjgeUCHcZOoZVNNGRysMRoMoz6MFN2u7urbcyyoYoA98_5mhcwe6J0w2uEHQ0lOZEiIz0TK3kBwJGcmJtx8v1Vp0gAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 20 May 2022 02:09:17 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.9.0&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=a9e412c4-6383-4e7c-a8a2-efeb8117ea86&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '8a792fe0-a397-4743-a52e-79eb54a25200',
  'x-ms-ests-server',
  '2.1.12794.4 - KRSLR2 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=Aob624K3sWZFgqKwyuAKt-LLj78gAQAAAE7vGNoOAAAA; expires=Sun, 19-Jun-2022 02:09:18 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 20 May 2022 02:09:17 GMT',
  'Content-Length',
  '1393'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .delete('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.AppPlatform/Spring/myservicexxx/apps/myappxxx')
  .query(true)
  .reply(202, "", [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Expires',
  '-1',
  'Location',
  'https://management.azure.com/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.AppPlatform/locations/eastus/operationResults/2acac14d-642e-4702-8c80-c11c0cd55a58/Spring/myappxxx?api-version=2022-04-01',
  'x-ms-ratelimit-remaining-subscription-deletes',
  '14999',
  'Request-Context',
  'appId=cid-v1:797d7e4e-8180-497e-a254-780fbd39ba4d',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-client-request-id',
  'a8155b57-576a-41a4-8068-8221bf4eaec6',
  'x-rp-server-mvid',
  '5e115b18-fadf-4457-94d9-ae330a47aa6b',
  'Azure-AsyncOperation',
  'https://management.azure.com/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.AppPlatform/locations/eastus/operationStatus/myappxxx/operationId/2acac14d-642e-4702-8c80-c11c0cd55a58?api-version=2022-04-01',
  'Server',
  'nginx/1.17.7',
  'x-ms-request-id',
  'dced4e45-75b1-4e9f-a561-386cb5175a25',
  'x-ms-correlation-request-id',
  'dced4e45-75b1-4e9f-a561-386cb5175a25',
  'x-ms-routing-request-id',
  'KOREASOUTH:20220520T020919Z:dced4e45-75b1-4e9f-a561-386cb5175a25',
  'Date',
  'Fri, 20 May 2022 02:09:19 GMT',
  'Content-Length',
  '0'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.AppPlatform/locations/eastus/operationStatus/myappxxx/operationId/2acac14d-642e-4702-8c80-c11c0cd55a58')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471f35eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7c7abd5cb326bcfab7a71b7aca6997493674dbb6eee56abbce64f5eb719fe5e5c67abd5bb77efdc1767b3bb7bd9349beeeecfb63fdddfcbb7f71fecec1136073bdbd3dddde9ce7476ff7e76ffe0a3d147cb6c91d3706ed9bae10ea9fdabf572592c2fe4a3ba7d5308949dbdbded9dfbdb7b3b6f76f61eed3c7cb4fb707cffd3077b0fee3ff8a98f7e","c9ff03f8b88a773a010000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Retry-After',
  '0',
  'Vary',
  'Accept-Encoding,Accept-Encoding',
  'x-ms-request-id',
  '51cf1c63-34b6-4925-a476-1c4a408d741f',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11975',
  'Request-Context',
  'appId=cid-v1:797d7e4e-8180-497e-a254-780fbd39ba4d',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-client-request-id',
  'aec11471-90c6-4366-81f8-5d5632a67e33',
  'x-rp-server-mvid',
  '5e115b18-fadf-4457-94d9-ae330a47aa6b',
  'Server',
  'nginx/1.17.7',
  'x-ms-correlation-request-id',
  '51cf1c63-34b6-4925-a476-1c4a408d741f',
  'x-ms-routing-request-id',
  'KOREASOUTH:20220520T020920Z:51cf1c63-34b6-4925-a476-1c4a408d741f',
  'Date',
  'Fri, 20 May 2022 02:09:19 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.AppPlatform/locations/eastus/operationStatus/myappxxx/operationId/2acac14d-642e-4702-8c80-c11c0cd55a58')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471f35eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7c7abd5cb326bcfab7a71b7aca6997493674dbb6eee56abbce64f5eb719fe5e5c67abd5bb77efdc1767b3bb7bd9349beeeecfb63fdddfcbb7f71fecec1136073bdbd3dddde9ce7476ff7e76ffe0a3d147cb6c91d3706ed9bae10ea9fdabf572592c2fe4a3ba7d5308949dbdbded9dfbdb7b3b6f76f61eed3c7cb4fb707cffd3077b0fee3ff8a98f7e","c9ff03f8b88a773a010000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Retry-After',
  '0',
  'Vary',
  'Accept-Encoding,Accept-Encoding',
  'x-ms-request-id',
  'c8708cb9-4589-4b5d-9653-655609fd155f',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11974',
  'Request-Context',
  'appId=cid-v1:797d7e4e-8180-497e-a254-780fbd39ba4d',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-client-request-id',
  'd6ce7456-3f4c-44c8-aeed-76ca6cc366a0',
  'x-rp-server-mvid',
  '5e115b18-fadf-4457-94d9-ae330a47aa6b',
  'Server',
  'nginx/1.17.7',
  'x-ms-correlation-request-id',
  'c8708cb9-4589-4b5d-9653-655609fd155f',
  'x-ms-routing-request-id',
  'KOREASOUTH:20220520T020921Z:c8708cb9-4589-4b5d-9653-655609fd155f',
  'Date',
  'Fri, 20 May 2022 02:09:20 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.AppPlatform/locations/eastus/operationStatus/myappxxx/operationId/2acac14d-642e-4702-8c80-c11c0cd55a58')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471f35eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7c7abd5cb326bcfab7a71b7aca6997493674dbb6eee56abbce64f5eb719fe5e5c67abd5bb77efdc1767b3bb7bd9349beeeecfb63fdddfcbb7f71fecec1136073bdbd3dddde9ce7476ff7e76ffe0a3d147cb6c91d3706ed9bae10ea9fdebf5749ae7b37c261fd6ed9b42e0ececed6defdcdfdedb79b3b3f768e7e1a3dd87e3fb9f3ed87b70ffc14f51d37c391b6ab8f770bc77b0bfbffbe0de4f7df44b","fe1fea578a9165010000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding,Accept-Encoding',
  'x-ms-request-id',
  '3ed36a72-79ce-47b8-9007-39f95b705dd0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11973',
  'Request-Context',
  'appId=cid-v1:797d7e4e-8180-497e-a254-780fbd39ba4d',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-client-request-id',
  'f09fbd45-0a34-41da-b3fc-1b057a33e77e',
  'x-rp-server-mvid',
  '5e115b18-fadf-4457-94d9-ae330a47aa6b',
  'Server',
  'nginx/1.17.7',
  'x-ms-correlation-request-id',
  '3ed36a72-79ce-47b8-9007-39f95b705dd0',
  'x-ms-routing-request-id',
  'KOREASOUTH:20220520T020931Z:3ed36a72-79ce-47b8-9007-39f95b705dd0',
  'Date',
  'Fri, 20 May 2022 02:09:31 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.AppPlatform/Spring/myservicexxx/apps')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1479759b9ce3f7af4bdefff","92ff0742ea40440c000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-ratelimit-remaining-subscription-resource-requests',
  '11996',
  'Request-Context',
  'appId=cid-v1:797d7e4e-8180-497e-a254-780fbd39ba4d',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-client-request-id',
  '07b3cc17-f3b6-472e-8a53-bb6b0ee63b39',
  'x-rp-server-mvid',
  '5e115b18-fadf-4457-94d9-ae330a47aa6b',
  'Server',
  'nginx/1.17.7',
  'x-ms-request-id',
  '107593d4-4a2c-48d6-82f2-c3a39925e94d',
  'x-ms-correlation-request-id',
  '107593d4-4a2c-48d6-82f2-c3a39925e94d',
  'x-ms-routing-request-id',
  'KOREASOUTH:20220520T020932Z:107593d4-4a2c-48d6-82f2-c3a39925e94d',
  'Date',
  'Fri, 20 May 2022 02:09:32 GMT'
]);
