type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
};

type Order = {
    date: Date;
    products: Product[];
};

let orders: Order[] = [
    {
        date: new Date('2023-05-01'),
        products: [
            { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
            { id: 2, name: 'Smartphone', category: 'Electronics', price: 500 }
        ]
    },
    {
        date: new Date('2023-05-10'),
        products: [
            { id: 3, name: 'Book: TypeScript Basics', category: 'Books', price: 20 },
            { id: 4, name: 'Book: Design Patterns', category: 'Books', price: 35 }
        ]
    },
    {
        date: new Date('2023-06-15'),
        products: [
            { id: 1, name: 'Graphic_card', category: 'Electronics', price: 2500 },
            { id: 2, name: 'Cpu', category: 'Electronics', price: 1500 }
        ]
    },
    
    // ... más órdenes ...
];

// Filtrar productos de la categoría 'Electronics'.
let electronicProducts = orders.flatMap(order => order.products).filter(product => product.category === 'Electronics');

// Calcular el precio total de los productos electrónicos.
let totalElectronicPrice = electronicProducts.reduce((total, product) => total + product.price, 0);

console.log('Productos Electrónicos:', electronicProducts);
console.log('Precio Total de Productos Electrónicos:', totalElectronicPrice);
