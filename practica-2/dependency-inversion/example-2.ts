class Configuracion {
    constructor(public valor: string) {}
}

interface IAlmacenamiento {
    guardar(configuracion: Configuracion): void;
    obtener(): Configuracion;
}

class BaseDeDatos implements IAlmacenamiento {
    guardar(configuracion: Configuracion) {
        console.log(`Guardando: ${configuracion.valor} en la base de datos`);
    }

    obtener(): Configuracion {
        return new Configuracion("valor");
    }
}

class GestorConfiguraciones {
    almacenamiento: IAlmacenamiento;

    constructor(almacenamiento: IAlmacenamiento) {
        this.almacenamiento = almacenamiento;
    }

    guardarConfiguracion(valor: string) {
        const configuracion = new Configuracion(valor);
        this.almacenamiento.guardar(configuracion);
    }

    obtenerConfiguracion(): Configuracion {
        return this.almacenamiento.obtener();
    }
}

const dbAlmacenamiento = new BaseDeDatos();
const gestor = new GestorConfiguraciones(dbAlmacenamiento);

gestor.guardarConfiguracion("nuevo_valor");
const configuracion = gestor.obtenerConfiguracion();
console.log(`Valor de configuración obtenido: ${configuracion.valor}`);