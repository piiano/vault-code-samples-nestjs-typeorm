# PiianoVaultRestApi.TokensApi

All URIs are relative to *http://localhost:8123*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteToken**](TokensApi.md#deleteToken) | **DELETE** /api/pvlt/1.0/data/collections/{collection}/tokens | Delete token
[**detokenize**](TokensApi.md#detokenize) | **GET** /api/pvlt/1.0/data/collections/{collection}/tokens | Detokenize
[**getToken**](TokensApi.md#getToken) | **GET** /api/pvlt/1.0/data/collections/{collection}/query/tokens | Get tokens metadata
[**rotateToken**](TokensApi.md#rotateToken) | **POST** /api/pvlt/1.0/data/collections/{collection}/rotate/tokens | Rotate token
[**tokenize**](TokensApi.md#tokenize) | **POST** /api/pvlt/1.0/data/collections/{collection}/tokens | Tokenize
[**updateToken**](TokensApi.md#updateToken) | **PATCH** /api/pvlt/1.0/data/collections/{collection}/tokens | Update token



## deleteToken

> deleteToken(collection, reason, opts)

Delete token

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.TokensApi();
let collection = "collection_example"; // String | The name of the collection containing the object.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'objectId': ["null"], // [String] | Comma-separated list of object IDs.
  'tag': ["null"], // [String] | Comma-separated list of tags.
  'tokenId': ["null"], // [String] | Comma-separated list of token IDs.
  'options': ["null"], // [String] | Options for the operation. Options include: - `hard_delete` – permanently delete the tokens. - `deleted` – remove only deleted tokens, requires `hard_delete` to be specified. 
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'reloadCache': true // Boolean | Reloads the cache before the action.
};
apiInstance.deleteToken(collection, reason, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection containing the object. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **objectId** | [**[String]**](String.md)| Comma-separated list of object IDs. | [optional] 
 **tag** | [**[String]**](String.md)| Comma-separated list of tags. | [optional] 
 **tokenId** | [**[String]**](String.md)| Comma-separated list of token IDs. | [optional] 
 **options** | [**[String]**](String.md)| Options for the operation. Options include: - &#x60;hard_delete&#x60; – permanently delete the tokens. - &#x60;deleted&#x60; – remove only deleted tokens, requires &#x60;hard_delete&#x60; to be specified.  | [optional] 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **reloadCache** | **Boolean**| Reloads the cache before the action. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## detokenize

> [ModelsDetokenizedToken] detokenize(collection, reason, opts)

Detokenize

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.TokensApi();
let collection = "collection_example"; // String | The name of the collection containing the object.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'objectId': ["null"], // [String] | Comma-separated list of object IDs.
  'options': ["null"], // [String] | Comma-separated list of options.
  'tag': ["null"], // [String] | Comma-separated list of tags.
  'tokenId': ["null"], // [String] | Comma-separated list of token IDs.
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'reloadCache': true // Boolean | Reloads the cache before the action.
};
apiInstance.detokenize(collection, reason, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection containing the object. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **objectId** | [**[String]**](String.md)| Comma-separated list of object IDs. | [optional] 
 **options** | [**[String]**](String.md)| Comma-separated list of options. | [optional] 
 **tag** | [**[String]**](String.md)| Comma-separated list of tags. | [optional] 
 **tokenId** | [**[String]**](String.md)| Comma-separated list of token IDs. | [optional] 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **reloadCache** | **Boolean**| Reloads the cache before the action. | [optional] 

### Return type

[**[ModelsDetokenizedToken]**](ModelsDetokenizedToken.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getToken

> [ModelsTokenMetadata] getToken(collection, reason, opts)

Get tokens metadata

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.TokensApi();
let collection = "collection_example"; // String | The name of the collection containing the object.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'objectId': ["null"], // [String] | Comma-separated list of object IDs.
  'options': ["null"], // [String] | Options for the operation. Options include: - `deleted` – get only deleted tokens. 
  'tag': ["null"], // [String] | Comma-separated list of tags.
  'tokenId': ["null"], // [String] | Comma-separated list of token IDs.
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'reloadCache': true // Boolean | Reloads the cache before the action.
};
apiInstance.getToken(collection, reason, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection containing the object. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **objectId** | [**[String]**](String.md)| Comma-separated list of object IDs. | [optional] 
 **options** | [**[String]**](String.md)| Options for the operation. Options include: - &#x60;deleted&#x60; – get only deleted tokens.  | [optional] 
 **tag** | [**[String]**](String.md)| Comma-separated list of tags. | [optional] 
 **tokenId** | [**[String]**](String.md)| Comma-separated list of token IDs. | [optional] 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **reloadCache** | **Boolean**| Reloads the cache before the action. | [optional] 

### Return type

[**[ModelsTokenMetadata]**](ModelsTokenMetadata.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rotateToken

> [ModelsRotatedToken] rotateToken(tokenId, collection, reason, opts)

Rotate token

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.TokensApi();
let tokenId = ["null"]; // [String] | Comma-separated list of token IDs.
let collection = "collection_example"; // String | The name of the collection containing the object.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'reloadCache': true // Boolean | Reloads the cache before the action.
};
apiInstance.rotateToken(tokenId, collection, reason, opts, (error, data, response) => {
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
 **tokenId** | [**[String]**](String.md)| Comma-separated list of token IDs. | 
 **collection** | **String**| The name of the collection containing the object. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **reloadCache** | **Boolean**| Reloads the cache before the action. | [optional] 

### Return type

[**[ModelsRotatedToken]**](ModelsRotatedToken.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tokenize

> [ModelsTokenValue] tokenize(collection, reason, modelsTokenizeRequest, opts)

Tokenize

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.TokensApi();
let collection = "collection_example"; // String | The name of the collection containing the object.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let modelsTokenizeRequest = new PiianoVaultRestApi.ModelsTokenizeRequest(); // ModelsTokenizeRequest | Details of the object and property.
let opts = {
  'ttl': "ttl_example", // String | Token time to live (TTL) in seconds. If not set, the default TTL is used. See the `PVAULT_TTL_TOKENS` time to live environment variable.
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'reloadCache': true // Boolean | Reloads the cache before the action.
};
apiInstance.tokenize(collection, reason, modelsTokenizeRequest, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection containing the object. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **modelsTokenizeRequest** | [**ModelsTokenizeRequest**](ModelsTokenizeRequest.md)| Details of the object and property. | 
 **ttl** | **String**| Token time to live (TTL) in seconds. If not set, the default TTL is used. See the &#x60;PVAULT_TTL_TOKENS&#x60; time to live environment variable. | [optional] 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **reloadCache** | **Boolean**| Reloads the cache before the action. | [optional] 

### Return type

[**[ModelsTokenValue]**](ModelsTokenValue.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateToken

> updateToken(collection, reason, modelsUpdateTokenRequest, opts)

Update token

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.TokensApi();
let collection = "collection_example"; // String | The name of the collection containing the object.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let modelsUpdateTokenRequest = new PiianoVaultRestApi.ModelsUpdateTokenRequest(); // ModelsUpdateTokenRequest | Update token request details.
let opts = {
  'ttl': "ttl_example", // String | Token time to live (TTL) in seconds. If not set, the token's expiry date is not changed.
  'objectId': ["null"], // [String] | Comma-separated list of object IDs.
  'tag': ["null"], // [String] | Comma-separated list of tags.
  'tokenId': ["null"], // [String] | Comma-separated list of token IDs.
  'options': ["null"], // [String] | Options for the operation. Options include: - `deleted` – update only deleted tokens. 
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'reloadCache': true // Boolean | Reloads the cache before the action.
};
apiInstance.updateToken(collection, reason, modelsUpdateTokenRequest, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection containing the object. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **modelsUpdateTokenRequest** | [**ModelsUpdateTokenRequest**](ModelsUpdateTokenRequest.md)| Update token request details. | 
 **ttl** | **String**| Token time to live (TTL) in seconds. If not set, the token&#39;s expiry date is not changed. | [optional] 
 **objectId** | [**[String]**](String.md)| Comma-separated list of object IDs. | [optional] 
 **tag** | [**[String]**](String.md)| Comma-separated list of tags. | [optional] 
 **tokenId** | [**[String]**](String.md)| Comma-separated list of token IDs. | [optional] 
 **options** | [**[String]**](String.md)| Options for the operation. Options include: - &#x60;deleted&#x60; – update only deleted tokens.  | [optional] 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **reloadCache** | **Boolean**| Reloads the cache before the action. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

