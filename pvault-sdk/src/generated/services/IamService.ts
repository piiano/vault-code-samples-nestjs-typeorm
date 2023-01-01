/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { APIKey } from '../models/APIKey';
import type { auth_Config } from '../models/auth_Config';
import type { UserName } from '../models/UserName';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IamService {

    /**
     * Get IAM configuration
     * Gets the identity and access management (IAM) configuration in TOML format.
     *
     * The role that performs this operation must have the `CapIAMReader` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     * @returns auth_Config The request is successful.
     * @throws ApiError
     */
    public static getIamConf(): CancelablePromise<auth_Config> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/iam/conf',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The requested resource is not found.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Set IAM configuration
     * Sets the identity and access management (IAM) configuration.
     *
     * The role that performs this operation must have the `CapIAMWriter` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     * @param requestBody IAM configuration in TOML format.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static setIamConf(
        requestBody: auth_Config,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/ctl/iam/conf',
            body: requestBody,
            mediaType: 'application/toml',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The requested resource is not found.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Regenerate user API key
     * Regenerates a user's API key. The existing API key is invalidated. This operation is irreversible.
     *
     * The role that performs this operation must have the `CapIAMWriter` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     * @param requestBody The name of the user to regenerate API key for.
     * @returns APIKey The request is successful.
     * @throws ApiError
     */
    public static regenerateUserApiKey(
        requestBody: UserName,
    ): CancelablePromise<APIKey> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/ctl/iam/user/regen',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The user is not found.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

}
