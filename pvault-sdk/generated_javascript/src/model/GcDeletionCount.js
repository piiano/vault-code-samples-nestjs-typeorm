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
 * The GcDeletionCount model module.
 * @module model/GcDeletionCount
 * @version 1.0
 */
class GcDeletionCount {
    /**
     * Constructs a new <code>GcDeletionCount</code>.
     * @alias module:model/GcDeletionCount
     */
    constructor() { 
        
        GcDeletionCount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GcDeletionCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcDeletionCount} obj Optional instance to populate.
     * @return {module:model/GcDeletionCount} The populated <code>GcDeletionCount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcDeletionCount();

            if (data.hasOwnProperty('collection_name')) {
                obj['collection_name'] = ApiClient.convertToType(data['collection_name'], 'String');
            }
            if (data.hasOwnProperty('collection_type')) {
                obj['collection_type'] = ApiClient.convertToType(data['collection_type'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} collection_name
 */
GcDeletionCount.prototype['collection_name'] = undefined;

/**
 * @member {String} collection_type
 */
GcDeletionCount.prototype['collection_type'] = undefined;

/**
 * @member {Number} count
 */
GcDeletionCount.prototype['count'] = undefined;






export default GcDeletionCount;

