/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { config_DB } from './config_DB';
import type { config_Features } from './config_Features';
import type { config_KMS } from './config_KMS';
import type { config_Log } from './config_Log';
import type { config_Sentry } from './config_Sentry';
import type { config_Service } from './config_Service';
import type { config_TLS } from './config_TLS';
import type { config_TTL } from './config_TTL';

export type config_Config = {
    db?: config_DB;
    devmode?: boolean;
    features?: config_Features;
    kms?: config_KMS;
    log?: config_Log;
    sentry?: config_Sentry;
    service?: config_Service;
    tls?: config_TLS;
    ttl?: config_TTL;
};

