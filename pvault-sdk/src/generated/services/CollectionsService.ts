/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collection } from '../models/Collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CollectionsService {

    /**
     * List collections
     * Lists all collections.
     *
     * The collections can be returned in JSON or PVSchema format using the `format` query parameter or by setting the `Accept` header to `application/json` or `application/pvschema`, respectively. The default is to return JSON.
     *
     * See [PVSchema](/guides/manage-collections-and-schemas/reference/pvschema) for more details on the structure and content of PVSchema.
     *
     * The PVSchema format for multiple collections is the PVSchema for each collection string concatenated with a newline.
     *
     * The role that performs this operation must have the `CapCollectionsReader` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     *
     * @param format The format of the response. Overrides any `Accept` header value provided.
     * @param options Options for the operation. Options include:
     * - `show_builtins` – show built-in properties in the response.
     *
     * @returns Collection The request is successful.
     * @throws ApiError
     */
    public static listCollections(
        format: 'pvschema' | 'json' = 'json',
        options?: Array<'show_builtins'>,
    ): CancelablePromise<Array<Collection>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/collections',
            query: {
                'format': format,
                'options': options,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `Reserved for future use.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Add collection
     * Adds a collection.
     *
     * The collection request can be provided in JSON or PVSchema format by setting the `Content-Type` header to `application/json` or `application/pvschema`, respectively. The collection can be returned in JSON or PVSchema format using the `format` query parameter or by setting the `Accept` header to `application/json` or `application/pvschema`, respectively. The default is to return JSON.
     *
     * See [PVSchema](/guides/manage-collections-and-schemas/reference/pvschema) for more details on the structure and content of PVSchema.
     *
     * Invalid optional `properties` attributes in a JSON request are ignored.
     *
     * The role performing this operation must have the `CapCollectionsWriter` capability. See [Access control](/data-security/identity-and-access-management#access-control) for more information about how capabilities are used to control access to operations.
     * @param requestBody Details of the collection including its properties.
     * @param format The format of the response. Overrides any `Accept` header value provided.
     * @param options Options for the operation. Options include:
     * - `show_builtins` – show built-in properties in the response.
     *
     * @returns Collection The request is successful.
     * @throws ApiError
     */
    public static addCollection(
        requestBody: Collection,
        format: 'pvschema' | 'json' = 'json',
        options?: Array<'show_builtins'>,
    ): CancelablePromise<Collection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/ctl/collections',
            query: {
                'format': format,
                'options': options,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `Reserved for future use.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Get collection
     * Gets a collection and its properties.
     *
     * The collection details can be returned in JSON or PVSchema format using the `format` query parameter or by setting the `Accept` header to `application/json` or `application/pvschema`, respectively. The default is to return JSON.
     *
     * See [PVSchema](/guides/manage-collections-and-schemas/reference/pvschema) for more details on the structure and content of PVSchema.
     *
     * The role that performs this operation must have the `CapCollectionsReader` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     *
     * @param collection The name of the collection.
     * @param format The format of the response. Overrides any `Accept` header value provided.
     * @param options Options for the operation. Options include:
     * - `show_builtins` – show built-in properties in the response.
     *
     * @returns Collection The request is successful.
     * @throws ApiError
     */
    public static getCollection(
        collection: string,
        format: 'pvschema' | 'json' = 'json',
        options?: Array<'show_builtins'>,
    ): CancelablePromise<Collection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/collections/{collection}',
            path: {
                'collection': collection,
            },
            query: {
                'format': format,
                'options': options,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection is not found.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Update collection
     * Adds properties to a collection.
     *
     * The collection request can be provided in JSON or PVSchema format by setting the `Content-Type` header to `application/json` or `application/pvschema`, respectively. The collection can be returned in JSON or PVSchema format using the `format` query parameter or by setting  the  `Accept` header to `application/json` or `application/pvschema`, respectively. The default is to return JSON.
     *
     * See [PVSchema](/guides/manage-collections-and-schemas/reference/pvschema) for more details on the structure and content of PVSchema.
     *
     * The collection name provided in the path parameter must match the collection name in the JSON or PVSchema.
     *
     * The role that performs this operation must have the `CapCollectionsWriter` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     *
     * @param collection The name of the collection.
     * @param requestBody Details of the collection, including its properties.
     * @param format The format of the response. Overrides any `Accept` header value provided.
     * @param options Options for the operation. Options include:
     * - `show_builtins` – show built-in properties in the response.
     *
     * @returns Collection The request is successful.
     * @throws ApiError
     */
    public static updateCollection(
        collection: string,
        requestBody: Collection,
        format: 'pvschema' | 'json' = 'json',
        options?: Array<'show_builtins'>,
    ): CancelablePromise<Collection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/pvlt/1.0/ctl/collections/{collection}',
            path: {
                'collection': collection,
            },
            query: {
                'format': format,
                'options': options,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection is not found.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                501: `Not implemented.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Delete collection
     * Deletes a collection.
     *
     * The role that performs this operation must have the `CapCollectionsWriter` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     * @param collection The name of the collection.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static deleteCollection(
        collection: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/pvlt/1.0/ctl/collections/{collection}',
            path: {
                'collection': collection,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection is not found.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

}
