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
 * The ModelsObject model module.
 * @module model/ModelsObject
 * @version 1.0
 */
class ModelsObject {
    /**
     * Constructs a new <code>ModelsObject</code>.
     * @alias module:model/ModelsObject
     * @extends Object
     */
    constructor() { 
        
        ModelsObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsObject} obj Optional instance to populate.
     * @return {module:model/ModelsObject} The populated <code>ModelsObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsObject();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the object.
 * @member {String} _id
 */
ModelsObject.prototype['_id'] = undefined;






export default ModelsObject;
