import Factory from '../src';

describe('FactoryMethod Suit', () => {
  it('Should be able to create a new car and return as expected', () => {
    const type = 'car';
    const options: any = {
      year: 2018,
      price: 'U$ 16,000',
      model: 'Fusion',
      brand: 'Ford',
      type: 'sedan',
      doors: 4,
    };

    const vehicleFactory = new Factory({ options, type });
    const createdVehicle = vehicleFactory.create();

    expect({ ...createdVehicle }).toStrictEqual(options);
  });

  it('Should be able to create a new motorcycle and return as expected', () => {
    const type = 'motorcycle';
    const options: any = {
      year: 2021,
      price: 'U$ 3,000',
      model: 'Scooter',
      brand: 'Honda',
      type: 'roadster',
    };

    const vehicleFactory = new Factory({ options, type });
    const createdVehicle = vehicleFactory.create();

    expect({ ...createdVehicle }).toStrictEqual(options);
  });

  it('Should be able to create a new truck and return as expected', () => {
    const type = 'truck';
    const options: any = {
      year: 2022,
      price: 'U$ 155,000',
      model: 'AT',
      brand: 'Volvo',
      compatibleTrailers: ['silo', 'refrigerated'],
    };

    const vehicleFactory = new Factory({ options, type });
    const createdVehicle = vehicleFactory.create();

    expect({ ...createdVehicle }).toStrictEqual(options);
  });

  it('Should be able to valid incorrect type and throw an exception', () => {
    const type: any = 'ambulance';
    const options: any = {};

    const vehicleFactory = new Factory({ options, type });
    const result = () => vehicleFactory.create();

    expect(result).toThrow('ambulance is invalid type!');
  });
});
