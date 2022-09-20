# PiianoVaultRestApi.ModelsProperty

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creationTime** | **Date** | The time when the property was created in an RFC3339 format. | [optional] [readonly] 
**description** | **String** | The description of the property, If not provided, is set to an empty String. | [optional] 
**isArray** | **Boolean** | Whether the property is an array or a value. | 
**isBuiltin** | **Boolean** | Whether the property is created by Vault (or by the user) | [optional] [default to false]
**isEncrypted** | **Boolean** | Whether the value is stored encrypted and decrypted when retrieved by a caller. Encryption provides extra protection against a malicious actor gaining access to the backend storage. | [optional] [default to false]
**isIndex** | **Boolean** | Whether the backend storage is optimized for searches on this value. | [optional] [default to false]
**isNullable** | **Boolean** | Whether the value of the field can be removed (set to null). | [optional] [default to false]
**isReadonly** | **Boolean** | When is_builtin is true, whether the user can modify values of this property. | [optional] [default to false]
**isUnique** | **Boolean** | Whether the backend storage enforces unique values. | [optional] [default to false]
**modificationTime** | **Date** | The time when the property was last modified in an RFC3339 format. | [optional] [readonly] 
**name** | **String** | The name of the property. This is the name of the column in the data_{collection_name} table. Must be unique. | 
**piiTypeName** | **String** | The name of the property type. | 


