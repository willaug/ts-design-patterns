import { BaseConstructor } from "./base";

export enum TruckTrailersEnum {
  'fuel-tank',
  'silo',
  'refrigerated',
  'insulated'
}

export interface TruckConstructor extends BaseConstructor {
  compatibleTrailers: TruckTrailersEnum[];
}
