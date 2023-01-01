/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfVar } from '../models/ConfVar';
import type { ConfVarValue } from '../models/ConfVarValue';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ConfigVarsService {

    /**
     * Clear configuration variables
     * Clears all dynamic configuration variables.
     *
     * The role performing this operation must have the `CapConfvarWriter` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static clearAllConfVars(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/pvlt/1.0/system/confvar',
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
     * Get configuration variable
     * Gets a dynamic configuration variable by name. The names of the variables that may be obtained are:
     *
     * - `log_level`
     *
     * The role that performs this operation must have the `CapConfvarReader` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     * @param name The name of the configuration variable.
     * @returns ConfVar The request is successful.
     * @throws ApiError
     */
    public static getConfVar(
        name: string,
    ): CancelablePromise<ConfVar> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/system/confvar/{name}',
            path: {
                'name': name,
            },
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
     * Set configuration variable
     * Sets a dynamic configuration variable by name. The names of the variables that may be set are:
     *
     * - `log_level` which can take the values of `debug`, `info`, `warn`, and `error`.
     *
     * The role that performs this operation must have the `CapConfvarWriter` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     * @param name The name of the configuration variable.
     * @param requestBody Value of the configuration.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static setConfVar(
        name: string,
        requestBody: ConfVarValue,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/system/confvar/{name}',
            path: {
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
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

}
