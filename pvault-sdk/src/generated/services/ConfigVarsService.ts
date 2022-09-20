/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { models_ConfVar } from '../models/models_ConfVar';
import type { models_ConfVarValue } from '../models/models_ConfVarValue';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ConfigVarsService {

    /**
     * Clear configuration variables
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
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Get configuration variable
     * @param name The name of the configuration variable.
     * @returns models_ConfVar The request is successful.
     * @throws ApiError
     */
    public static getConfVar(
        name: string,
    ): CancelablePromise<models_ConfVar> {
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
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Set configuration variable
     * @param name The name of the configuration variable.
     * @param requestBody Value of the configuration.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static setConfVar(
        name: string,
        requestBody: models_ConfVarValue,
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
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

}
