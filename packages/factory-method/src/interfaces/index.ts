import { CarConstructor } from './car';
import { TruckConstructor } from './truck';
import { MotorcycleConstructor } from './motorcycle';

export * from './motorcycle';
export * from './base';
export * from './truck';
export * from './car';

export interface FactoryConstructor {
  type: 'car' | 'motorcycle' | 'truck';
  options: CarConstructor | TruckConstructor | MotorcycleConstructor;
}
