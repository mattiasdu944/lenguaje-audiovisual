interface ITerrestre {
    caminar(): void;
}

interface IAcuatico {
    nadar(): void;
}

interface IAereo {
    volar(): void;
}

interface ISonidoAnimal {
    hacerSonido(): void;
}

class Aguila implements IAereo, ISonidoAnimal {
    volar() {
        console.log("El águila vuela alto en el cielo");
    }

    hacerSonido() {
        console.log("El águila emite un sonido agudo");
    }
}

class Tiburon implements IAcuatico, ISonidoAnimal {
    nadar() {
        console.log("El tiburón nada rápidamente");
    }

    hacerSonido() {
        console.log("El tiburón no hace sonidos audibles fuera del agua");
    }
}

class Perro implements ITerrestre, ISonidoAnimal {
    caminar() {
        console.log("El perro camina por el suelo");
    }

    hacerSonido() {
        console.log("El perro ladra");
    }
}