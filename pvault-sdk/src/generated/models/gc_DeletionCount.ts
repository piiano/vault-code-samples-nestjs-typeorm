/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type gc_DeletionCount = {
    /**
     * The name of the collection containing the objects or tokens to delete.
     */
    collection_name: string;
    /**
     * The type of the collection.
     */
    collection_type: gc_DeletionCount.collection_type;
    /**
     * The number of items deleted.
     */
    count: number;
};

export namespace gc_DeletionCount {

    /**
     * The type of the collection.
     */
    export enum collection_type {
        DATA = 'DATA',
        PERSONS = 'PERSONS',
        TOKENS = 'TOKENS',
    }


}

