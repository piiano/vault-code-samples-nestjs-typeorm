/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { models_VaultGeneration } from './models_VaultGeneration';
import type { models_Worker } from './models_Worker';

export type models_AllGenerations = {
    vault?: models_VaultGeneration;
    /**
     * Workers generations.
     */
    workers?: Array<models_Worker>;
};

