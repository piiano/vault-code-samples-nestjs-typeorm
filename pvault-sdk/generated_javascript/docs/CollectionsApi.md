# PiianoVaultRestApi.CollectionsApi

All URIs are relative to *http://localhost:8123*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCollection**](CollectionsApi.md#addCollection) | **POST** /api/pvlt/1.0/ctl/collections | Add collection
[**addCollectionProperty**](CollectionsApi.md#addCollectionProperty) | **POST** /api/pvlt/1.0/ctl/collections/{collection}/properties/{property} | Add collection property
[**deleteCollection**](CollectionsApi.md#deleteCollection) | **DELETE** /api/pvlt/1.0/ctl/collections/{collection} | Delete collection
[**deleteCollectionProperty**](CollectionsApi.md#deleteCollectionProperty) | **DELETE** /api/pvlt/1.0/ctl/collections/{collection}/properties/{property} | Delete collection property
[**getAllCollections**](CollectionsApi.md#getAllCollections) | **GET** /api/pvlt/1.0/ctl/collections | List collections
[**getCollection**](CollectionsApi.md#getCollection) | **GET** /api/pvlt/1.0/ctl/collections/{collection} | Get collection details
[**getCollectionProperty**](CollectionsApi.md#getCollectionProperty) | **GET** /api/pvlt/1.0/ctl/collections/{collection}/properties/{property} | Get collection property
[**listCollectionProperties**](CollectionsApi.md#listCollectionProperties) | **GET** /api/pvlt/1.0/ctl/collections/{collection}/properties | List collection properties
[**updateCollection**](CollectionsApi.md#updateCollection) | **PATCH** /api/pvlt/1.0/ctl/collections/{collection} | Update collection details
[**updateCollectionProperty**](CollectionsApi.md#updateCollectionProperty) | **PATCH** /api/pvlt/1.0/ctl/collections/{collection}/properties/{property} | Modify collection property



## addCollection

> ModelsCollection addCollection(reason, modelsCollection, opts)

Add collection

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.CollectionsApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let modelsCollection = new PiianoVaultRestApi.ModelsCollection(); // ModelsCollection | Details of the collection including its properties.
let opts = {
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'format': "format_example", // String | When set to `pvschema`, returns the added collection in the PVSchema format. Otherwise, returns the JSON format.
  'options': ["null"] // [String] | Options for the operation. Options include: - `hide_builtins` – hide built-in properties from response. 
};
apiInstance.addCollection(reason, modelsCollection, opts, (error, data, response) => {
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
 **modelsCollection** | [**ModelsCollection**](ModelsCollection.md)| Details of the collection including its properties. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **format** | **String**| When set to &#x60;pvschema&#x60;, returns the added collection in the PVSchema format. Otherwise, returns the JSON format. | [optional] 
 **options** | [**[String]**](String.md)| Options for the operation. Options include: - &#x60;hide_builtins&#x60; – hide built-in properties from response.  | [optional] 

### Return type

[**ModelsCollection**](ModelsCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/pvschema


## addCollectionProperty

> ModelsProperty addCollectionProperty(collection, property, reason, modelsProperty, opts)

Add collection property

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.CollectionsApi();
let collection = "collection_example"; // String | The name of the collection to add the property to.
let property = "property_example"; // String | The name of the property to add.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let modelsProperty = new PiianoVaultRestApi.ModelsProperty(); // ModelsProperty | Details of the property.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.addCollectionProperty(collection, property, reason, modelsProperty, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection to add the property to. | 
 **property** | **String**| The name of the property to add. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **modelsProperty** | [**ModelsProperty**](ModelsProperty.md)| Details of the property. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

[**ModelsProperty**](ModelsProperty.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCollection

> deleteCollection(collection, reason, opts)

Delete collection

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.CollectionsApi();
let collection = "collection_example"; // String | The name of the collection.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.deleteCollection(collection, reason, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteCollectionProperty

> deleteCollectionProperty(collection, property, reason, opts)

Delete collection property

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.CollectionsApi();
let collection = "collection_example"; // String | The name of the collection containing the property.
let property = "property_example"; // String | The name of the property.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.deleteCollectionProperty(collection, property, reason, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection containing the property. | 
 **property** | **String**| The name of the property. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllCollections

> [ModelsCollection] getAllCollections(reason, opts)

List collections

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.CollectionsApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'format': "format_example", // String | When set to `pvschema`, returns the collections in the PVSchema format. Otherwise, returns the JSON format.
  'options': ["null"] // [String] | Options for the operation. Options include: - `hide_builtins` – hide built-in properties from response. 
};
apiInstance.getAllCollections(reason, opts, (error, data, response) => {
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
 **format** | **String**| When set to &#x60;pvschema&#x60;, returns the collections in the PVSchema format. Otherwise, returns the JSON format. | [optional] 
 **options** | [**[String]**](String.md)| Options for the operation. Options include: - &#x60;hide_builtins&#x60; – hide built-in properties from response.  | [optional] 

### Return type

[**[ModelsCollection]**](ModelsCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollection

> ModelsCollection getCollection(collection, reason, opts)

Get collection details

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.CollectionsApi();
let collection = "collection_example"; // String | The name of the collection.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'format': "format_example", // String | When set to `pvschema`, returns the collection in the PVSchema format. Otherwise, returns the JSON format.
  'options': ["null"] // [String] | Options for the operation. Options include: - `hide_builtins` – hide built-in properties from response. 
};
apiInstance.getCollection(collection, reason, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **format** | **String**| When set to &#x60;pvschema&#x60;, returns the collection in the PVSchema format. Otherwise, returns the JSON format. | [optional] 
 **options** | [**[String]**](String.md)| Options for the operation. Options include: - &#x60;hide_builtins&#x60; – hide built-in properties from response.  | [optional] 

### Return type

[**ModelsCollection**](ModelsCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollectionProperty

> ModelsProperty getCollectionProperty(collection, reason, property, opts)

Get collection property

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.CollectionsApi();
let collection = "collection_example"; // String | The ID of the collection containing the property.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let property = "property_example"; // String | The name of the property.
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.getCollectionProperty(collection, reason, property, opts, (error, data, response) => {
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
 **collection** | **String**| The ID of the collection containing the property. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **property** | **String**| The name of the property. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

[**ModelsProperty**](ModelsProperty.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCollectionProperties

> [ModelsProperty] listCollectionProperties(collection, reason, opts)

List collection properties

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.CollectionsApi();
let collection = "collection_example"; // String | The name of the collection containing the properties.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'options': ["null"] // [String] | Options for the operation. Options include:  - `hide_builtins` – hide built-in properties from response. 
};
apiInstance.listCollectionProperties(collection, reason, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection containing the properties. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **options** | [**[String]**](String.md)| Options for the operation. Options include:  - &#x60;hide_builtins&#x60; – hide built-in properties from response.  | [optional] 

### Return type

[**[ModelsProperty]**](ModelsProperty.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCollection

> ModelsCollection updateCollection(collection, reason, modelsCollection, opts)

Update collection details

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.CollectionsApi();
let collection = "collection_example"; // String | The name of the collection to import the properties to.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let modelsCollection = new PiianoVaultRestApi.ModelsCollection(); // ModelsCollection | Details of the collection including its properties.
let opts = {
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'format': "format_example", // String | When set to `pvschema`, returns the updated collection in the PVSchema format. Otherwise, returns the JSON format.
  'options': ["null"] // [String] | Options for the operation. Options include: - `hide_builtins` – hide built-in properties from response. 
};
apiInstance.updateCollection(collection, reason, modelsCollection, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection to import the properties to. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **modelsCollection** | [**ModelsCollection**](ModelsCollection.md)| Details of the collection including its properties. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **format** | **String**| When set to &#x60;pvschema&#x60;, returns the updated collection in the PVSchema format. Otherwise, returns the JSON format. | [optional] 
 **options** | [**[String]**](String.md)| Options for the operation. Options include: - &#x60;hide_builtins&#x60; – hide built-in properties from response.  | [optional] 

### Return type

[**ModelsCollection**](ModelsCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCollectionProperty

> updateCollectionProperty(collection, property, reason, modelsProperty, opts)

Modify collection property

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.CollectionsApi();
let collection = "collection_example"; // String | The name of the collection containing the property.
let property = "property_example"; // String | The name of the property.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let modelsProperty = new PiianoVaultRestApi.ModelsProperty(); // ModelsProperty | property info
let opts = {
  'adhocReason': "adhocReason_example" // String | An ad-hoc reason for accessing the Vault data.
};
apiInstance.updateCollectionProperty(collection, property, reason, modelsProperty, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection containing the property. | 
 **property** | **String**| The name of the property. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **modelsProperty** | [**ModelsProperty**](ModelsProperty.md)| property info | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

