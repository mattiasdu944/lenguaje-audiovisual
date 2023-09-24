
export interface IErrorLogger {
    error(message: string): void;
}

export interface IWarningLogger {
    warning(message: string): void;
}

export interface IInfoLogger {
    info(message: string): void;
}
