/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { models_TransformationDoc } from '../models/models_TransformationDoc';
import type { piitype_PIIType } from '../models/piitype_PIIType';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DataTypesAndTransformationsService {

    /**
     * List transformations
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns models_TransformationDoc The request is successful.
     * @throws ApiError
     */
    public static listTransformations(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
    ): CancelablePromise<Array<models_TransformationDoc>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/transformations',
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
     * List property types
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns piitype_PIIType The request is successful.
     * @throws ApiError
     */
    public static listPropertyTypes(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
    ): CancelablePromise<Array<piitype_PIIType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/types',
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
