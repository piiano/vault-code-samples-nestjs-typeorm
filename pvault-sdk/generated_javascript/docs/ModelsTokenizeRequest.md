# PiianoVaultRestApi.ModelsTokenizeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fpprops** | **[String]** | Format preserving properties names to be used by the template for the ID generation. | [optional] 
**fptemplate** | **String** | Format preserving template to use. Keep empty to use UUID. | [optional] 
**objectIds** | **[String]** | Object IDs to tokenize. | 
**props** | **[String]** | The properties to tokenize. | 
**reuseTokenId** | **Boolean** | Whether the token ID can be reused if tokenizing the same data. | [optional] [default to false]
**reversible** | **Boolean** | Whether the token can be detokenized. | [optional] [default to true]
**scope** | **String** | Uniqueness scope of the token. | [optional] [default to &#39;default&#39;]
**tags** | **[String]** | Tags to attach to the token (max 10). | [optional] 
**type** | **String** | Token type. | 



## Enum: TypeEnum


* `pointer` (value: `"pointer"`)

* `value` (value: `"value"`)




