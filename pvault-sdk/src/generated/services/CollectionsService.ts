/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { models_Collection } from '../models/models_Collection';
import type { models_Property } from '../models/models_Property';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CollectionsService {

    /**
     * List collections
     * @param format When set to `pvschema`, returns the collection in the PVSchema format. Otherwise, returns the JSON format.
     * @param options Options for the operation. Options include:
     * - `show_builtins` – show built-in properties from response.
     *
     * @returns models_Collection The request is successful.
     * @throws ApiError
     */
    public static getAllCollections(
        format: 'pvschema' | 'json' = 'json',
        options?: Array<'show_builtins'>,
    ): CancelablePromise<Array<models_Collection>> {
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
                404: `The requested resource is not found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Add collection
     * @param requestBody Details of the collection including its properties.
     * @param format When set to `pvschema`, returns the collection in the PVSchema format. Otherwise, returns the JSON format.
     * @param options Options for the operation. Options include:
     * - `show_builtins` – show built-in properties from response.
     *
     * @returns models_Collection The request is successful.
     * @throws ApiError
     */
    public static addCollection(
        requestBody: models_Collection,
        format: 'pvschema' | 'json' = 'json',
        options?: Array<'show_builtins'>,
    ): CancelablePromise<models_Collection> {
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
                404: `The requested resource is not found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Delete collection
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
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Get collection details
     * @param collection The name of the collection.
     * @param format When set to `pvschema`, returns the collection in the PVSchema format. Otherwise, returns the JSON format.
     * @param options Options for the operation. Options include:
     * - `show_builtins` – show built-in properties from response.
     *
     * @returns models_Collection The request is successful.
     * @throws ApiError
     */
    public static getCollection(
        collection: string,
        format: 'pvschema' | 'json' = 'json',
        options?: Array<'show_builtins'>,
    ): CancelablePromise<models_Collection> {
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
                404: `The collection isn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Update collection details
     * @param collection The name of the collection to import the properties to.
     * @param requestBody Details of the collection including its properties.
     * @param format When set to `pvschema`, returns the collection in the PVSchema format. Otherwise, returns the JSON format.
     * @param options Options for the operation. Options include:
     * - `show_builtins` – show built-in properties from response.
     *
     * @returns models_Collection The request is successful.
     * @throws ApiError
     */
    public static updateCollection(
        collection: string,
        requestBody: models_Collection,
        format: 'pvschema' | 'json' = 'json',
        options?: Array<'show_builtins'>,
    ): CancelablePromise<models_Collection> {
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
                404: `The collection isn't found.`,
                500: `An error occurred on the server.`,
                501: `Not implemented.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * List collection properties
     * @param collection The name of the collection containing the properties.
     * @param options Options for the operation. Options include:
     * - `show_builtins` – show built-in properties from response.
     *
     * @returns models_Property The request is successful.
     * @throws ApiError
     */
    public static listCollectionProperties(
        collection: string,
        options?: Array<'show_builtins'>,
    ): CancelablePromise<Array<models_Property>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/collections/{collection}/properties',
            path: {
                'collection': collection,
            },
            query: {
                'options': options,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection isn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Delete collection property
     * @param collection The name of the collection containing the property.
     * @param property The name of the property.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static deleteCollectionProperty(
        collection: string,
        property: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/pvlt/1.0/ctl/collections/{collection}/properties/{property}',
            path: {
                'collection': collection,
                'property': property,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection or property wasn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Get collection property
     * @param collection The ID of the collection containing the property.
     * @param property The name of the property.
     * @returns models_Property The request is successful.
     * @throws ApiError
     */
    public static getCollectionProperty(
        collection: string,
        property: string,
    ): CancelablePromise<models_Property> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/collections/{collection}/properties/{property}',
            path: {
                'collection': collection,
                'property': property,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection or property wasn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Update collection property
     * @param collection The name of the collection containing the property.
     * @param property The name of the property.
     * @param requestBody property info
     * @returns any Property updated successfully
     * @throws ApiError
     */
    public static updateCollectionProperty(
        collection: string,
        property: string,
        requestBody: models_Property,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/pvlt/1.0/ctl/collections/{collection}/properties/{property}',
            path: {
                'collection': collection,
                'property': property,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection or property wasn't found.`,
                500: `An error occurred on the server.`,
                501: `Not implemented.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Add collection property
     * @param collection The name of the collection to add the property to.
     * @param property The name of the property to add.
     * @param requestBody Details of the property.
     * @returns models_Property The request is successful.
     * @throws ApiError
     */
    public static addCollectionProperty(
        collection: string,
        property: string,
        requestBody: models_Property,
    ): CancelablePromise<models_Property> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/ctl/collections/{collection}/properties/{property}',
            path: {
                'collection': collection,
                'property': property,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection isn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

}
