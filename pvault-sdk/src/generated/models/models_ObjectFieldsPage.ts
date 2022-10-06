/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { models_ObjectFields } from './models_ObjectFields';
import type { models_Paging } from './models_Paging';

export type models_ObjectFieldsPage = {
    /**
     * The page objects.
     */
    results?: Array<models_ObjectFields>;
    paging?: models_Paging;
};

