/**
 * Piiano Vault REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ModelsConfVar from '../model/ModelsConfVar';
import ModelsConfVarValue from '../model/ModelsConfVarValue';
import RestHTTPError from '../model/RestHTTPError';

/**
* ConfigVars service.
* @module api/ConfigVarsApi
* @version 1.0
*/
export default class ConfigVarsApi {

    /**
    * Constructs a new ConfigVarsApi. 
    * @alias module:api/ConfigVarsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the clearAllConfVars operation.
     * @callback module:api/ConfigVarsApi~clearAllConfVarsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clear configuration variables
     * @param {module:model/String} reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param {Object} opts Optional parameters
     * @param {String} opts.adhocReason An ad-hoc reason for accessing the Vault data.
     * @param {module:api/ConfigVarsApi~clearAllConfVarsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clearAllConfVars(reason, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'reason' is set
      if (reason === undefined || reason === null) {
        throw new Error("Missing the required parameter 'reason' when calling clearAllConfVars");
      }

      let pathParams = {
      };
      let queryParams = {
        'adhoc_reason': opts['adhocReason'],
        'reason': reason
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/pvlt/1.0/system/confvar', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConfVar operation.
     * @callback module:api/ConfigVarsApi~getConfVarCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsConfVar} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get configuration variable
     * @param {String} name The name of the configuration variable.
     * @param {module:model/String} reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param {Object} opts Optional parameters
     * @param {String} opts.adhocReason An ad-hoc reason for accessing the Vault data.
     * @param {module:api/ConfigVarsApi~getConfVarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsConfVar}
     */
    getConfVar(name, reason, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getConfVar");
      }
      // verify the required parameter 'reason' is set
      if (reason === undefined || reason === null) {
        throw new Error("Missing the required parameter 'reason' when calling getConfVar");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
        'adhoc_reason': opts['adhocReason'],
        'reason': reason
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelsConfVar;
      return this.apiClient.callApi(
        '/api/pvlt/1.0/system/confvar/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setConfVar operation.
     * @callback module:api/ConfigVarsApi~setConfVarCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set configuration variable
     * @param {String} name The name of the configuration variable.
     * @param {module:model/String} reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param {module:model/ModelsConfVarValue} modelsConfVarValue Value of the configuration.
     * @param {Object} opts Optional parameters
     * @param {String} opts.adhocReason An ad-hoc reason for accessing the Vault data.
     * @param {module:api/ConfigVarsApi~setConfVarCallback} callback The callback function, accepting three arguments: error, data, response
     */
    setConfVar(name, reason, modelsConfVarValue, opts, callback) {
      opts = opts || {};
      let postBody = modelsConfVarValue;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling setConfVar");
      }
      // verify the required parameter 'reason' is set
      if (reason === undefined || reason === null) {
        throw new Error("Missing the required parameter 'reason' when calling setConfVar");
      }
      // verify the required parameter 'modelsConfVarValue' is set
      if (modelsConfVarValue === undefined || modelsConfVarValue === null) {
        throw new Error("Missing the required parameter 'modelsConfVarValue' when calling setConfVar");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
        'adhoc_reason': opts['adhocReason'],
        'reason': reason
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/pvlt/1.0/system/confvar/{name}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
