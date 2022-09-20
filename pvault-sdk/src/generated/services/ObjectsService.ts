/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { models_Object } from '../models/models_Object';
import type { models_ObjectFieldsPage } from '../models/models_ObjectFieldsPage';
import type { models_ObjectID } from '../models/models_ObjectID';
import type { models_Query } from '../models/models_Query';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ObjectsService {

    /**
     * Delete object
     * @param collection The name of the collection containing the object.
     * @param id The ID of the object.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param options Options for the operation. Options include:
     * - `hard_delete` – permanently delete the objects.
     * - `deleted` – remove only deleted objects, requires `hard_delete` to be specified.
     *
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static deleteObjectById(
        collection: string,
        id: Array<string>,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        options?: Array<string>,
        adhocReason?: string,
        reloadCache?: boolean,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/pvlt/1.0/data/collections/{collection}/objects',
            path: {
                'collection': collection,
            },
            query: {
                'id': id,
                'options': options,
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection or object is not found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * List objects
     * @param collection The name of the collection containing the objects.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @param pageSize The maximum number of items to return in this request. If not specified, the default value is used. The default value is the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`. The value must not exceed the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`
     * @param cursor The cursor represents the state of consecutive queries for the same request parameters. In the first call, the cursor may be omitted or specified as an empty string. In consecutive calls, it should be set to the value of the cursor field of the models.ObjectFieldsPage returned by the previous call. Note: when the `id` is specified, paging is not supported. In this case, if the number of `id` values specified exceeds the maximum page size, the method returns 400 (BAD REQUEST).
     * @param id A comma-separated list of object IDs. If not provided, all objects are returned. The number of IDs provided cannot exceed the default page size.
     * @param options Options for the operation. Options include:
     * - `unsafe` – fetch all the properties, cannot be specified with `props`.
     * - `show_builtins` – show built-in properties, can only be specified with `unsafe`.
     * - `deleted` – get only deleted objects.
     *
     * @param props The list of property names and transformations. To include multiple names and transformation bindings, provide a comma-separated list. For example, `props=first_name,last_name`. If the `unsafe` option is used, must be empty.
     * @returns models_ObjectFieldsPage The request is successful.
     * @throws ApiError
     */
    public static getObjects(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
        reloadCache?: boolean,
        pageSize?: number,
        cursor?: string,
        id?: Array<string>,
        options?: Array<string>,
        props?: Array<string>,
    ): CancelablePromise<models_ObjectFieldsPage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/data/collections/{collection}/objects',
            path: {
                'collection': collection,
            },
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
                'page_size': pageSize,
                'cursor': cursor,
                'id': id,
                'options': options,
                'props': props,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection, properties or object isn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Update object
     * @param collection The name of the collection containing the object.
     * @param id The ID of the object.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody The object properties to update.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @param ttl Object time to live (TTL) in seconds. If not set, the default TTL is used. See the `PVAULT_TTL_ASSOCIATED_OBJECTS` and `PVAULT_TTL_UNASSOCIATED_OBJECTS` time to live environment variables.
     * @param options Options for the operation. Options include:
     * - `deleted` – update only deleted objects.
     *
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static updateObjectById(
        collection: string,
        id: Array<string>,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: models_Object,
        adhocReason?: string,
        reloadCache?: boolean,
        ttl?: string,
        options?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/pvlt/1.0/data/collections/{collection}/objects',
            path: {
                'collection': collection,
            },
            query: {
                'id': id,
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
                'ttl': ttl,
                'options': options,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection, properties, or object is not found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Add object
     * @param collection The name of the collection to add the object to.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody The object details.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @param ttl Object time to live (TTL) in seconds, cannot be set to 0. If not set, the default TTL is used. See the `PVAULT_TTL_ASSOCIATED_OBJECTS` and `PVAULT_TTL_UNASSOCIATED_OBJECTS` time to live environment variables.
     * @returns models_ObjectID The request is successful.
     * @throws ApiError
     */
    public static addObject(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: models_Object,
        adhocReason?: string,
        reloadCache?: boolean,
        ttl?: string,
    ): CancelablePromise<models_ObjectID> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/data/collections/{collection}/objects',
            path: {
                'collection': collection,
            },
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
                'ttl': ttl,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection or properties isn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Get objects property
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param collection The name of the collection containing the objects.
     * @param property The required property.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @param pageSize The maximum number of items to return in this request. If not specified, the default value is used. The default value is the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`. The value must not exceed the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`
     * @param cursor The cursor represents the state of consecutive queries for the same request parameters. In the first call, the cursor may be omitted or specified as an empty string. In consecutive calls, it should be set to the value of the cursor field of the models.ObjectFieldsPage returned by the previous call. Note: when the `id` is specified, paging is not supported. In this case, if the number of `id` values specified exceeds the maximum page size, the method returns 400 (BAD REQUEST).
     * @param options Options for the operation. Options include:
     * - `deleted` – get only deleted objects.
     *
     * @param id The ID of the object. If not given - return all objects
     * @returns models_ObjectFieldsPage The request is successful.
     * @throws ApiError
     */
    public static getObjectsProperty(
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        collection: string,
        property: string,
        adhocReason?: string,
        reloadCache?: boolean,
        pageSize?: number,
        cursor?: string,
        options?: Array<string>,
        id?: Array<string>,
    ): CancelablePromise<models_ObjectFieldsPage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/data/collections/{collection}/properties/{property}',
            path: {
                'collection': collection,
                'property': property,
            },
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
                'page_size': pageSize,
                'cursor': cursor,
                'options': options,
                'id': id,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection, properties or object isn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Search objects
     * @param collection The name of the collection containing the objects.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody The query.
     * This is a JSON object consisting of property keys and match values.
     * For example:
     * ```json
     * {
         * "match": {
             * "first_name": "John",
             * "last_name": "Doe"
             * }
             * }
             * ```
             * is the equivalent to:
             * ```sql
             * where first_name = "John" AND last_name="Doe"
             * ```
             *
             * @param adhocReason An ad-hoc reason for accessing the Vault data.
             * @param reloadCache Reloads the cache before the action.
             * @param pageSize The maximum number of items to return in this request. If not specified, the default value is used. The default value is the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`. The value must not exceed the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`
             * @param cursor The cursor represents the state of consecutive queries for the same request parameters. In the first call, the cursor may be omitted or specified as an empty string. In consecutive calls, it should be set to the value of the cursor field of the models.ObjectFieldsPage returned by the previous call. Note: when the `id` is specified, paging is not supported. In this case, if the number of `id` values specified exceeds the maximum page size, the method returns 400 (BAD REQUEST).
             * @param options Options for the operation. Options include:
             * - `unsafe` – fetch all the properties, cannot be specified with `props`.
             * - `show_builtins` – show built-in properties, can only be specified with `unsafe`.
             * - `deleted` – get only deleted objects.
             *
             * @param props The list of property names and transformations. To include multiple names and transformation bindings, provide a comma-separated list. For example, `props=first_name,last_name`. If the `unsafe` option is used, must be empty.
             * @returns models_ObjectFieldsPage The request is successful.
             * @throws ApiError
             */
            public static searchObjects(
                collection: string,
                reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
                requestBody: models_Query,
                adhocReason?: string,
                reloadCache?: boolean,
                pageSize?: number,
                cursor?: string,
                options?: Array<string>,
                props?: Array<string>,
            ): CancelablePromise<models_ObjectFieldsPage> {
                return __request(OpenAPI, {
                    method: 'POST',
                    url: '/api/pvlt/1.0/data/collections/{collection}/query/objects',
                    path: {
                        'collection': collection,
                    },
                    query: {
                        'adhoc_reason': adhocReason,
                        'reason': reason,
                        'reload_cache': reloadCache,
                        'page_size': pageSize,
                        'cursor': cursor,
                        'options': options,
                        'props': props,
                    },
                    body: requestBody,
                    mediaType: 'application/json',
                    errors: {
                        400: `The request is invalid.`,
                        401: `Authentication credentials are incorrect or missing.`,
                        403: `The caller doesn't have the required access rights.`,
                        404: `The collection or properties isn't found.`,
                        500: `An error occurred on the server.`,
                        503: `The service is unavailable.`,
                    },
                });
            }

        }
