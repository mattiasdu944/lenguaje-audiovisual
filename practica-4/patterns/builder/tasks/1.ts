// class Pizza {
//     size: string;
//     cheese: boolean;
//     pepperoni: boolean;
//     mushrooms: boolean;
//     bacon: boolean;

//     constructor(size: string, cheese: boolean, pepperoni: boolean, mushrooms: boolean, bacon: boolean) {
//         this.size = size;
//         this.cheese = cheese;
//         this.pepperoni = pepperoni;
//         this.mushrooms = mushrooms;
//         this.bacon = bacon;
//     }
// }

// const myPizza = new Pizza('large', true, true, false, true);



class PizzaBuilder {
    private size: string;
    private cheese: boolean;
    private pepperoni: boolean;
    private mushrooms: boolean;
    private bacon: boolean;

    constructor(size: string) {
        this.size = size;
        this.cheese = false;
        this.pepperoni = false;
        this.mushrooms = false;
        this.bacon = false;
    }

    addCheese(): PizzaBuilder {
        this.cheese = true;
        return this;
    }

    addPepperoni(): PizzaBuilder {
        this.pepperoni = true;
        return this;
    }

    addMushrooms(): PizzaBuilder {
        this.mushrooms = true;
        return this;
    }

    addBacon(): PizzaBuilder {
        this.bacon = true;
        return this;
    }

    build(): Pizza {
        return new Pizza(
            this.size,
            this.cheese,
            this.pepperoni,
            this.mushrooms,
            this.bacon
        );
    }
}

class Pizza {
    size: string;
    cheese: boolean;
    pepperoni: boolean;
    mushrooms: boolean;
    bacon: boolean;

    constructor(size: string, cheese: boolean, pepperoni: boolean, mushrooms: boolean, bacon: boolean) {
        this.size = size;
        this.cheese = cheese;
        this.pepperoni = pepperoni;
        this.mushrooms = mushrooms;
        this.bacon = bacon;
    }
}

const myPizza = new PizzaBuilder('large')
    .addCheese()
    .addPepperoni()
    .addBacon()
    .build();
