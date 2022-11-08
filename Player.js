class Player {
    constructor(name) {
        this.name = name;
        this.winners = 0;
        this.nf = 0;
        this.fallos = 0;
        
    }
} 

var GolpeType = {
    derecha: 0,
    reves: 1,
    salidaPared: 2,

}

class Punto {
    constructor() {
        this.parejaGanadora = "",
        this.player = "",
        this.golpeType = -1;
        


    }

}

class Juego{
    constructor(){
        this.puntos = [];

    }
}