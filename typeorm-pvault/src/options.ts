import { ColumnOptions } from "typeorm";

export interface ExtendedColumnOptions extends ColumnOptions {
  tokenize: boolean;
}
