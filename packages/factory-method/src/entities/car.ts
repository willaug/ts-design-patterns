import { CarConstructor, CarTypeEnum } from '../interfaces';
import Base from './base';

export default class Car extends Base {
  public readonly doors: number;
  public readonly type: CarTypeEnum;

  constructor({
    year,
    brand,
    doors,
    model,
    price,
    type,
  }: CarConstructor) {
    super({
      year,
      brand,
      model,
      price,
    });

    this.doors = doors;
    this.type = type;
  }
}
