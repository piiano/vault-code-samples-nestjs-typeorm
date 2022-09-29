/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { config_Config } from '../models/config_Config';
import type { gc_DeletionCount } from '../models/gc_DeletionCount';
import type { models_AllGenerations } from '../models/models_AllGenerations';
import type { models_Health } from '../models/models_Health';
import type { models_KMSStatus } from '../models/models_KMSStatus';
import type { models_License } from '../models/models_License';
import type { models_ProductVersion } from '../models/models_ProductVersion';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SystemService {

    /**
     * Get control service status
     * @returns models_Health The request is successful.
     * @throws ApiError
     */
    public static controlHealth(): CancelablePromise<models_Health> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/info/health',
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
     * Get cluster information
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns models_AllGenerations The request is successful.
     * @throws ApiError
     */
    public static getClusterInfo(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
    ): CancelablePromise<models_AllGenerations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/info/cluster',
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
     * Get data service status
     * @returns models_Health The request is successful.
     * @throws ApiError
     */
    public static dataHealth(): CancelablePromise<models_Health> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/data/info/health',
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
     * Rotate data encryption keys
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static rotateKeys(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/system/admin/keys/rotate',
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
     * Purge expired and soft deleted objects and tokens
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param filter Filter for the GC operation. Options include: `objects_only`,`tokens_only`.
     * @param dryRun Runs dry run GC if set to true.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns gc_DeletionCount The request is successful.
     * @throws ApiError
     */
    public static garbageCollection(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        filter: 'objects_only' | 'tokens_only' | 'all' = 'all',
        dryRun: boolean = false,
        adhocReason?: string,
        reloadCache?: boolean,
    ): CancelablePromise<Array<gc_DeletionCount>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/system/admin/lifecycle/gc',
            query: {
                'filter': filter,
                'dry_run': dryRun,
                'adhoc_reason': adhocReason,
                'reason': reason,
                'reload_cache': reloadCache,
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
     * Trigger an artificial error
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns void
     * @throws ApiError
     */
    public static triggerError(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/system/debug/error/trigger',
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
            },
            errors: {
                400: `The request is invalid.`,
                401: `An error occurred on the server.`,
                403: `An error occurred on the server.`,
                404: `The requested resource is not found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Get system configuration
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns config_Config The request is successful.
     * @throws ApiError
     */
    public static getConfiguration(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
    ): CancelablePromise<config_Config> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/system/info/configuration',
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
     * Get license
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns models_License The request is successful.
     * @throws ApiError
     */
    public static getLicense(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
    ): CancelablePromise<models_License> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/system/info/license',
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
     * Get Vault version
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns models_ProductVersion The request is successful.
     * @throws ApiError
     */
    public static getVaultVersion(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
    ): CancelablePromise<models_ProductVersion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/system/info/version',
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
     * Get KMS status
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns models_KMSStatus The request is successful.
     * @throws ApiError
     */
    public static getKms(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
    ): CancelablePromise<models_KMSStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/system/info/kms',
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

}
