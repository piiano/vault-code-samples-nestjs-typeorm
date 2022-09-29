/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type models_TokenRefMetadata = {
    /**
     * Creation time of the token (UTC).
     */
    creation_time?: string;
    /**
     * Effective expiry time of the token (UTC).
     */
    effective_expiration_time?: string;
    /**
     * Expiry time of the token (UTC).
     */
    expiration_time?: string;
    /**
     * The object of which the was were tokenized.
     */
    object_id?: string;
    /**
     * Tags attached to the token.
     */
    tags?: Array<string>;
};

