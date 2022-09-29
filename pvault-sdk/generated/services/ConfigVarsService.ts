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
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static clearAllConfVars(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/pvlt/1.0/system/confvar',
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
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
     * Get configuration variable
     * @param name The name of the configuration variable.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns models_ConfVar The request is successful.
     * @throws ApiError
     */
    public static getConfVar(
        name: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
    ): CancelablePromise<models_ConfVar> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/system/confvar/{name}',
            path: {
                'name': name,
            },
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
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
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody Value of the configuration.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static setConfVar(
        name: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: models_ConfVarValue,
        adhocReason?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/system/confvar/{name}',
            path: {
                'name': name,
            },
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
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
