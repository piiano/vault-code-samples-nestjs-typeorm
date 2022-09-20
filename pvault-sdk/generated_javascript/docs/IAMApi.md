# PiianoVaultRestApi.IAMApi

All URIs are relative to *http://localhost:8123*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIamConf**](IAMApi.md#getIamConf) | **GET** /api/pvlt/1.0/ctl/iam/conf | Get IAM configuration
[**regenerateUserApiKey**](IAMApi.md#regenerateUserApiKey) | **POST** /api/pvlt/1.0/ctl/iam/user/regen | Regenerate user API key
[**setIamConf**](IAMApi.md#setIamConf) | **POST** /api/pvlt/1.0/ctl/iam/conf | Set IAM configuration



## getIamConf

> AuthConfig getIamConf(reason, opts)

Get IAM configuration

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.IAMApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.getIamConf(reason, opts, (error, data, response) => {
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

[**AuthConfig**](AuthConfig.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/toml, application/json


## regenerateUserApiKey

> regenerateUserApiKey(reason, modelsUserName, opts)

Regenerate user API key

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.IAMApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let modelsUserName = new PiianoVaultRestApi.ModelsUserName(); // ModelsUserName | The name of the user to regenerate API key for.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.regenerateUserApiKey(reason, modelsUserName, opts, (error, data, response) => {
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
 **modelsUserName** | [**ModelsUserName**](ModelsUserName.md)| The name of the user to regenerate API key for. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setIamConf

> setIamConf(reason, authConfig, opts)

Set IAM configuration

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.IAMApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let authConfig = new PiianoVaultRestApi.AuthConfig(); // AuthConfig | IAM configuration in TOML format.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.setIamConf(reason, authConfig, opts, (error, data, response) => {
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
 **authConfig** | [**AuthConfig**](AuthConfig.md)| IAM configuration in TOML format. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/toml
- **Accept**: application/json

