import { BaseConstructor } from '../interfaces';

export default class Base {
  public readonly year: number;
  public readonly brand: string;
  public readonly model: string;
  public readonly price: number;

  constructor({
    year,
    brand,
    model,
    price,
  }: BaseConstructor) {
    this.year = year;
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
