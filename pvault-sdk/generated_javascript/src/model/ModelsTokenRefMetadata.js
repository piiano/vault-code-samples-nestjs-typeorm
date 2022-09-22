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

import ApiClient from '../ApiClient';

/**
 * The ModelsTokenRefMetadata model module.
 * @module model/ModelsTokenRefMetadata
 * @version 1.0
 */
class ModelsTokenRefMetadata {
    /**
     * Constructs a new <code>ModelsTokenRefMetadata</code>.
     * @alias module:model/ModelsTokenRefMetadata
     */
    constructor() { 
        
        ModelsTokenRefMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsTokenRefMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsTokenRefMetadata} obj Optional instance to populate.
     * @return {module:model/ModelsTokenRefMetadata} The populated <code>ModelsTokenRefMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsTokenRefMetadata();

            if (data.hasOwnProperty('creation_time')) {
                obj['creation_time'] = ApiClient.convertToType(data['creation_time'], 'Date');
            }
            if (data.hasOwnProperty('effective_expiration_time')) {
                obj['effective_expiration_time'] = ApiClient.convertToType(data['effective_expiration_time'], 'Date');
            }
            if (data.hasOwnProperty('expiration_time')) {
                obj['expiration_time'] = ApiClient.convertToType(data['expiration_time'], 'Date');
            }
            if (data.hasOwnProperty('object_id')) {
                obj['object_id'] = ApiClient.convertToType(data['object_id'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Creation time of the token (UTC).
 * @member {Date} creation_time
 */
ModelsTokenRefMetadata.prototype['creation_time'] = undefined;

/**
 * Effective expiry time of the token (UTC).
 * @member {Date} effective_expiration_time
 */
ModelsTokenRefMetadata.prototype['effective_expiration_time'] = undefined;

/**
 * Expiry time of the token (UTC).
 * @member {Date} expiration_time
 */
ModelsTokenRefMetadata.prototype['expiration_time'] = undefined;

/**
 * The object of which the was were tokenized.
 * @member {String} object_id
 */
ModelsTokenRefMetadata.prototype['object_id'] = undefined;

/**
 * Tags attached to the token.
 * @member {Array.<String>} tags
 */
ModelsTokenRefMetadata.prototype['tags'] = undefined;






export default ModelsTokenRefMetadata;
