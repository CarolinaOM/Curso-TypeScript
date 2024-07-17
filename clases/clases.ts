class Coche {
    //Propiedades | Atributos
    marca: string;
    fecha: string;
    puertas: number;

    constructor(_marca: string, _fecha: string, _puertas: number){
        this.marca = _marca;
        this.fecha = _fecha;
        this.puertas = _puertas;
    }

    //Metodos
    acelerar(): void{
        console.log('Acelerando');
    }

    frenar(): void{
        console.log('Frenado');
        
    }
}

let coche1 = new Coche('Ford', '28/12/22', 2);
console.log(coche1.marca);
