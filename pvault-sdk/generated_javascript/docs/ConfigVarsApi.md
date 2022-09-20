# PiianoVaultRestApi.ConfigVarsApi

All URIs are relative to *http://localhost:8123*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearAllConfVars**](ConfigVarsApi.md#clearAllConfVars) | **DELETE** /api/pvlt/1.0/system/confvar | Clear configuration variables
[**getConfVar**](ConfigVarsApi.md#getConfVar) | **GET** /api/pvlt/1.0/system/confvar/{name} | Get configuration variable
[**setConfVar**](ConfigVarsApi.md#setConfVar) | **POST** /api/pvlt/1.0/system/confvar/{name} | Set configuration variable



## clearAllConfVars

> clearAllConfVars(reason, opts)

Clear configuration variables

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.ConfigVarsApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.clearAllConfVars(reason, opts, (error, data, response) => {
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


## getConfVar

> ModelsConfVar getConfVar(name, reason, opts)

Get configuration variable

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.ConfigVarsApi();
let name = "name_example"; // String | The name of the configuration variable.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.getConfVar(name, reason, opts, (error, data, response) => {
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
 **name** | **String**| The name of the configuration variable. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

[**ModelsConfVar**](ModelsConfVar.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setConfVar

> setConfVar(name, reason, modelsConfVarValue, opts)

Set configuration variable

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.ConfigVarsApi();
let name = "name_example"; // String | The name of the configuration variable.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let modelsConfVarValue = new PiianoVaultRestApi.ModelsConfVarValue(); // ModelsConfVarValue | Value of the configuration.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.setConfVar(name, reason, modelsConfVarValue, opts, (error, data, response) => {
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
 **name** | **String**| The name of the configuration variable. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **modelsConfVarValue** | [**ModelsConfVarValue**](ModelsConfVarValue.md)| Value of the configuration. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

