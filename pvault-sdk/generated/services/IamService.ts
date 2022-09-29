/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { auth_Config } from '../models/auth_Config';
import type { models_UserName } from '../models/models_UserName';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IamService {

    /**
     * Get IAM configuration
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns auth_Config The request is successful.
     * @throws ApiError
     */
    public static getIamConf(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
    ): CancelablePromise<auth_Config> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/iam/conf',
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
     * Set IAM configuration
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody IAM configuration in TOML format.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static setIamConf(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: auth_Config,
        adhocReason?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/ctl/iam/conf',
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
            },
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
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody The name of the user to regenerate API key for.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static regenerateUserApiKey(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: models_UserName,
        adhocReason?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/ctl/iam/user/regen',
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
                404: `The user is not found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

}
