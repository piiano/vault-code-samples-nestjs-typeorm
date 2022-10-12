/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { auth_Config } from '../models/auth_Config';
import type { models_APIKey } from '../models/models_APIKey';
import type { models_UserName } from '../models/models_UserName';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IamService {

    /**
     * Get IAM configuration
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
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Set IAM configuration
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
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Regenerate user API key
     * @param requestBody The name of the user to regenerate API key for.
     * @returns models_APIKey The request is successful.
     * @throws ApiError
     */
    public static regenerateUserApiKey(
        requestBody: models_UserName,
    ): CancelablePromise<models_APIKey> {
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
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

}
