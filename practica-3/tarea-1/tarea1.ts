import { IErrorLogger, IInfoLogger, IWarningLogger } from "./interfaces";

class Book {
    constructor(
        public title: string,
        public author: string,
        public isLoaded: boolean = false,
        public isAvailable: boolean = true,
        public dueDate: Date | null = null
    ) { }
}

class User {
    constructor(public userID: string, public name: string) { }
}

interface ILoadManager {
    loadBook(book: Book, user: User): void;
    returnBook(book: Book): void;
    calculateFines(book: Book): number;
}

class ConsoleErrorLogger implements IErrorLogger {
    error(message: string): void {
        console.error(`Error: ${message}`);
    }
}

class ConsoleWarningLogger implements IWarningLogger {
    warning(message: string): void {
        console.warn(`Warning: ${message}`);
    }
}

class ConsoleInfoLogger implements IInfoLogger {
    info(message: string): void {
        console.info(`Info: ${message}`);
    }
}


class Library implements ILoadManager {
    private books: Book[] = [];
    private loadBooks: Map<string, User> = new Map();

    constructor(
        private errorLogger: IErrorLogger,
        private warningLogger: IWarningLogger,
        private infoLogger: IInfoLogger
    ) { }

    loadBook(book: Book, user: User): void {
        if (book.isLoaded) {
            console.warn('Book is already loaded');
            return;
        }

        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 7);

        book.isAvailable = false;
        book.dueDate = dueDate;
        this.loadBooks.set(book.title, user);
        book.isLoaded = true;

        console.log(`${user.name} (${user.userID}) has borrowed ${book.title}. Due date: ${dueDate}`);
    }

    returnBook(book: Book): void {
        if (!book.isLoaded) {
            console.warn('Book is not loaded');
            return;
        }

        const user = this.loadBooks.get(book.title);
        if (user) {
            const currentDate = new Date();
            const daysLate = Math.max(0, Math.floor((currentDate.getTime() - book.dueDate!.getTime()) / (1000 * 60 * 60 * 24)));
            const fines = this.calculateFines(book);

            if (fines > 0) {
                console.log(`${book.title} has been returned by ${user.name} (${user.userID}). User info: ${JSON.stringify(user)}. Days late: ${daysLate}. Fines: $${fines}`);
            } else {
                console.log(`${book.title} has been returned by ${user.name} (${user.userID}). User info: ${JSON.stringify(user)}. No fines.`);
            }

            book.isAvailable = true;
            book.isLoaded = false;
            book.dueDate = null;
            this.loadBooks.delete(book.title);
        } else {
            console.warn(`Book with title "${book.title}" has no associated user info.`);
        }
    }

    calculateFines(book: Book): number {
        if (!book.dueDate) {
            return 0;
        }

        const currentDate = new Date();
        const daysLate = Math.max(0, Math.floor((currentDate.getTime() - book.dueDate.getTime()) / (1000 * 60 * 60 * 24)));
        const dailyFine = 1;
        return daysLate * dailyFine;
    }

    addBook(book: Book): void {
        this.infoLogger.info('Beginning book addition operation');
        this.books.push(book);
        this.infoLogger.info('Book added successfully');
    }

    validateBookTitle(book: Book, desiredTitle: string): void {
        if (book.title === desiredTitle) {
            this.infoLogger.info(`The book "${book.title}" has the correct title.`);
        } else {
            this.errorLogger.error(`The book "${book.title}" does not have the correct title.`);
        }
    }

    findBookByTitle(title: string): Book | undefined {
        this.infoLogger.info('Searching for a book by title');
        const book = this.books.find((book) => book.title === title);
        if (!book) {
            this.warningLogger.warning(`Book with title "${title}" not found.`);
        }
        return book;
    }
}