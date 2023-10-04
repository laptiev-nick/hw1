function Human(name, age) {
    this.name = name;
    this.age = age;
}


Human.prototype.showInfo = function () {
    console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
}

function Car(brand, model, productionYear, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.productionYear = productionYear;
    this.licensePlate = licensePlate;
}

Car.prototype.assignOwner = function (person) {
    if (person.age >= 18) {
        this.owner = person;
    }
    else {
        console.log(`
            ${person.name} - is only ${person.age}, 
            he is too young to have a car`
        );
    }
}

Car.prototype.showCarInfo = function (person) {
    if (this.owner) {
        this.owner.showInfo();
    }

    console.log(`
        Car brand: ${this.brand}
        Car model: ${this.model}
        Car production year: ${this.productionYear}
        Car licensePlate: ${this.licensePlate}
    `);
}

const person1 = new Human('Nick', 17);
const person2 = new Human('Alex', 18);
const person3 = new Human('Rita', 19);

const car1 = new Car('Mazda', 'CX-9', '2023', 'AA2892UK');
const car2 = new Car('Hyundai', 'Tucson', '2016', 'AA209OOP');
const car3 = new Car('Opel', 'Vectra', '2003', 'AA8978IN');


car1.assignOwner(person1);
car1.showCarInfo();
car2.assignOwner(person2);
car2.showCarInfo();
car3.assignOwner(person3);
car3.showCarInfo();
