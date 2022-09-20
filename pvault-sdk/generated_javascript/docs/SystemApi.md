# PiianoVaultRestApi.SystemApi

All URIs are relative to *http://localhost:8123*

Method | HTTP request | Description
------------- | ------------- | -------------
[**controlHealth**](SystemApi.md#controlHealth) | **GET** /api/pvlt/1.0/ctl/info/health | Get control service status
[**dataHealth**](SystemApi.md#dataHealth) | **GET** /api/pvlt/1.0/data/info/health | Get data service status
[**garbageCollection**](SystemApi.md#garbageCollection) | **GET** /api/pvlt/1.0/system/admin/lifecycle/gc | Purge expired and soft deleted objects and tokens
[**getClusterInfo**](SystemApi.md#getClusterInfo) | **GET** /api/pvlt/1.0/ctl/info/cluster | Get cluster information
[**getConfiguration**](SystemApi.md#getConfiguration) | **GET** /api/pvlt/1.0/system/info/configuration | Get system configuration
[**getKms**](SystemApi.md#getKms) | **GET** /api/pvlt/1.0/system/info/kms | Get KMS status
[**getLicense**](SystemApi.md#getLicense) | **GET** /api/pvlt/1.0/system/info/license | Get license
[**getVaultVersion**](SystemApi.md#getVaultVersion) | **GET** /api/pvlt/1.0/system/info/version | Get Vault version
[**rotateKeys**](SystemApi.md#rotateKeys) | **POST** /api/pvlt/1.0/system/admin/keys/rotate | Rotate data encryption keys
[**triggerError**](SystemApi.md#triggerError) | **POST** /api/pvlt/1.0/system/debug/error/trigger | Trigger an artificial error



## controlHealth

> ModelsHealth controlHealth()

Get control service status

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';

let apiInstance = new PiianoVaultRestApi.SystemApi();
apiInstance.controlHealth((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ModelsHealth**](ModelsHealth.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dataHealth

> ModelsHealth dataHealth()

Get data service status

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';

let apiInstance = new PiianoVaultRestApi.SystemApi();
apiInstance.dataHealth((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ModelsHealth**](ModelsHealth.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## garbageCollection

> [GcDeletionCount] garbageCollection(reason, opts)

Purge expired and soft deleted objects and tokens

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.SystemApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'filter': "'all'", // String | Filter for the GC operation. Options include: `objects_only`,`tokens_only`.
  'dryRun': false, // Boolean | Runs dry run GC if set to true.
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'reloadCache': true // Boolean | Reloads the cache before the action.
};
apiInstance.garbageCollection(reason, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **filter** | **String**| Filter for the GC operation. Options include: &#x60;objects_only&#x60;,&#x60;tokens_only&#x60;. | [optional] [default to &#39;all&#39;]
 **dryRun** | **Boolean**| Runs dry run GC if set to true. | [optional] [default to false]
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **reloadCache** | **Boolean**| Reloads the cache before the action. | [optional] 

### Return type

[**[GcDeletionCount]**](GcDeletionCount.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClusterInfo

> ModelsAllGenerations getClusterInfo(reason, opts)

Get cluster information

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.SystemApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.getClusterInfo(reason, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

[**ModelsAllGenerations**](ModelsAllGenerations.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConfiguration

> ConfigConfig getConfiguration(reason, opts)

Get system configuration

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.SystemApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.getConfiguration(reason, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

[**ConfigConfig**](ConfigConfig.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/toml, application/json


## getKms

> ModelsKMSStatus getKms(reason, opts)

Get KMS status

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.SystemApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.getKms(reason, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

[**ModelsKMSStatus**](ModelsKMSStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLicense

> ModelsLicense getLicense(reason, opts)

Get license

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.SystemApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.getLicense(reason, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

[**ModelsLicense**](ModelsLicense.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVaultVersion

> ModelsProductVersion getVaultVersion(reason, opts)

Get Vault version

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.SystemApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.getVaultVersion(reason, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

[**ModelsProductVersion**](ModelsProductVersion.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rotateKeys

> rotateKeys(reason, opts)

Rotate data encryption keys

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.SystemApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.rotateKeys(reason, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## triggerError

> triggerError(reason, opts)

Trigger an artificial error

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.SystemApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.triggerError(reason, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

