class Figura {
    alto: number;
    ancho: number;

    constructor(alto: number, ancho: number) {
        this.alto = alto;
        this.ancho = ancho;
    }

    area(): number {
        return this.alto * this.ancho;
    }
}

class Rectangulo extends Figura {
    constructor(alto: number, ancho: number) {
        super(alto, ancho);
    }
}

class Cuadrado extends Figura {
    constructor(lado: number) {
        super(lado, lado);
    }
}
