/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { models_Property } from './models_Property';

export type models_Collection = {
    /**
     * The time when the collection was created in an RFC3339 format.
     */
    readonly creation_time?: string;
    /**
     * The time when the collection was last modified in an RFC3339 format.
     */
    readonly modification_time?: string;
    /**
     * The name of the collection.
     */
    name: string;
    properties?: Array<models_Property>;
    /**
     * The schema prototype the collection is based on.
     */
    type: models_Collection.type;
};

export namespace models_Collection {

    /**
     * The schema prototype the collection is based on.
     */
    export enum type {
        PERSONS = 'PERSONS',
        DATA = 'DATA',
    }


}

