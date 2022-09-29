/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { models_ConfigurationDoc } from './models_ConfigurationDoc';

/**
 * Details of a transformation that can be performed on a PII data type within a collection. Note: `pii_type_id` and `name` together are also a unique identifier of a transformation in a collection.
 */
export type models_TransformationDoc = {
    configuration?: models_ConfigurationDoc;
    /**
     * The name of the transformation.
     */
    name?: string;
    /**
     * The name of the PII type.
     */
    readonly pii_type_name?: string;
};

