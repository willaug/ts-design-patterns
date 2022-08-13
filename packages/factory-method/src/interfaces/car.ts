import { BaseConstructor } from "./base";

export enum CarTypeEnum {
  'sedan',
  'off-road',
  'hatchback',
  'utilities',
  'sport'
}

export interface CarConstructor extends BaseConstructor {
  type: CarTypeEnum;
  doors: number;
}
