import { Injectable } from '@nestjs/common';
import {
  Entity,
  EntityManager,
  EntityRepository,
  FindManyOptions,
  Repository,
} from 'typeorm';

@pvaultTokenizeAll
export class PvaultRepository<T> extends Repository<T> {
  constructor(manager: any, metadata: any, queryRunner: any) {
    super();
    this.manager = manager;
    this.metadata = metadata;
    this.queryRunner = queryRunner;
  }
  readonly manager: any;
  readonly metadata: any;
  readonly queryRunner: any;
}

export function PvaultWrapper<T>(inp: Repository<T>): PvaultRepository<T> {
  return new PvaultRepository<T>(inp.manager, inp.metadata, inp.queryRunner);
}

function pvaultTokenizeAll(target: Function) {
  let descriptors = Object.getOwnPropertyDescriptors(target.prototype);

  const base = Object.getPrototypeOf(target);
  const baseDescriptors = Object.getOwnPropertyDescriptors(base.prototype);
  descriptors = { ...baseDescriptors, ...descriptors };

  for (const [propName, descriptor] of Object.entries(descriptors)) {
    const isMethod =
      typeof descriptor.value == 'function' && propName != 'constructor';
    if (!isMethod) continue;

    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log('The method args are: ' + JSON.stringify(args));
      const result = originalMethod.apply(this, args);
      return result;
    };

    Object.defineProperty(target.prototype, propName, descriptor);
  }
}
