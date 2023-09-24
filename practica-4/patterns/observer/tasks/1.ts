// class Journalist {
//     name: string;
//     articles: string[] = [];

//     constructor(name: string) {
//         this.name = name;
//     }

//     publishArticle(article: string) {
//         this.articles.push(article);
//         console.log(`El periodista ${this.name} ha publicado: ${article}`);
//     }
// }

// class Reader {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     checkForNewArticles(journalist: Journalist) {
//         const latestArticle = journalist.articles[journalist.articles.length - 1];
//         console.log(`${this.name} ha leído el artículo: ${latestArticle}`);
//     }
// }

// const journalistA = new Journalist('Juan');
// const readerB = new Reader('Ana');

// journalistA.publishArticle("Los beneficios de la programación");
// readerB.checkForNewArticles(journalistA);

// Observer interface
interface Observer {
    update(article: string): void;
}

// Subject (Observable) interface
interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(article: string): void;
}

class Journalist implements Subject {
    name: string;
    articles: string[] = [];
    private observers: Observer[] = [];

    constructor(name: string) {
        this.name = name;
    }

    publishArticle(article: string) {
        this.articles.push(article);
        console.log(`El periodista ${this.name} ha publicado: ${article}`);
        this.notifyObservers(article); // Notificar a los observadores cuando se publica un artículo.
    }

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(article: string) {
        for (const observer of this.observers) {
            observer.update(article);
        }
    }
}

class Reader implements Observer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(article: string) {
        console.log(`${this.name} ha leído el artículo: ${article}`);
    }
}

const journalistA = new Journalist('Juan');
const readerB = new Reader('Ana');

journalistA.addObserver(readerB); // El lector Ana se suscribe al periodista Juan.

journalistA.publishArticle("Los beneficios de la programación");
