/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { models_TokenAggregatedMetadata } from './models_TokenAggregatedMetadata';
import type { models_TokenRefMetadata } from './models_TokenRefMetadata';

export type models_TokenMetadata = {
    agg?: models_TokenAggregatedMetadata;
    /**
     * ID reusability status of the tokens.
     */
    reusable_token_id?: boolean;
    /**
     * Whether the token is reversible or not.
     */
    reversible?: boolean;
    /**
     * The scope of the tokens.
     */
    scope?: string;
    /**
     * The shared ID of the tokens.
     */
    token_id?: string;
    /**
     * Metadata for the each token.
     */
    tokens?: Array<models_TokenRefMetadata>;
};

