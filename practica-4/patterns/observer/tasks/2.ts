// class Auction {
//     item: string;
//     currentBid: number = 0;
//     highestBidder: string | null = null;

//     constructor(item: string) {
//         this.item = item;
//     }

//     makeBid(bidderName: string, amount: number) {
//         if (amount > this.currentBid) {
//             this.currentBid = amount;
//             this.highestBidder = bidderName;
//             console.log(`${bidderName} es el máximo postor con una oferta de ${amount}`);
//         } else {
//             console.log(`${bidderName}, tu oferta es demasiado baja.`);
//         }
//     }
// }

// const auctionItem = new Auction("Cuadro famoso");
// auctionItem.makeBid("Carlos", 500);
// auctionItem.makeBid("Ana", 450);


// Definimos la interfaz del observador
interface BidderObserver {
    update(bidderName: string, amount: number): void;
}

// Clase de la subasta que actúa como el sujeto observado
class Auction {
    item: string;
    currentBid: number = 0;
    highestBidder: string | null = null;
    private observers: BidderObserver[] = [];

    constructor(item: string) {
        this.item = item;
    }

    // Método para registrar observadores
    addObserver(observer: BidderObserver) {
        this.observers.push(observer);
    }

    // Método para eliminar observadores
    removeObserver(observer: BidderObserver) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    // Método para notificar a todos los observadores
    private notifyObservers(bidderName: string, amount: number) {
        for (const observer of this.observers) {
            observer.update(bidderName, amount);
        }
    }

    makeBid(bidderName: string, amount: number) {
        if (amount > this.currentBid) {
            this.currentBid = amount;
            this.highestBidder = bidderName;
            console.log(`${bidderName} es el máximo postor con una oferta de ${amount}`);
            // Notificamos a los observadores cuando se realiza una oferta exitosa
            this.notifyObservers(bidderName, amount);
        } else {
            console.log(`${bidderName}, tu oferta es demasiado baja.`);
        }
    }
}

// Implementación de observador concreto
class Bidder implements BidderObserver {
    constructor(private name: string) {}

    update(bidderName: string, amount: number) {
        if (bidderName === this.name) {
            console.log(`¡Soy ${this.name} y he realizado una oferta de ${amount}!`);
        } else {
            console.log(`¡${this.name} ha superado mi oferta con ${amount}!`);
        }
    }
}

// Uso del Observer Pattern
const auctionItem = new Auction("Cuadro famoso");

const carlos = new Bidder("Carlos");
const ana = new Bidder("Ana");

auctionItem.addObserver(carlos);
auctionItem.addObserver(ana);

auctionItem.makeBid("Carlos", 500);
auctionItem.makeBid("Ana", 450);
