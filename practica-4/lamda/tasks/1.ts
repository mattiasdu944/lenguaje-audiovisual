type Product = {
    id: number;
    price: number;
    description: string;
};

let products: Product[] = [
    { id: 1, description: 'Smartphone', price: 200 },
    { id: 2, description: 'Laptop', price: 1000 },
    { id: 3, description: 'Mouse', price: 30 },
    { id: 4, description: 'Keyboard', price: 50 },
    { id: 5, description: 'Headphones', price: 45 },
];

let expensiveProducts = products.filter(product => product.price > 50);

let offerLabels = expensiveProducts.map(product => `¡Oferta especial! ${product.description} por solo $${product.price}`);

offerLabels.sort();

console.log(offerLabels);
