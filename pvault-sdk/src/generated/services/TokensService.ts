/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DetokenizedToken } from '../models/DetokenizedToken';
import type { QueryToken } from '../models/QueryToken';
import type { RotatedTokens } from '../models/RotatedTokens';
import type { TokenizeRequest } from '../models/TokenizeRequest';
import type { TokenMetadata } from '../models/TokenMetadata';
import type { TokenValue } from '../models/TokenValue';
import type { UpdateTokenRequest } from '../models/UpdateTokenRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TokensService {

    /**
     * Tokenize
     * Creates tokens that reference the values of objects' properties. The token ID is partially or wholly randomly-generated and, therefore, is not sensitive.
     *
     * The returned token IDs are in the same order as the object IDs in the request. No tokens are created if any object IDs are invalid or not found.
     *
     * If this operation is called for an object ID and properties that have a token:
     * - Any token tags are appended to the existing token.
     * - If an expiration is specified, then the token expiry is updated. If an expiration is not specified, the token expiry is updated if the default settings result in an expiry date after the token's current expiry date.
     *
     * The role performing this operation must have both of these:
     * - The `CapTokensWriter` capability.
     * - At least one allowing policy and no denying policies for the `tokenize` operation for each of the collection properties specified in the call.
     *
     * See [identity and access management](/data-security/identity-and-access-management) for more information about how capabilities are used to control access to operations and policies are used to control access to data.
     *
     * @param collection The name of the collection containing the objects.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody Details of the tokenization request.
     * @param expirationSecs Token expiration time in seconds. If not set, the default expiration time is used. See the `PVAULT_EXPIRATION_TOKENS` variable.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns TokenValue The request is successful.
     * @throws ApiError
     */
    public static tokenize(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: TokenizeRequest,
        expirationSecs?: string,
        adhocReason?: string,
        reloadCache?: boolean,
    ): CancelablePromise<Array<TokenValue>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/data/collections/{collection}/tokens',
            path: {
                'collection': collection,
            },
            query: {
                'expiration_secs': expirationSecs,
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
                404: `The collection, objects, or properties aren't found or are missing.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Detokenize tokens
     * Returns the object property values for tokens.
     *
     * The tokens returned by this operation are defined using three query parameters: `token_ids`, `object_ids`, and `tags`. If the token query includes an invalid or not found token ID, the operation returns a 404 status code. Otherwise, the operation returns an empty response if it finds no matches. See the [Retrieve a token](/guides/tokenize-personal-data/retrieve-a-token) guide for more information about how to match tokens for this operation.
     *
     * The role performing this operation must have all of these:
     * - The `CapTokensDetokenizer` capability.
     * - Policies:
     * + At least one allowing policy and no denying policies for the `detokenize` operation for each of the collection properties that are tokenized by tokens specified in the query.
     * + At least one allowing policy and no denying policies for the `read` operation for each of the collection properties that are tokenized by tokens specified in the query.
     *
     * See [identity and access management](/data-security/identity-and-access-management) for more information about how capabilities are used to control access to operations and policies are used to control access to data.
     *
     * @param collection The name of the collection containing the objects.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param objectIds Comma-separated list of object IDs.
     * @param options Options for the operation. Options include:
     * - `include_metadata` - show token metadata in the response.
     *
     * @param tags Comma-separated list of tags.
     * @param tokenIds Comma-separated list of token IDs.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns DetokenizedToken The request is successful.
     * @throws ApiError
     */
    public static detokenize(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        objectIds?: Array<string>,
        options?: Array<'include_metadata'>,
        tags?: Array<string>,
        tokenIds?: Array<string>,
        adhocReason?: string,
        reloadCache?: boolean,
    ): CancelablePromise<Array<DetokenizedToken>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/data/collections/{collection}/tokens',
            path: {
                'collection': collection,
            },
            query: {
                'object_ids': objectIds,
                'options': options,
                'tags': tags,
                'token_ids': tokenIds,
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection, reason, or tokens aren't found or are missing, \`reason\` is set to \`other\` but no \`adhoc_reason\` is provided, or no token query parameters are provided.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Delete tokens
     * Deletes tokens.
     *
     * The tokens to delete are those that match all the criteria in the `token_ids`, `object_ids`,  and `tags` parameters. If the token query finds no matches, the operation returns a 404 error. See [search tokens](search-tokens) for more details.
     *
     * The role performing this operation must have both of these:
     * - The `CapTokensWriter` capability.
     * - At least one allowing policy and no denying policies for the `delete` operation for the `tokens` resource of the specified collection.
     *
     * See [identity and access management](/data-security/identity-and-access-management) for more information about how capabilities are used to control access to operations and policies are used to control access to data.
     *
     * @param collection The name of the collection containing the objects.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param objectIds Comma-separated list of object IDs.
     * @param tags Comma-separated list of tags.
     * @param tokenIds Comma-separated list of token IDs.
     * @param options Options for the operation. Options include:
     * - `archived` – whether to delete only archived tokens. If not specified, delete only active tokens.
     *
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static deleteTokens(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        objectIds?: Array<string>,
        tags?: Array<string>,
        tokenIds?: Array<string>,
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
                'object_ids': objectIds,
                'tags': tags,
                'token_ids': tokenIds,
                'options': options,
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection or reason aren't found or are missing, the \`reason\` is set to \`other\` but no \`adhoc_reason\` is provided, no token query parameters are provided, or the query finds no matching tokens.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Update tokens
     * Updates `tags` and `expiration` token metadata.
     *
     * The role performing this operation must have both of these:
     * - The `CapTokensWriter` capability.
     * - At least one allowing policy and no denying policies for the `write` operation for the `tokens` resource of the collection specified in the call.
     *
     * See [identity and access management](/data-security/identity-and-access-management) for more information about how capabilities are used to control access to operations and policies are used to control access to data.
     *
     * The tokens returned by this operation are defined using three query parameters: `token_ids`, `object_ids`, and `tags`. If no tokens are matched, status code 404 is returned. See the [Retrieve a token](/guides/tokenize-personal-data/retrieve-a-token) guide for more information about how to match tokens for this operation.
     *
     * @param collection The name of the collection containing the objects.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody Update token request details.
     * @param expirationSecs Expiration time in seconds for the tokens. If not set, the expiry dates of the tokens are not changed.
     * @param objectIds Comma-separated list of object IDs.
     * @param tags Comma-separated list of tags.
     * @param tokenIds Comma-separated list of token IDs.
     * @param options Options for the operation. Options include:
     * - `archived` – whether to update only archived tokens. If not specified, update only active tokens.
     *
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static updateTokens(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: UpdateTokenRequest,
        expirationSecs?: string,
        objectIds?: Array<string>,
        tags?: Array<string>,
        tokenIds?: Array<string>,
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
                'expiration_secs': expirationSecs,
                'object_ids': objectIds,
                'tags': tags,
                'token_ids': tokenIds,
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
                404: `The collection or reason aren't found or are missing, the \`reason\` is set to \`other\` but no \`adhoc_reason\` is provided, no token query parameters are provided, or the query finds no matching tokens.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Rotate tokens
     * Generates new token IDs for a list of tokens.
     *
     * The role performing this operation must have both of these:
     * - The `CapTokensWriter` capability.
     * - At least one allowing policy and no denying policies for the `write` operation for the `tokens` resource of the specified collection.
     *
     * See [identity and access management](/data-security/identity-and-access-management) for more information about how capabilities are used to control access to operations and policies are used to control access to data.
     *
     * @param tokenIds Comma-separated list of token IDs.
     * @param collection The name of the collection containing the objects.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns RotatedTokens The request is successful.
     * @throws ApiError
     */
    public static rotateTokens(
        tokenIds: Array<string>,
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
        reloadCache?: boolean,
    ): CancelablePromise<RotatedTokens> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/data/collections/{collection}/rotate/tokens',
            path: {
                'collection': collection,
            },
            query: {
                'token_ids': tokenIds,
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection, reason, or tokens aren't found or are missing or the \`reason\` is set to \`other\` but no \`adhoc_reason\` is provided.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Search tokens
     * Lists tokens with their metadata.
     *
     * If the token query includes an invalid or not found token ID, the operation returns a 404 error. Otherwise, if no matches are found, the operation returns an empty response.
     *
     * The role performing this operation must have all of these:
     * - The `CapTokensReader` capability.
     * - At least one allowing policy and no denying policies for the `read` operation for the `tokens` resource of the specified collection.
     *
     * See [identity and access management](/data-security/identity-and-access-management) for more information about how capabilities are used to control access to operations and policies are used to control access to data.
     *
     * The tokens returned by this operation are defined using three query parameters: `token_ids`, `object_ids`, and `tags`. If the token query includes an invalid or not found token ID, the operation returns a 404 status code. Otherwise, the operation returns an empty response if it finds no matches. See the [Retrieve a token](/guides/tokenize-personal-data/retrieve-a-token) guide for more information about how to match tokens for this operation.
     *
     *
     * @param collection The name of the collection containing the objects.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody The token query.
     * @param options Options for the operation. Options include:
     * - `archived` – whether to search only archived tokens. If not specified, search only active tokens.
     *
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns TokenMetadata The request is successful.
     * @throws ApiError
     */
    public static searchTokens(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: QueryToken,
        options?: Array<string>,
        adhocReason?: string,
        reloadCache?: boolean,
    ): CancelablePromise<Array<TokenMetadata>> {
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
                404: `The collection, reason, or tokens aren't found or are missing, \`reason\` is set to \`other\` but no \`adhoc_reason\` is provided, or no token query parameters are provided.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

}
