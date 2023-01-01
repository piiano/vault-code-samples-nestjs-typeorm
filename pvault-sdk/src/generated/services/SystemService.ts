/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllGenerations } from '../models/AllGenerations';
import type { config_Config } from '../models/config_Config';
import type { gc_DeletionCount } from '../models/gc_DeletionCount';
import type { Health } from '../models/Health';
import type { KMSStatus } from '../models/KMSStatus';
import type { License } from '../models/License';
import type { ProductVersion } from '../models/ProductVersion';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SystemService {

    /**
     * Get data service health/status
     * Gets the status of the service.
     *
     * The status codes returned follow the IETF standard [Health Check Response Format for HTTP APIs](https://datatracker.ietf.org/doc/html/draft-inadarei-api-health-check-05). For example, `pass` is returned when the service is up.
     *
     * The role performing this operation must have the `CapDataReader` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     * @returns Health The request is successful.
     * @throws ApiError
     */
    public static dataHealth(): CancelablePromise<Health> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/data/info/health',
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
     * Get control service health/status
     * Gets the status of the service.
     *
     * The status codes returned follow the IETF standard [Health Check Response Format for HTTP APIs](https://datatracker.ietf.org/doc/html/draft-inadarei-api-health-check-05). For example, `pass` is returned when the service is up.
     * @returns Health The request is successful.
     * @throws ApiError
     */
    public static controlHealth(): CancelablePromise<Health> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/info/health',
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
     * Get cluster information
     * Get Cluster Information.
     *
     * Returns the vault's generation and the generations of all the workers (data servers).
     *
     * The role that performs this operation must have the `CapClusterInfoReader` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     * @returns AllGenerations The request is successful.
     * @throws ApiError
     */
    public static getClusterInfo(): CancelablePromise<AllGenerations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/info/cluster',
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
     * Delete objects and tokens
     * Deletes archived objects and tokens that have been archived for longer than the retention period.
     *
     * See [Object life cycle](/data-privacy/object-lifecycle) for more information on how objects and tokens are archived and how deletion is affected by the retention period.
     *
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param filter Whether to delete objects, tokens, or both. Options are:
     * - `objects_only` – delete only objects.
     * - `tokens_only` – delete only tokens.
     * If not set, the default is both.
     *
     * @param dryRun Whether to respond with how many objects and tokens are available for deletion, without deleting them.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param reloadCache Reloads the cache before the action.
     * @returns gc_DeletionCount The request is successful.
     * @throws ApiError
     */
    public static garbageCollection(
        reason: 'AppFunctionality' | 'Analytics' | 'Notifications' | 'Marketing' | 'ThirdPartyMarketing' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        filter?: 'objects_only' | 'tokens_only',
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
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Trigger an artificial error
     * Manually trigger an artificial error for testing purposes.
     *
     * The role that performs this operation must have the `CapErrorWriter` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     * @returns void
     * @throws ApiError
     */
    public static triggerError(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/system/debug/error/trigger',
            errors: {
                400: `The request is invalid.`,
                401: `An error occurs on the server.`,
                403: `An error occurs on the server.`,
                404: `The requested resource is not found.`,
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Get system configuration
     * Get the current active system configuration.
     *
     * The role that performs this operation must have the `CapInfoReader` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
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
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Get license
     * Gets information on the currently used license.
     *
     * The role that performs this operation must have the `CapInfoReader` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     * @returns License The request is successful.
     * @throws ApiError
     */
    public static getLicense(): CancelablePromise<License> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/system/info/license',
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
     * Get Vault version
     * Gets the version of Vault.
     * @returns ProductVersion The request is successful.
     * @throws ApiError
     */
    public static getVaultVersion(): CancelablePromise<ProductVersion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/system/info/version',
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
     * Rotate data encryption keys
     * Rotates all the KMS keys that Vault uses to encrypt properties, tokens, and more.
     *
     * When the keys are rotated, new data is encrypted with the new key. All old keys are retained, so that content encrypted with previous keys can be decipherable.
     *
     * The role that performs this operation must have the `CapKMSWriter` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
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
                409: `A conflict occurs.`,
                500: `An error occurs on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Get KMS status
     * Gets the status of the configured KMS.
     *
     * The role that performs this operation must have the `CapKMSReader` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     * @returns KMSStatus The request is successful.
     * @throws ApiError
     */
    public static getKms(): CancelablePromise<KMSStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/system/info/kms',
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
