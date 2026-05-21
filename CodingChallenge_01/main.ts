// console.log("Hello, World!")

class Vehicle {
  brand: string;
  model: string;
  rentalRatePerDay: number;

  constructor(brand: string, model: string, rentalRatePerDay: number) {
    this.brand = brand;
    this.model = model;
    this.rentalRatePerDay = rentalRatePerDay;
  }

  calculateRentalCost(days: number) { }
  getDescription() { }
}

class Car extends Vehicle {
  seats: number;

  constructor(brand: string, model: string, rentalRatePerDay: number, seats: number) {
    super(brand, model, rentalRatePerDay);
    this.seats = seats;
  }

  calculateRentalCost(days: number) {
    let totalCost: number = this.rentalRatePerDay * days;
    return totalCost;
  }

  getDescription() {
    return `${this.brand} ${this.model} (Car)`;
  }
}

class Truck extends Vehicle {
  cargoWeight: number;

  constructor(brand: string, model: string, rentalRatePerDay: number, cargoWeight: number) {
    super(brand, model, rentalRatePerDay);
    this.cargoWeight = cargoWeight;
  }

  calculateRentalCost(days: number) {
    let totalCost: number = (this.rentalRatePerDay * days) + (this.cargoWeight * 50); // (160) + (100)
    return totalCost;
  }

  getDescription() {
    return `${this.brand} ${this.model} (Truck)`;
  }
}

class Motorcycle extends Vehicle {
  helmetIncluded: boolean;

  constructor(brand: string, model: string, rentalRatePerDay: number, helmetIncluded: boolean) {
    super(brand, model, rentalRatePerDay);
    this.helmetIncluded = helmetIncluded;
  }

  calculateRentalCost(days: number) {
    let totalCost: number = this.rentalRatePerDay * days;

    if (this.helmetIncluded) totalCost += 10;
    return totalCost;
  }

  getDescription() {
    return `${this.brand} ${this.model} (Motorcycle)`;
  }
}

export default function main() {
  const car = new Car("Toyota", "Corolla", 40, 5);
  const truck = new Truck("Volvo", "FH16", 80, 2);
  const moto = new Motorcycle("Yamaha", "R15", 30, true);

  console.log(car.getDescription() + " - Total Cost: $" + car.calculateRentalCost(3));
  console.log(truck.getDescription() + " - Total Cost: $" + truck.calculateRentalCost(2));
  console.log(moto.getDescription() + " - Total Cost: $" + moto.calculateRentalCost(1));
}

main();