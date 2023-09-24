class Libro3 {
    titulo: string;
    autor: string;
    contenido: string;

    constructor(titulo: string, autor: string, contenido: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
    }

    mostrarDescripcion() {
        return `Libro titulado "${this.titulo}" escrito por ${this.autor}`;
    }
}

class LibroTexto extends Libro3 {
    mostrarDescripcion() {
        return `Libro de texto titulado "${this.titulo}" escrito por ${this.autor}`;
    }
}

const libroTexto = new LibroTexto("Matemáticas Avanzadas", "John Doe", "Contenido del libro...");
console.log(libroTexto.mostrarDescripcion());

