# PiianoVaultRestApi.ObjectsApi

All URIs are relative to *http://localhost:8123*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addObject**](ObjectsApi.md#addObject) | **POST** /api/pvlt/1.0/data/collections/{collection}/objects | Add object
[**deleteObjectById**](ObjectsApi.md#deleteObjectById) | **DELETE** /api/pvlt/1.0/data/collections/{collection}/objects | Delete object
[**getObjects**](ObjectsApi.md#getObjects) | **GET** /api/pvlt/1.0/data/collections/{collection}/objects | List objects
[**getObjectsProperty**](ObjectsApi.md#getObjectsProperty) | **GET** /api/pvlt/1.0/data/collections/{collection}/properties/{property} | Get objects property
[**searchObjects**](ObjectsApi.md#searchObjects) | **POST** /api/pvlt/1.0/data/collections/{collection}/query/objects | Search objects
[**updateObjectById**](ObjectsApi.md#updateObjectById) | **PATCH** /api/pvlt/1.0/data/collections/{collection}/objects | Modify object



## addObject

> ModelsObjectID addObject(collection, reason, requestBody, opts)

Add object

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.ObjectsApi();
let collection = "collection_example"; // String | The name of the collection to add the object to.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let requestBody = {key: null}; // {String: Object} | The object details.
let opts = {
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'reloadCache': true, // Boolean | Reloads the cache before the action.
  'ttl': "ttl_example" // String | Object time to live (TTL) in seconds, cannot be set to 0. If not set, the default TTL is used. See the `PVAULT_TTL_ASSOCIATED_OBJECTS` and `PVAULT_TTL_UNASSOCIATED_OBJECTS` time to live environment variables.
};
apiInstance.addObject(collection, reason, requestBody, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection to add the object to. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **requestBody** | [**{String: Object}**](Object.md)| The object details. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **reloadCache** | **Boolean**| Reloads the cache before the action. | [optional] 
 **ttl** | **String**| Object time to live (TTL) in seconds, cannot be set to 0. If not set, the default TTL is used. See the &#x60;PVAULT_TTL_ASSOCIATED_OBJECTS&#x60; and &#x60;PVAULT_TTL_UNASSOCIATED_OBJECTS&#x60; time to live environment variables. | [optional] 

### Return type

[**ModelsObjectID**](ModelsObjectID.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteObjectById

> deleteObjectById(collection, id, reason, opts)

Delete object

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.ObjectsApi();
let collection = "collection_example"; // String | The name of the collection containing the object.
let id = ["null"]; // [String] | The ID of the object.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'options': ["null"], // [String] | Options for the operation. Options include: - `hard_delete` – permanently delete the objects. - `deleted` – remove only deleted objects, requires `hard_delete` to be specified. 
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'reloadCache': true // Boolean | Reloads the cache before the action.
};
apiInstance.deleteObjectById(collection, id, reason, opts, (error, data, response) => {
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
 **id** | [**[String]**](String.md)| The ID of the object. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **options** | [**[String]**](String.md)| Options for the operation. Options include: - &#x60;hard_delete&#x60; – permanently delete the objects. - &#x60;deleted&#x60; – remove only deleted objects, requires &#x60;hard_delete&#x60; to be specified.  | [optional] 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **reloadCache** | **Boolean**| Reloads the cache before the action. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getObjects

> Object getObjects(collection, reason, opts)

List objects

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.ObjectsApi();
let collection = "collection_example"; // String | The name of the collection containing the objects.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let opts = {
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'reloadCache': true, // Boolean | Reloads the cache before the action.
  'pageSize': 56, // Number | The maximum number of items to return in this request. If not specified, the default value is used. The default value is the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`. The value must not exceed the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`
  'cursor': "cursor_example", // String | The cursor represents the state of consecutive queries for the same request parameters. In the first call, the cursor may be omitted or specified as an empty string. In consecutive calls, it should be set to the value of the cursor field of the models.ObjectFieldsPage returned by the previous call. Note: when the `id` is specified, paging is not supported. In this case, if the number of `id` values specified exceeds the maximum page size, the method returns 400 (BAD REQUEST).
  'id': ["null"], // [String] | A comma-separated list of object IDs. If not provided, all objects are returned. The number of IDs provided cannot exceed the default page size.
  'options': ["null"], // [String] | Options for the operation. Options include: - `unsafe` – fetch all the properties, cannot be specified with `props`. - `hide_builtins` – hide built-in properties, can only be specified with `unsafe`. - `deleted` – get only deleted objects. 
  'props': ["null"] // [String] | The list of property names and transformations. To include multiple names and transformation bindings, provide a comma-separated list. For example, `props=first_name,last_name`. If the `unsafe` option is used, must be empty.
};
apiInstance.getObjects(collection, reason, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection containing the objects. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **reloadCache** | **Boolean**| Reloads the cache before the action. | [optional] 
 **pageSize** | **Number**| The maximum number of items to return in this request. If not specified, the default value is used. The default value is the value specified in the environment variable &#x60;PVAULT_SERVICE_DEFAULT_PAGE_SIZE&#x60;. The value must not exceed the value specified in the environment variable &#x60;PVAULT_SERVICE_DEFAULT_PAGE_SIZE&#x60; | [optional] 
 **cursor** | **String**| The cursor represents the state of consecutive queries for the same request parameters. In the first call, the cursor may be omitted or specified as an empty string. In consecutive calls, it should be set to the value of the cursor field of the models.ObjectFieldsPage returned by the previous call. Note: when the &#x60;id&#x60; is specified, paging is not supported. In this case, if the number of &#x60;id&#x60; values specified exceeds the maximum page size, the method returns 400 (BAD REQUEST). | [optional] 
 **id** | [**[String]**](String.md)| A comma-separated list of object IDs. If not provided, all objects are returned. The number of IDs provided cannot exceed the default page size. | [optional] 
 **options** | [**[String]**](String.md)| Options for the operation. Options include: - &#x60;unsafe&#x60; – fetch all the properties, cannot be specified with &#x60;props&#x60;. - &#x60;hide_builtins&#x60; – hide built-in properties, can only be specified with &#x60;unsafe&#x60;. - &#x60;deleted&#x60; – get only deleted objects.  | [optional] 
 **props** | [**[String]**](String.md)| The list of property names and transformations. To include multiple names and transformation bindings, provide a comma-separated list. For example, &#x60;props&#x3D;first_name,last_name&#x60;. If the &#x60;unsafe&#x60; option is used, must be empty. | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getObjectsProperty

> Object getObjectsProperty(reason, collection, property, opts)

Get objects property

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.ObjectsApi();
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let collection = "collection_example"; // String | The name of the collection containing the objects.
let property = "property_example"; // String | The required property.
let opts = {
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'reloadCache': true, // Boolean | Reloads the cache before the action.
  'pageSize': 56, // Number | The maximum number of items to return in this request. If not specified, the default value is used. The default value is the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`. The value must not exceed the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`
  'cursor': "cursor_example", // String | The cursor represents the state of consecutive queries for the same request parameters. In the first call, the cursor may be omitted or specified as an empty string. In consecutive calls, it should be set to the value of the cursor field of the models.ObjectFieldsPage returned by the previous call. Note: when the `id` is specified, paging is not supported. In this case, if the number of `id` values specified exceeds the maximum page size, the method returns 400 (BAD REQUEST).
  'options': ["null"], // [String] | Options for the operation. Options include: - `deleted` – get only deleted objects. 
  'id': ["null"], // [String] | The ID of the object. If not given - return all objects
  'props': ["null"] // [String] | The list of property names and transformations. To include multiple names and transformation bindings, provide a comma-separated list. For example, `props=first_name,last_name`. If the `unsafe` option is used, must be empty.
};
apiInstance.getObjectsProperty(reason, collection, property, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection containing the objects. | 
 **property** | **String**| The required property. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **reloadCache** | **Boolean**| Reloads the cache before the action. | [optional] 
 **pageSize** | **Number**| The maximum number of items to return in this request. If not specified, the default value is used. The default value is the value specified in the environment variable &#x60;PVAULT_SERVICE_DEFAULT_PAGE_SIZE&#x60;. The value must not exceed the value specified in the environment variable &#x60;PVAULT_SERVICE_DEFAULT_PAGE_SIZE&#x60; | [optional] 
 **cursor** | **String**| The cursor represents the state of consecutive queries for the same request parameters. In the first call, the cursor may be omitted or specified as an empty string. In consecutive calls, it should be set to the value of the cursor field of the models.ObjectFieldsPage returned by the previous call. Note: when the &#x60;id&#x60; is specified, paging is not supported. In this case, if the number of &#x60;id&#x60; values specified exceeds the maximum page size, the method returns 400 (BAD REQUEST). | [optional] 
 **options** | [**[String]**](String.md)| Options for the operation. Options include: - &#x60;deleted&#x60; – get only deleted objects.  | [optional] 
 **id** | [**[String]**](String.md)| The ID of the object. If not given - return all objects | [optional] 
 **props** | [**[String]**](String.md)| The list of property names and transformations. To include multiple names and transformation bindings, provide a comma-separated list. For example, &#x60;props&#x3D;first_name,last_name&#x60;. If the &#x60;unsafe&#x60; option is used, must be empty. | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchObjects

> Object searchObjects(collection, reason, modelsQuery, opts)

Search objects

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.ObjectsApi();
let collection = "collection_example"; // String | The name of the collection containing the objects.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let modelsQuery = new PiianoVaultRestApi.ModelsQuery(); // ModelsQuery | The query. This is a JSON object consisting of property keys and match values. For example: <code>&quot;match&quot;: {&quot;first_name&quot;: &quot;John&quot;, &quot;last_name&quot;: &quot;Doe&quot;}</code> is the equivalent to: <code>where first_name = &quot;John&quot; AND last_name=&quot;Doe&quot;</code>
let opts = {
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'reloadCache': true, // Boolean | Reloads the cache before the action.
  'pageSize': 56, // Number | The maximum number of items to return in this request. If not specified, the default value is used. The default value is the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`. The value must not exceed the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`
  'cursor': "cursor_example", // String | The cursor represents the state of consecutive queries for the same request parameters. In the first call, the cursor may be omitted or specified as an empty string. In consecutive calls, it should be set to the value of the cursor field of the models.ObjectFieldsPage returned by the previous call. Note: when the `id` is specified, paging is not supported. In this case, if the number of `id` values specified exceeds the maximum page size, the method returns 400 (BAD REQUEST).
  'options': ["null"], // [String] | Options for the operation. Options include: - `unsafe` – fetch all the properties, cannot be specified with `props`. - `hide_builtins` – hide built-in properties, can only be specified with `unsafe`. - `deleted` – get only deleted objects. 
  'props': ["null"] // [String] | The list of property names and transformations. To include multiple names and transformation bindings, provide a comma-separated list. For example, `props=first_name,last_name`. If the `unsafe` option is used, must be empty.
};
apiInstance.searchObjects(collection, reason, modelsQuery, opts, (error, data, response) => {
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
 **collection** | **String**| The name of the collection containing the objects. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **modelsQuery** | [**ModelsQuery**](ModelsQuery.md)| The query. This is a JSON object consisting of property keys and match values. For example: &lt;code&gt;&amp;quot;match&amp;quot;: {&amp;quot;first_name&amp;quot;: &amp;quot;John&amp;quot;, &amp;quot;last_name&amp;quot;: &amp;quot;Doe&amp;quot;}&lt;/code&gt; is the equivalent to: &lt;code&gt;where first_name &#x3D; &amp;quot;John&amp;quot; AND last_name&#x3D;&amp;quot;Doe&amp;quot;&lt;/code&gt; | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **reloadCache** | **Boolean**| Reloads the cache before the action. | [optional] 
 **pageSize** | **Number**| The maximum number of items to return in this request. If not specified, the default value is used. The default value is the value specified in the environment variable &#x60;PVAULT_SERVICE_DEFAULT_PAGE_SIZE&#x60;. The value must not exceed the value specified in the environment variable &#x60;PVAULT_SERVICE_DEFAULT_PAGE_SIZE&#x60; | [optional] 
 **cursor** | **String**| The cursor represents the state of consecutive queries for the same request parameters. In the first call, the cursor may be omitted or specified as an empty string. In consecutive calls, it should be set to the value of the cursor field of the models.ObjectFieldsPage returned by the previous call. Note: when the &#x60;id&#x60; is specified, paging is not supported. In this case, if the number of &#x60;id&#x60; values specified exceeds the maximum page size, the method returns 400 (BAD REQUEST). | [optional] 
 **options** | [**[String]**](String.md)| Options for the operation. Options include: - &#x60;unsafe&#x60; – fetch all the properties, cannot be specified with &#x60;props&#x60;. - &#x60;hide_builtins&#x60; – hide built-in properties, can only be specified with &#x60;unsafe&#x60;. - &#x60;deleted&#x60; – get only deleted objects.  | [optional] 
 **props** | [**[String]**](String.md)| The list of property names and transformations. To include multiple names and transformation bindings, provide a comma-separated list. For example, &#x60;props&#x3D;first_name,last_name&#x60;. If the &#x60;unsafe&#x60; option is used, must be empty. | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateObjectById

> updateObjectById(collection, id, reason, requestBody, opts)

Modify object

### Example

```javascript
import PiianoVaultRestApi from 'piiano_vault_rest_api';
let defaultClient = PiianoVaultRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PiianoVaultRestApi.ObjectsApi();
let collection = "collection_example"; // String | The name of the collection containing the object.
let id = ["null"]; // [String] | The ID of the object.
let reason = "reason_example"; // String | Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
let requestBody = {key: null}; // {String: Object} | The object properties to update.
let opts = {
  'adhocReason': "adhocReason_example", // String | An ad-hoc reason for accessing the Vault data.
  'reloadCache': true, // Boolean | Reloads the cache before the action.
  'ttl': "ttl_example", // String | Object time to live (TTL) in seconds. If not set, the default TTL is used. See the `PVAULT_TTL_ASSOCIATED_OBJECTS` and `PVAULT_TTL_UNASSOCIATED_OBJECTS` time to live environment variables.
  'options': ["null"] // [String] | Options for the operation. Options include: - `deleted` – update only deleted objects. 
};
apiInstance.updateObjectById(collection, id, reason, requestBody, opts, (error, data, response) => {
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
 **id** | [**[String]**](String.md)| The ID of the object. | 
 **reason** | **String**| Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false. | 
 **requestBody** | [**{String: Object}**](Object.md)| The object properties to update. | 
 **adhocReason** | **String**| An ad-hoc reason for accessing the Vault data. | [optional] 
 **reloadCache** | **Boolean**| Reloads the cache before the action. | [optional] 
 **ttl** | **String**| Object time to live (TTL) in seconds. If not set, the default TTL is used. See the &#x60;PVAULT_TTL_ASSOCIATED_OBJECTS&#x60; and &#x60;PVAULT_TTL_UNASSOCIATED_OBJECTS&#x60; time to live environment variables. | [optional] 
 **options** | [**[String]**](String.md)| Options for the operation. Options include: - &#x60;deleted&#x60; – update only deleted objects.  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

