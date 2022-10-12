/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type models_Property = {
    /**
     * The time when the property was created in an RFC3339 format.
     */
    readonly creation_time?: string;
    /**
     * The description of the property, If not provided, is set to an empty String.
     */
    description?: string;
    /**
     * Whether the property is created by Vault (or by the user)
     */
    readonly is_builtin?: boolean;
    /**
     * Whether the value is stored encrypted and decrypted when retrieved by a caller. Encryption provides extra protection against a malicious actor gaining access to the backend storage.
     */
    is_encrypted?: boolean;
    /**
     * Whether the backend storage is optimized for searches on this value.
     */
    is_index?: boolean;
    /**
     * Whether the value of the field can be removed (set to null).
     */
    is_nullable?: boolean;
    /**
     * When is_builtin is true, whether the user can modify values of this property.
     */
    readonly is_readonly?: boolean;
    /**
     * Whether the backend storage enforces unique values.
     */
    is_unique?: boolean;
    /**
     * The time when the property was last modified in an RFC3339 format.
     */
    readonly modification_time?: string;
    /**
     * The name of the property. This is the name of the column in the data_{collection_name} table. Must be unique.
     */
    name: string;
    /**
     * The name of the property type.
     */
    pii_type_name: string;
};

