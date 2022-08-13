import { BaseConstructor } from "./base";

export enum MotorcycleTypeEnum {
  'off-road',
  'roadster',
  'sport'
}

export interface MotorcycleConstructor extends BaseConstructor {
  type: MotorcycleTypeEnum;
}
