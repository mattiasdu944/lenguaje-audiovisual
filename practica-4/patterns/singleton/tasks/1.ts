// // loggerService.ts

// export class LoggerService {
//     private filePath: string;

//     constructor(filePath: string) {
//         this.filePath = filePath;
//     }

//     logMessage(message: string): void {
//         // Lógica ficticia para escribir en el archivo
//         console.log(`Writing to ${this.filePath}: ${message}`);
//     }
// }

// // app.ts

// import { LoggerService } from './loggerService';

// let logger1 = new LoggerService("log.txt");
// let logger2 = new LoggerService("log.txt");

// logger1.logMessage("This is a message from logger1");
// logger2.logMessage("This is a message from logger2");




import { LoggerService } from './loggerService';

const logger1 = LoggerService.getInstance("log.txt");
const logger2 = LoggerService.getInstance("log.txt");

logger1.logMessage("This is a message from logger1");
logger2.logMessage("This is a message from logger2");
