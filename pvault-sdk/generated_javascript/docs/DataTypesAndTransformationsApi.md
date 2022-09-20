# PiianoVaultRestApi.DataTypesAndTransformationsApi

All URIs are relative to *http://localhost:8123*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPropertyTypes**](DataTypesAndTransformationsApi.md#listPropertyTypes) | **GET** /api/pvlt/1.0/ctl/types | List property types
[**listTransformations**](DataTypesAndTransformationsApi.md#listTransformations) | **GET** /api/pvlt/1.0/ctl/transformations | List transformations



## listPropertyTypes

> [PiitypePIIType] listPropertyTypes(reason, opts)

List property types

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.DataTypesAndTransformationsApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.listPropertyTypes(reason, opts, (error, data, response) => {
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

[**[PiitypePIIType]**](PiitypePIIType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTransformations

> [ModelsTransformationDoc] listTransformations(reason, opts)

List transformations

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.DataTypesAndTransformationsApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.listTransformations(reason, opts, (error, data, response) => {
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

[**[ModelsTransformationDoc]**](ModelsTransformationDoc.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

