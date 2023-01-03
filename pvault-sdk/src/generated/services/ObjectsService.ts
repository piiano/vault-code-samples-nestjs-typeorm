/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Object } from '../models/Object';
import type { ObjectFieldsPage } from '../models/ObjectFieldsPage';
import type { ObjectID } from '../models/ObjectID';
import type { Query } from '../models/Query';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ObjectsService {

    /**
     * List objects
     * Returns a [paginated list](/api/api-pagination) of objects from a collection with all or a subset of object property values.
     *
     * The role performing this operation must have both of the following:
     * - The `CapDataReader` capability.
     * - At least one allowing policy and no denying policies for the `read` operation for each of the properties and the
     * collection requested in the call.
     *
     * See [identity and access management](/data-security/identity-and-access-management) for more information about how
     * capabilities are used to control access to operations and policies are used to control access to data.
     *
     * **Warning**: Use of the `unsafe` option, to include all object property values, may expose more private information than is required, use with caution.
     * @param collection The name of the collection containing the objects.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @param pageSize The maximum number of items to return in this request. If not specified, the default value is used. The default value is the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`. The value must not exceed the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`
     * @param cursor The cursor represents the state of consecutive queries for the same request parameters. In the first call, the cursor may be omitted or specified as an empty string. In consecutive calls, it should be set to the value of the cursor field of the objectFieldsPage returned by the previous call. Note: when the `id` is specified, paging is not supported. In this case, if the number of `id` values specified exceeds the maximum page size, the method returns 400 (BAD REQUEST).
     * @param xTransParam Extra parameter to pass on to the transformations.
     * @param ids A comma-separated list of object IDs
     * @param options Options for the operation. Options include:
     * - `unsafe` – fetch all the properties, cannot be specified with `props`.
     * - `show_builtins` – show built-in properties, can only be specified with `unsafe`.
     * - `archived` – whether to list only archived objects. If not specified, list only active objects.
     *
     * @param props The list of property names and transformations. To include multiple names and transformation bindings, provide a comma-separated list. For example, `props=first_name,last_name`. If the `unsafe` option is used, must be empty.
     * @returns ObjectFieldsPage The request is successful.
     * @throws ApiError
     */
    public static listObjects(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
        reloadCache?: boolean,
        pageSize?: number,
        cursor?: string,
        xTransParam?: string,
        ids?: Array<string>,
        options?: Array<string>,
        props?: Array<string>,
    ): CancelablePromise<ObjectFieldsPage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/data/collections/{collection}/objects',
            path: {
                'collection': collection,
            },
            headers: {
                'X-Trans-Param': xTransParam,
            },
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
                'page_size': pageSize,
                'cursor': cursor,
                'ids': ids,
                'options': options,
                'props': props,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection, properties or object is not found.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Add object
     * Adds an object to a collection. The request must include all the non-nullable properties, as defined by the [collection schema](/api/operations/list-collection-properties).
     *
     * The role performing this operation must have both of the following:
     * - The `CapDataWriter` capability.
     * - At least one allowing policy and no denying policies for the `write` operation for each of the collection properties
     * provided in the call.
     *
     * See [identity and access management](/data-security/identity-and-access-management) for more information about how
     * capabilities are used to control access to operations and policies are used to control access to data.
     * @param collection The name of the collection to add the object to.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody The object details.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @param expirationSecs Object expiration time in seconds, cannot be set to 0. If not set, the default value is used. See the `PVAULT_EXPIRATION_ASSOCIATED_OBJECTS` and `PVAULT_EXPIRATION_UNASSOCIATED_OBJECTS` environment variables.
     * @returns ObjectID The request is successful.
     * @throws ApiError
     */
    public static addObject(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: Object,
        adhocReason?: string,
        reloadCache?: boolean,
        expirationSecs?: string,
    ): CancelablePromise<ObjectID> {
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
                'expiration_secs': expirationSecs,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection or properties is not found.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Update object
     * Updates properties of an object in a collection.
     *
     * The role performing this operation must have both of the following:
     * - The `CapDataWriter` capability.
     * - At least one allowing policy and no denying policies for the `write` operation for each of the collection properties
     * specified in the call.
     *
     * See [identity and access management](/data-security/identity-and-access-management) for more information about how
     * capabilities are used to control access to operations and policies are used to control access to data.
     *
     * @param collection The name of the collection containing the object.
     * @param ids A comma-separated list of object IDs
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody The object properties to update.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @param expirationSecs Object expiration time in seconds. If not set, the default is used. See the `PVAULT_EXPIRATION_ASSOCIATED_OBJECTS` and `PVAULT_EXPIRATION_UNASSOCIATED_OBJECTS` environment variables.
     * @param options Options for the operation. Options include:
     * - `archived` – whether to update only archived objects. If not specified, update only active objects.
     *
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static updateObjectById(
        collection: string,
        ids: Array<string>,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: Object,
        adhocReason?: string,
        reloadCache?: boolean,
        expirationSecs?: string,
        options?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/pvlt/1.0/data/collections/{collection}/objects',
            path: {
                'collection': collection,
            },
            query: {
                'ids': ids,
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
                'expiration_secs': expirationSecs,
                'options': options,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection, properties, or object is not found.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Delete object
     * Deletes an object from a collection. This operation is irreversible.
     *
     * The role performing this operation must have both of the following:
     * - The `CapDataWriter` capability.
     * - At least one allowing policy and no denying policies for the `delete` operation for each of the properties defined for
     * the collection specified in the call.
     *
     *
     * See [identity and access management](/data-security/identity-and-access-management) for more information about how
     * capabilities are used to control access to operations and policies are used to control access to data.
     * @param collection The name of the collection containing the object.
     * @param ids A comma-separated list of object IDs.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param options Options for the operation. Options include:
     * - `archived` – whether to delete only archived objects. If not specified, delete only active objects.
     *
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static deleteObjectById(
        collection: string,
        ids: Array<string>,
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
                'ids': ids,
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
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Get objects property
     * Returns a [paginated list](/api/api-pagination) of the values of a property for objects in a collection.
     *
     * The role performing this operation must have both of the following:
     * - The `CapDataReader` capability.
     * - At least one allowing policy and no denying policies for the `read` operation for the property and the and the
     * collection requested in the call.
     *
     * See [identity and access management](/data-security/identity-and-access-management) for more information about how
     * capabilities are used to control access to operations and policies are used to control access to data.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param collection The name of the collection containing the objects.
     * @param property The required property.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @param pageSize The maximum number of items to return in this request. If not specified, the default value is used. The default value is the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`. The value must not exceed the value specified in the environment variable `PVAULT_SERVICE_DEFAULT_PAGE_SIZE`
     * @param cursor The cursor represents the state of consecutive queries for the same request parameters. In the first call, the cursor may be omitted or specified as an empty string. In consecutive calls, it should be set to the value of the cursor field of the objectFieldsPage returned by the previous call. Note: when the `id` is specified, paging is not supported. In this case, if the number of `id` values specified exceeds the maximum page size, the method returns 400 (BAD REQUEST).
     * @param xTransParam Extra parameter to pass on to the transformations.
     * @param options Options for the operation. Options include:
     * - `archived` – whether to get only archived objects. If not specified, get only active objects.
     *
     * @param ids A comma-separated list of object IDs
     * @returns ObjectFieldsPage The request is successful.
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
        xTransParam?: string,
        options?: Array<string>,
        ids?: Array<string>,
    ): CancelablePromise<ObjectFieldsPage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/data/collections/{collection}/properties/{property}',
            path: {
                'collection': collection,
                'property': property,
            },
            headers: {
                'X-Trans-Param': xTransParam,
            },
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
                'page_size': pageSize,
                'cursor': cursor,
                'options': options,
                'ids': ids,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection, properties or object is not found.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Search objects
     * Returns a [paginated list](/api/api-pagination) of objects, with property values, from a collection that satisfies a query.
     *
     * The role performing this operation must have all the following:
     * - The `CapDataSearcher` capability.
     * - Policies:
     * + At least one allowing policy and no denying policies for the `read` operation for each of the collection properties
     * specified in the `props` query parameter.
     * + At least one allowing policy and no denying policies for the `search` operation for each of the collection
     * properties
     * specified in the `query` body parameter.
     *
     * See [identity and access management](/data-security/identity-and-access-management) for more information about how
     * capabilities are used to control access to operations and policies are used to control access to data.
     *
     * **Warning**: Use of the `unsafe` option, to include all object property values, may expose more private information than is required, use with caution..
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
             * @param cursor The cursor represents the state of consecutive queries for the same request parameters. In the first call, the cursor may be omitted or specified as an empty string. In consecutive calls, it should be set to the value of the cursor field of the objectFieldsPage returned by the previous call. Note: when the `id` is specified, paging is not supported. In this case, if the number of `id` values specified exceeds the maximum page size, the method returns 400 (BAD REQUEST).
             * @param xTransParam Extra parameter to pass on to the transformations.
             * @param options Options for the operation. Options include:
             * - `unsafe` – fetch all the properties, cannot be specified with `props`.
             * - `show_builtins` – show built-in properties, can only be specified with `unsafe`.
             * - `archived` – whether to search only archived objects. If not specified, search only active objects.
             *
             * @param props The list of property names and transformations. To include multiple names and transformation bindings, provide a comma-separated list. For example, `props=first_name,last_name`. If the `unsafe` option is used, must be empty.
             * @returns ObjectFieldsPage The request is successful.
             * @throws ApiError
             */
            public static searchObjects(
                collection: string,
                reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
                requestBody: Query,
                adhocReason?: string,
                reloadCache?: boolean,
                pageSize?: number,
                cursor?: string,
                xTransParam?: string,
                options?: Array<string>,
                props?: Array<string>,
            ): CancelablePromise<ObjectFieldsPage> {
                return __request(OpenAPI, {
                    method: 'POST',
                    url: '/api/pvlt/1.0/data/collections/{collection}/query/objects',
                    path: {
                        'collection': collection,
                    },
                    headers: {
                        'X-Trans-Param': xTransParam,
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
                        404: `The collection or properties is not found.`,
                        409: `A conflict occurs.`,
                        500: `An error occurs on the server.`,
                        503: `The service is unavailable.`,
                    },
                });
            }

        }
