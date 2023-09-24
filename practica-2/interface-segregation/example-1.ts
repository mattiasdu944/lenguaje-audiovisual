interface IReproductorMusica {
    reproducirMusica(): void;
}

interface IReproductorVideo {
    reproducirVideo(): void;
}

interface ILectorEbook {
    leerEbook(): void;
}

class Smartphone implements IReproductorMusica, IReproductorVideo, ILectorEbook {
    reproducirMusica() {
        console.log("Reproduciendo música en el smartphone");
    }

    reproducirVideo() {
        console.log("Reproduciendo video en el smartphone");
    }
    
    leerEbook() {
        console.log("Leyendo eBook en el smartphone");
    }
}

class ReproductorMP3 implements IReproductorMusica {
    reproducirMusica() {
        console.log("Reproduciendo música en el reproductor MP3");
    }
}
