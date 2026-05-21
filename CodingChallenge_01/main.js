// console.log("Hello, World!")
class Vehicle {
    brand;
    model;
    rentalRatePerDay;
    constructor(brand, model, rentalRatePerDay) {
        this.brand = brand;
        this.model = model;
        this.rentalRatePerDay = rentalRatePerDay;
    }
    calculateRentalCost(days) { }
    getDescription() { }
}
class Car extends Vehicle {
    seats;
    constructor(brand, model, rentalRatePerDay, seats) {
        super(brand, model, rentalRatePerDay);
        this.seats = seats;
    }
    calculateRentalCost(days) {
        let totalCost = this.rentalRatePerDay * days;
        return totalCost;
    }
    getDescription() {
        return `${this.brand} ${this.model} (Car)`;
    }
}
class Truck extends Vehicle {
    cargoWeight;
    constructor(brand, model, rentalRatePerDay, cargoWeight) {
        super(brand, model, rentalRatePerDay);
        this.cargoWeight = cargoWeight;
    }
    calculateRentalCost(days) {
        let totalCost = (this.rentalRatePerDay * days) + (this.cargoWeight * 50);
        return totalCost;
    }
    getDescription() {
        return `${this.brand} ${this.model} (Truck)`;
    }
}
class Motorcycle extends Vehicle {
    helmetIncluded;
    constructor(brand, model, rentalRatePerDay, helmetIncluded) {
        super(brand, model, rentalRatePerDay);
        this.helmetIncluded = helmetIncluded;
    }
    calculateRentalCost(days) {
        let totalCost = this.rentalRatePerDay * days;
        if (this.helmetIncluded)
            totalCost += 10;
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
