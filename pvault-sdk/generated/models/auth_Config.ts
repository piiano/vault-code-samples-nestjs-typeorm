/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { auth_Policy } from './auth_Policy';
import type { auth_Role } from './auth_Role';
import type { auth_User } from './auth_User';

export type auth_Config = {
    policies?: Record<string, auth_Policy>;
    roles?: Record<string, auth_Role>;
    users?: Record<string, auth_User>;
};

