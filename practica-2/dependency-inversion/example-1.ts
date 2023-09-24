interface IDispositivoIluminacion {
    encender(): void;
    apagar(): void;
}

class Luz implements IDispositivoIluminacion {
    private encendida: boolean = false;

    encender() {
        if (!this.encendida) {
            console.log("Luz encendida");
            this.encendida = true;
        }
    }

    apagar() {
        if (this.encendida) {
            console.log("Luz apagada");
            this.encendida = false;
        }
    }
}

class Interruptor {
    private dispositivo: IDispositivoIluminacion;

    constructor(dispositivo: IDispositivoIluminacion) {
        this.dispositivo = dispositivo;
    }

    operar() {
        if (this.dispositivo instanceof Luz) {
            if (this.dispositivo['encendida']) {
                this.dispositivo.apagar();
            } else {
                this.dispositivo.encender();
            }
        }
    }
}

const Luzejem = new Luz();
const Interruptorejem = new Interruptor(Luzejem);

Interruptorejem.operar();
Interruptorejem.operar();
