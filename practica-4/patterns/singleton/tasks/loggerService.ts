// loggerService.ts

export class LoggerService {
    private filePath: string;
    private static instance: LoggerService;

    private constructor(filePath: string) {
        this.filePath = filePath;
    }

    public static getInstance(filePath: string): LoggerService {
        if (!LoggerService.instance) {
            LoggerService.instance = new LoggerService(filePath);
        }
        return LoggerService.instance;
    }

    logMessage(message: string): void {
        // Lógica ficticia para escribir en el archivo
        console.log(`Writing to ${this.filePath}: ${message}`);
    }
}