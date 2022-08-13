import {
  CarConstructor,
  TruckConstructor,
  FactoryConstructor,
  MotorcycleConstructor,
} from './interfaces';

import Motorcycle from './entities/motorcycle';
import Truck from './entities/truck';
import Car from './entities/car';

export default class Factory {
  public readonly type: FactoryConstructor['type'];
  public readonly options: FactoryConstructor['options'];

  constructor({ options, type }: FactoryConstructor) {
    this.type = type;
    this.options = options;
  }

  public create(): FactoryConstructor['options'] {
    this.validateType();

    if (this.type === 'car') return new Car(this.options as CarConstructor);
    if (this.type === 'truck') return new Truck(this.options as TruckConstructor);

    return new Motorcycle(this.options as MotorcycleConstructor);
  }

  private validateType(): void {
    const validTypes = ['car', 'motorcycle', 'truck'];

    if (!validTypes.includes(this.type)) {
      throw new Error(`${this.type} is invalid type!`);
    }
  }
}
