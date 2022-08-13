import { TruckConstructor, TruckTrailersEnum } from '../interfaces';
import Base from './base';

export default class Truck extends Base {
  public readonly compatibleTrailers: TruckTrailersEnum[];

  constructor({
    year,
    brand,
    model,
    price,
    compatibleTrailers,
  }: TruckConstructor) {
    super({
      year,
      brand,
      model,
      price,
    });

    this.compatibleTrailers = compatibleTrailers;
  }
}
