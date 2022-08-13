import { MotorcycleConstructor, MotorcycleTypeEnum } from '../interfaces';
import Base from './base';

export default class Motorcycle extends Base {
  public readonly type: MotorcycleTypeEnum;

  constructor({
    year,
    brand,
    model,
    price,
    type,
  }: MotorcycleConstructor) {
    super({
      year,
      brand,
      model,
      price,
    });

    this.type = type;
  }
}
