class MovieManager {
    movies: any[] = [];

    addMovie(movie: any) {
        this.movies.push(movie);
    }
}

class SnackManager {
    snacks: any[] = [];

    buySnack(snack: any) {
        this.snacks.push(snack);
    }
}

class TicketManager {
    tickets: any[] = [];

    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }
}

class EmployeeManager {
    employees: any[] = [];

    hireEmployee(employee: any) {
        this.employees.push(employee);
    }
}
