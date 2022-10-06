/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type models_TokenizeRequest = {
    /**
     * Format preserving properties names to be used by the template for the ID generation.
     */
    fpprops?: Array<string>;
    /**
     * Format preserving template to use. Keep empty to use UUID.
     */
    fptemplate?: string;
    /**
     * Object IDs to tokenize.
     */
    object_ids: Array<string>;
    /**
     * The properties to tokenize.
     */
    props: Array<string>;
    /**
     * Whether the token ID can be reused if tokenizing the same data.
     */
    reuse_token_id?: boolean;
    /**
     * Whether the token can be detokenized.
     */
    reversible?: boolean;
    /**
     * Uniqueness scope of the token.
     */
    scope?: string;
    /**
     * Tags to attach to the token (max 10).
     */
    tags?: Array<string>;
    /**
     * Token type.
     */
    type: models_TokenizeRequest.type;
};

export namespace models_TokenizeRequest {

    /**
     * Token type.
     */
    export enum type {
        POINTER = 'pointer',
        VALUE = 'value',
    }


}

