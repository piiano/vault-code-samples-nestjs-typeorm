/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { models_DetokenizedToken } from '../models/models_DetokenizedToken';
import type { models_QueryToken } from '../models/models_QueryToken';
import type { models_RotatedToken } from '../models/models_RotatedToken';
import type { models_TokenizeRequest } from '../models/models_TokenizeRequest';
import type { models_TokenMetadata } from '../models/models_TokenMetadata';
import type { models_TokenValue } from '../models/models_TokenValue';
import type { models_UpdateTokenRequest } from '../models/models_UpdateTokenRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TokensService {

    /**
     * Search tokens
     * @param collection The name of the collection containing the object.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody The query. This is a JSON object consisting of query filters.
     * @param options Options for the operation. Options include:
     * - `deleted` – get only deleted tokens.
     *
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns models_TokenMetadata The request is successful.
     * @throws ApiError
     */
    public static searchTokens(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: models_QueryToken,
        options?: Array<string>,
        adhocReason?: string,
        reloadCache?: boolean,
    ): CancelablePromise<Array<models_TokenMetadata>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/data/collections/{collection}/query/tokens',
            path: {
                'collection': collection,
            },
            query: {
                'options': options,
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection, token, or referenced object or property was not found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Delete tokens
     * @param collection The name of the collection containing the object.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param objectId Comma-separated list of object IDs.
     * @param tag Comma-separated list of tags.
     * @param tokenId Comma-separated list of token IDs.
     * @param options Options for the operation. Options include:
     * - `hard_delete` – permanently delete the tokens.
     * - `deleted` – remove only deleted tokens, requires `hard_delete` to be specified.
     *
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static deleteTokens(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        objectId?: Array<string>,
        tag?: Array<string>,
        tokenId?: Array<string>,
        options?: Array<string>,
        adhocReason?: string,
        reloadCache?: boolean,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/pvlt/1.0/data/collections/{collection}/tokens',
            path: {
                'collection': collection,
            },
            query: {
                'object_id': objectId,
                'tag': tag,
                'token_id': tokenId,
                'options': options,
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection or token isn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Detokenize tokens
     * @param collection The name of the collection containing the object.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param objectId Comma-separated list of object IDs.
     * @param options Comma-separated list of options.
     * @param tag Comma-separated list of tags.
     * @param tokenId Comma-separated list of token IDs.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns models_DetokenizedToken The request is successful.
     * @throws ApiError
     */
    public static detokenize(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        objectId?: Array<string>,
        options?: Array<string>,
        tag?: Array<string>,
        tokenId?: Array<string>,
        adhocReason?: string,
        reloadCache?: boolean,
    ): CancelablePromise<Array<models_DetokenizedToken>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/data/collections/{collection}/tokens',
            path: {
                'collection': collection,
            },
            query: {
                'object_id': objectId,
                'options': options,
                'tag': tag,
                'token_id': tokenId,
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection, properties, referenced objects or token isn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Update tokens
     * @param collection The name of the collection containing the object.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody Update token request details.
     * @param ttl Token time to live (TTL) in seconds. If not set, the token's expiry date is not changed.
     * @param objectId Comma-separated list of object IDs.
     * @param tag Comma-separated list of tags.
     * @param tokenId Comma-separated list of token IDs.
     * @param options Options for the operation. Options include:
     * - `deleted` – update only deleted tokens.
     *
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static updateTokens(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: models_UpdateTokenRequest,
        ttl?: string,
        objectId?: Array<string>,
        tag?: Array<string>,
        tokenId?: Array<string>,
        options?: Array<string>,
        adhocReason?: string,
        reloadCache?: boolean,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/pvlt/1.0/data/collections/{collection}/tokens',
            path: {
                'collection': collection,
            },
            query: {
                'ttl': ttl,
                'object_id': objectId,
                'tag': tag,
                'token_id': tokenId,
                'options': options,
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection, token, or referenced object or property was not found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Tokenize properties of an object data
     * @param collection The name of the collection containing the object.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody Details of the object and property.
     * @param ttl Token time to live (TTL) in seconds. If not set, the default TTL is used. See the `PVAULT_TTL_TOKENS` time to live environment variable.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns models_TokenValue The request is successful.
     * @throws ApiError
     */
    public static tokenize(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: models_TokenizeRequest,
        ttl?: string,
        adhocReason?: string,
        reloadCache?: boolean,
    ): CancelablePromise<Array<models_TokenValue>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/data/collections/{collection}/tokens',
            path: {
                'collection': collection,
            },
            query: {
                'ttl': ttl,
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection, properties or referenced objects isn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Rotate tokens
     * @param tokenId Comma-separated list of token IDs.
     * @param collection The name of the collection containing the object.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns models_RotatedToken The request is successful.
     * @throws ApiError
     */
    public static rotateTokens(
        tokenId: Array<string>,
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
        reloadCache?: boolean,
    ): CancelablePromise<Array<models_RotatedToken>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/data/collections/{collection}/rotate/tokens',
            path: {
                'collection': collection,
            },
            query: {
                'token_id': tokenId,
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection, token, or referenced object or property was not found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

}
