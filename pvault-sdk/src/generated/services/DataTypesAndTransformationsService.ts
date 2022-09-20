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
     * @returns models_TransformationDoc The request is successful.
     * @throws ApiError
     */
    public static listTransformations(): CancelablePromise<Array<models_TransformationDoc>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/transformations',
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
     * @returns piitype_PIIType The request is successful.
     * @throws ApiError
     */
    public static listPropertyTypes(): CancelablePromise<Array<piitype_PIIType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pvlt/1.0/ctl/types',
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
