/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PIIType } from '../models/PIIType';
import type { Transformation } from '../models/Transformation';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DataTypesAndTransformationsService {

    /**
     * List transformations
     * Lists the transformations in a collection. See Manage transformations for more information.
     *
     * The role that performs this operation must have the `CapSchemaReader` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     * @returns Transformation The request is successful.
     * @throws ApiError
     */
    public static listTransformations(): CancelablePromise<Array<Transformation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/transformations',
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
     * List property types
     * Lists the Vault property types.
     *
     * See Data types for more information.
     *
     * The role that performs this operation must have the `CapSchemaReader` capability.
     * See [Access control](/data-security/identity-and-access-management#access-control) for more information about how
     * capabilities are used to control access to operations.
     * @returns PIIType The request is successful.
     * @throws ApiError
     */
    public static listDataTypes(): CancelablePromise<Array<PIIType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/types',
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
