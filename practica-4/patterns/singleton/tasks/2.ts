// // dbService.ts

// export class DatabaseService {
//     private connectionString: string;

//     constructor(connectionString: string) {
//         this.connectionString = connectionString;
//     }

//     connect(): void {
//         // Lógica para conectar a la base de datos
//         console.log(`Connecting to database with ${this.connectionString}`);
//     }
// }

// // app.ts

// import { DatabaseService } from './dbService';

// let dbService1 = new DatabaseService("mongodb://localhost/db1");
// let dbService2 = new DatabaseService("mongodb://localhost/db1"); // Nota que es la misma dirección que dbService1

// dbService1.connect();
// dbService2.connect();

import { DatabaseService } from './dbService';

const dbService1 = DatabaseService.getInstance("mongodb://localhost/db1");
const dbService2 = DatabaseService.getInstance("mongodb://localhost/db1"); // Esto obtendrá la misma instancia que dbService1

dbService1.connect();
dbService2.connect();
