/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { config_GC } from './config_GC';
import type { config_Migration } from './config_Migration';

export type config_DB = {
    conn_max_lifetime_minutes?: number;
    gc?: config_GC;
    hostname?: string;
    max_idle_conns?: number;
    max_open_conns?: number;
    migration?: config_Migration;
    name?: string;
    password?: string;
    port?: number;
    require_tls?: boolean;
    user?: string;
};

