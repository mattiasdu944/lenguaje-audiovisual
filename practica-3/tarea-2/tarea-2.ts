
enum MembershipType {
    Basic = "Basic",
    Premium = "Premium",
    Platinum = "Platinum",
}

enum BookCategory {
    Fiction = "Fiction",
    NonFiction = "NonFiction",
    Reference = "Reference",
}

class Book {
    constructor(
        public title: string,
        public author: string,
        public isLoaded: boolean = false,
        public isAvailable: boolean = true,
        public dueDate: Date | null = null,
        public category: BookCategory = BookCategory.Fiction
    ) { }
}

class User {
    constructor(
        public userID: string,
        public name: string,
        public membership: MembershipType = MembershipType.Basic,
        public loanHistory: Book[] = []
    ) { }
}

class Library {
    private books: Book[] = [];
    private loadBooks: Map<string, User> = new Map();

    constructor() { }

    loadBook(book: Book, user: User): void {
        if (book.isLoaded) {
            console.warn('Book is already loaded');
            return;
        }

        if (
            (user.membership === MembershipType.Basic && user.loanHistory.length >= 2) ||
            (user.membership === MembershipType.Premium && user.loanHistory.length >= 5)
        ) {
            console.warn('User has reached the maximum number of loans allowed.');
            return;
        }

        if (book.category === BookCategory.Reference) {
            console.warn('Reference books cannot be borrowed.');
            return;
        }

        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 7);

        book.isAvailable = false;
        book.dueDate = dueDate;
        this.loadBooks.set(book.title, user);
        book.isLoaded = true;
        user.loanHistory.push(book);

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
        const dailyFine = 1; // $1 per day of delay
        return daysLate * dailyFine;
    }

    addBook(book: Book): void {
        this.books.push(book);
        console.log('Book added successfully');
    }

    validateBookTitle(book: Book, desiredTitle: string): void {
        if (book.title === desiredTitle) {
            console.log(`The book "${book.title}" has the correct title.`);
        } else {
            console.warn(`The book "${book.title}" does not have the correct title.`);
        }
    }

    findBookByTitle(title: string): Book | undefined {
        return this.books.find((book) => book.title === title);
    }
}

const library = new Library();
const user1 = new User('12345', 'Alice', MembershipType.Premium);
const book1 = new Book('Book1', 'Author1', false, true, null, BookCategory.Fiction);
library.addBook(book1);

library.loadBook(book1, user1);
console.log(user1.loanHistory);

setTimeout(() => {
    library.returnBook(book1);
}, 2 * 24 * 60 * 60 * 1000);
