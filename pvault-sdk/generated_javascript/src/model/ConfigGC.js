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
 * The ConfigGC model module.
 * @module model/ConfigGC
 * @version 1.0
 */
class ConfigGC {
    /**
     * Constructs a new <code>ConfigGC</code>.
     * @alias module:model/ConfigGC
     */
    constructor() { 
        
        ConfigGC.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfigGC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigGC} obj Optional instance to populate.
     * @return {module:model/ConfigGC} The populated <code>ConfigGC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigGC();

            if (data.hasOwnProperty('batch_size')) {
                obj['batch_size'] = ApiClient.convertToType(data['batch_size'], 'Number');
            }
            if (data.hasOwnProperty('grace_period_days')) {
                obj['grace_period_days'] = ApiClient.convertToType(data['grace_period_days'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} batch_size
 */
ConfigGC.prototype['batch_size'] = undefined;

/**
 * @member {Number} grace_period_days
 */
ConfigGC.prototype['grace_period_days'] = undefined;






export default ConfigGC;
