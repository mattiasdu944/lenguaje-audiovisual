class Libro {
    titulo: string;
    autor: string;
    contenido: string;

    constructor(titulo: string, autor: string, contenido: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
    }
    
    mostrarContenido() {
        return this.contenido;
    }
}

class BaseDeDatos {
    guardarLibro(libro: Libro) {
        console.log(`Guardando el libro ${libro.titulo} en la base de datos...`);
    }
}

const libro1 = new Libro('El principito', 'Antoine de Saint-Exupéry', 'Érase una vez...');
const baseDeDatos = new BaseDeDatos();
baseDeDatos.guardarLibro(libro1);
