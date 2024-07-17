class Padre{
    nombre: string;
    edad: number;

    constructor(_nombre: string, _edad:number){
        this.nombre = _nombre;
        this.edad = _edad;
    }

    mostrarEdad(): void{
        console.log(`Soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

class Hijo extends Padre {
    apellidos: string;

    constructor(_nombre: string, _edad:number, _apellidos: string){
        super(_nombre, _edad);
        this.apellidos = _apellidos;
    }
}

const hijo1 = new Hijo('Caro', 18, 'Fernandez');
console.log(hijo1.apellidos);
console.log(hijo1.nombre);
hijo1.mostrarEdad();

