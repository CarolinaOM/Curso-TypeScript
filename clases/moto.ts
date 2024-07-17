class Moto {
    protected marca: string;
    protected precio: number;

    constructor(_marca: string, _precio: number){
        this.marca = _marca;
        this.precio = _precio;
    }

    protected arrancar(): void {
        console.log('brn brn ...')
        
    }
}

class Scotter extends Moto {
    public kilometraje: number;

    constructor(_marca: string, _precio: number, _kilometraje: number){
        super(_marca, _precio);
        this.kilometraje = _kilometraje;
    }
}

let moto1 = new Moto('Ducat', 15000);
//moto1.
let scotter1 = new Scotter('Suzuki', 1000, 20000);
scotter1.kilometraje