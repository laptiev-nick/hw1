const SIZE_SMALL = 'small';
const SIZE_LARGE = 'large';
const STUFFING_CHEESE = 'cheese';
const STUFFING_SALAD = 'salad';
const STUFFING_POTATO = 'potato';
const TOPPING_SPICE = 'spice';
const TOPPING_MAYO = 'mayo';

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    // Add topping to Hamburger
    addTopping(topping) {
        this.toppings.push(topping);
    }

    // Hamburger callories calculate
    calculateCalories() {
        let calories = 0;

        // add callories for Size
        calories += (this.size === SIZE_SMALL) ? 20 : 40;

        // add callories for Filling (staffing)
        switch (this.stuffing) {
            case STUFFING_CHEESE:
                calories += 20;
                break;
            case STUFFING_SALAD:
                calories += 5;
                break;
            case STUFFING_POTATO:
                calories += 10;
                break;
            default:
                break;
        }

        // Add callories for Toppings
        this.toppings.forEach(topping => {
            switch (topping) {
                case TOPPING_SPICE:
                    break; // Topping without callories
                case TOPPING_MAYO:
                    calories += 5;
                    break;
                default:
                    break;
            }
        });

        return calories;
    }

    // calc Hamburger price
    calculatePrice() {
        let price = 0;

        // Add cost for Size
        price += (this.size === SIZE_SMALL) ? 50 : 100;

        // Add cost for Stuffing
        switch (this.stuffing) {
            case STUFFING_CHEESE:
                price += 10;
                break;
            case STUFFING_SALAD:
                price += 20;
                break;
            case STUFFING_POTATO:
                price += 15;
                break;
            default:
                break;
        }

        // Add cost for toppings
        this.toppings.forEach(topping => {
            switch (topping) {
                case TOPPING_SPICE:
                    price += 15;
                    break;
                case TOPPING_MAYO:
                    price += 20;
                    break;
                default:
                    break;
            }
        });

        return price;
    }
}

var hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);
hamburger.addTopping(TOPPING_MAYO);

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(TOPPING_SPICE);

console.log("Price with spice: " + hamburger.calculatePrice());