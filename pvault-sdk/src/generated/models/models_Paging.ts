/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Pagination information.
 */
export type models_Paging = {
    /**
     * Number of results in the current page.
     */
    size?: number;
    /**
     * The remaining number of objects that can be read in ensuing calls to this method.
     */
    remaining_count?: number;
    /**
     * An opaque string you should provide to get the next page.
     */
    cursor?: string;
};

