console.log(' ');
console.log('-----Aufgabe-1--------');
console.log(' ');


class Product {
    constructor (name, price){
        this.price = price;
        this.name = name;
    }
    toText(){
        console.log(`${this.name} ${this.price} €. Enthält ${this.price * 0.19} € MwSt. (19%).`);
    }
    containedVAT(){
        console.log(`${this.price * 0.19} € MwSt.`)
    }
};

const trainingsanzug = new Product ("Adidas Trainingsanzug", 150);
const schuhe = new Product ("Puma Laufschuhe", 80);
const socken = new Product ("Sockenset", 5);

console.log(trainingsanzug);
console.log(schuhe);
console.log(socken);

trainingsanzug.toText(); // Adidas Trainingsanzug 150,00 €. Enthält 28,50 € MwSt. (19%).
trainingsanzug.containedVAT(); // 28,50 € MwSt.




console.log(' ');
console.log('-----Aufgabe-2--------');
console.log(' ');


class Cart {
    constructor(){
        this.products = products;
    }

    addProduct(shoppedProduct){
        console.log(shoppedProduct instanceof Product);

    };

};



