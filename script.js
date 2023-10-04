class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Flat {
    flatmates = [];
    
    addInhabitant(person) {
        this.flatmates.push(person);
    }
}

class House {

    constructor(maxFlatsAmount) {
        this.flats = []
        this.maxFlatsAmount = maxFlatsAmount;
    }

    addFlat(flat) {
        if (this.flats.length < this.maxFlatsAmount) {
            this.flats.push(flat);
            console.log('The flat was added!');
        }
        else {
            console.log('Maximum count of flats is achieved');
        }
    } 
}

const person1 = new Person('Nick', 'male');
const person2 = new Person('Sasha', 'female');
const person3 = new Person('Pasha', 'male');

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();

flat1.addInhabitant(person1);
flat2.addInhabitant(person2);
flat3.addInhabitant(person3);

const house1 = new House(3);
house1.addFlat(flat1);
house1.addFlat(flat2);
house1.addFlat(flat3);

console.log(house1);
