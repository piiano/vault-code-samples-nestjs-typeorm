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
     * @returns models_AllGenerations The request is successful.
     * @throws ApiError
     */
    public static getClusterInfo(): CancelablePromise<models_AllGenerations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/info/cluster',
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
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static rotateKeys(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/system/admin/keys/rotate',
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
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        filter: 'objects_only' | 'tokens_only' | 'all' = 'all',
        dryRun: boolean = false,
        adhocReason?: string,
        reloadCache?: boolean,
    ): CancelablePromise<Array<gc_DeletionCount>> {
        return __request(OpenAPI, {
            method: 'POST',
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
     * @returns void
     * @throws ApiError
     */
    public static triggerError(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/system/debug/error/trigger',
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
     * @returns config_Config The request is successful.
     * @throws ApiError
     */
    public static getConfiguration(): CancelablePromise<config_Config> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/system/info/configuration',
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
     * @returns models_License The request is successful.
     * @throws ApiError
     */
    public static getLicense(): CancelablePromise<models_License> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/system/info/license',
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
     * @returns models_ProductVersion The request is successful.
     * @throws ApiError
     */
    public static getVaultVersion(): CancelablePromise<models_ProductVersion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/system/info/version',
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
     * @returns models_KMSStatus The request is successful.
     * @throws ApiError
     */
    public static getKms(): CancelablePromise<models_KMSStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/system/info/kms',
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
