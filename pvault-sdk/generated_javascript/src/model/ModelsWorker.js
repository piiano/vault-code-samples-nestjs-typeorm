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
 * The ModelsWorker model module.
 * @module model/ModelsWorker
 * @version 1.0
 */
class ModelsWorker {
    /**
     * Constructs a new <code>ModelsWorker</code>.
     * Worker.
     * @alias module:model/ModelsWorker
     */
    constructor() { 
        
        ModelsWorker.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsWorker</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsWorker} obj Optional instance to populate.
     * @return {module:model/ModelsWorker} The populated <code>ModelsWorker</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsWorker();

            if (data.hasOwnProperty('worker_id')) {
                obj['worker_id'] = ApiClient.convertToType(data['worker_id'], 'Number');
            }
            if (data.hasOwnProperty('generation_number')) {
                obj['generation_number'] = ApiClient.convertToType(data['generation_number'], 'Number');
            }
            if (data.hasOwnProperty('modified_at')) {
                obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'Date');
            }
            if (data.hasOwnProperty('refresh_interval_seconds')) {
                obj['refresh_interval_seconds'] = ApiClient.convertToType(data['refresh_interval_seconds'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Worker id.
 * @member {Number} worker_id
 */
ModelsWorker.prototype['worker_id'] = undefined;

/**
 * Generation number.
 * @member {Number} generation_number
 */
ModelsWorker.prototype['generation_number'] = undefined;

/**
 * Modified at.
 * @member {Date} modified_at
 */
ModelsWorker.prototype['modified_at'] = undefined;

/**
 * Refresh interval in seconds.
 * @member {Number} refresh_interval_seconds
 */
ModelsWorker.prototype['refresh_interval_seconds'] = undefined;






export default ModelsWorker;

