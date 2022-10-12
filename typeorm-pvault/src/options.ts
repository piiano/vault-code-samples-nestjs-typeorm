import { ColumnOptions } from "typeorm";

export interface ExtendedColumnOptions extends ColumnOptions {
  // The constructor of the class. This is only necessary if used inside a nested class
  // of an Entity.
  parent: any;

  // Whether the value should be tokenized or not. Currently only supports 'true'.
  tokenize: boolean;
}
