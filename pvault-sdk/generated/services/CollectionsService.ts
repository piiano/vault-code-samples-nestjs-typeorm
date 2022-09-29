/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { models_Collection } from '../models/models_Collection';
import type { models_Property } from '../models/models_Property';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CollectionsService {

    /**
     * List collections
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param format When set to `pvschema`, returns the collections in the PVSchema format. Otherwise, returns the JSON format.
     * @param options Options for the operation. Options include:
     * - `hide_builtins` – hide built-in properties from response.
     *
     * @returns models_Collection The request is successful.
     * @throws ApiError
     */
    public static getAllCollections(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
        format?: 'pvschema',
        options?: Array<'hide_builtins'>,
    ): CancelablePromise<Array<models_Collection>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/collections',
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
                'format': format,
                'options': options,
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
     * Add collection
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody Details of the collection including its properties.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param format When set to `pvschema`, returns the added collection in the PVSchema format. Otherwise, returns the JSON format.
     * @param options Options for the operation. Options include:
     * - `hide_builtins` – hide built-in properties from response.
     *
     * @returns models_Collection The request is successful.
     * @throws ApiError
     */
    public static addCollection(
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: models_Collection,
        adhocReason?: string,
        format?: 'pvschema',
        options?: Array<'hide_builtins'>,
    ): CancelablePromise<models_Collection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/ctl/collections',
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
                'format': format,
                'options': options,
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

    /**
     * Delete collection
     * @param collection The name of the collection.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static deleteCollection(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/pvlt/1.0/ctl/collections/{collection}',
            path: {
                'collection': collection,
            },
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection is not found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Get collection details
     * @param collection The name of the collection.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param format When set to `pvschema`, returns the collection in the PVSchema format. Otherwise, returns the JSON format.
     * @param options Options for the operation. Options include:
     * - `hide_builtins` – hide built-in properties from response.
     *
     * @returns models_Collection The request is successful.
     * @throws ApiError
     */
    public static getCollection(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
        format?: 'pvschema',
        options?: Array<'hide_builtins'>,
    ): CancelablePromise<models_Collection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/collections/{collection}',
            path: {
                'collection': collection,
            },
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
                'format': format,
                'options': options,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection isn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Update collection details
     * @param collection The name of the collection to import the properties to.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody Details of the collection including its properties.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param format When set to `pvschema`, returns the updated collection in the PVSchema format. Otherwise, returns the JSON format.
     * @param options Options for the operation. Options include:
     * - `hide_builtins` – hide built-in properties from response.
     *
     * @returns models_Collection The request is successful.
     * @throws ApiError
     */
    public static updateCollection(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: models_Collection,
        adhocReason?: string,
        format?: 'pvschema',
        options?: Array<'hide_builtins'>,
    ): CancelablePromise<models_Collection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/pvlt/1.0/ctl/collections/{collection}',
            path: {
                'collection': collection,
            },
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
                'format': format,
                'options': options,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection isn't found.`,
                500: `An error occurred on the server.`,
                501: `Not implemented.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * List collection properties
     * @param collection The name of the collection containing the properties.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @param options Options for the operation. Options include:
     * - `hide_builtins` – hide built-in properties from response.
     *
     * @returns models_Property The request is successful.
     * @throws ApiError
     */
    public static listCollectionProperties(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
        options?: Array<'hide_builtins'>,
    ): CancelablePromise<Array<models_Property>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/collections/{collection}/properties',
            path: {
                'collection': collection,
            },
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
                'options': options,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection isn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Delete collection property
     * @param collection The name of the collection containing the property.
     * @param property The name of the property.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns any The request is successful.
     * @throws ApiError
     */
    public static deleteCollectionProperty(
        collection: string,
        property: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        adhocReason?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/pvlt/1.0/ctl/collections/{collection}/properties/{property}',
            path: {
                'collection': collection,
                'property': property,
            },
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection or property wasn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Get collection property
     * @param collection The ID of the collection containing the property.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param property The name of the property.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns models_Property The request is successful.
     * @throws ApiError
     */
    public static getCollectionProperty(
        collection: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        property: string,
        adhocReason?: string,
    ): CancelablePromise<models_Property> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/collections/{collection}/properties/{property}',
            path: {
                'collection': collection,
                'property': property,
            },
            query: {
                'adhoc_reason': adhocReason,
                'reason': reason,
            },
            errors: {
                400: `The request is invalid.`,
                401: `Authentication credentials are incorrect or missing.`,
                403: `The caller doesn't have the required access rights.`,
                404: `The collection or property wasn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Modify collection property
     * @param collection The name of the collection containing the property.
     * @param property The name of the property.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody property info
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns any Property updated successfully
     * @throws ApiError
     */
    public static updateCollectionProperty(
        collection: string,
        property: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: models_Property,
        adhocReason?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/pvlt/1.0/ctl/collections/{collection}/properties/{property}',
            path: {
                'collection': collection,
                'property': property,
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
                404: `The collection or property wasn't found.`,
                500: `An error occurred on the server.`,
                501: `Not implemented.`,
                503: `The service is unavailable.`,
            },
        });
    }

    /**
     * Add collection property
     * @param collection The name of the collection to add the property to.
     * @param property The name of the property to add.
     * @param reason Details of the reason for requesting the property. The default is set when no access reason is provided and PVAULT_SERVICE_FORCE_ACCESS_REASON is false.
     * @param requestBody Details of the property.
     * @param adhocReason An ad-hoc reason for accessing the Vault data.
     * @returns models_Property The request is successful.
     * @throws ApiError
     */
    public static addCollectionProperty(
        collection: string,
        property: string,
        reason: 'AppFunctionality' | 'Analytics' | 'Personalization' | 'DevelopersAdvertisingOrMarketing' | 'ThirdPartyAdvertising' | 'FraudPreventionSecurityAndCompliance' | 'AccountManagement' | 'Maintenance' | 'DataSubjectRequest' | 'Other',
        requestBody: models_Property,
        adhocReason?: string,
    ): CancelablePromise<models_Property> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pvlt/1.0/ctl/collections/{collection}/properties/{property}',
            path: {
                'collection': collection,
                'property': property,
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
                404: `The collection isn't found.`,
                500: `An error occurred on the server.`,
                503: `The service is unavailable.`,
            },
        });
    }

}
