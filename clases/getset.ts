class Cliente {
    nombre: string;

    constructor(_nombre: string){
        this.nombre = _nombre;
    }

    //Get: recibes un valor 
    get getNombre(): string{
        return this.nombre;
    }

    //Set: asignas un valor 
    set setNombre(_nuevoNombre: string){
        this.nombre = _nuevoNombre;
    }
}

let cliente1 = new Cliente('Luis');
console.log(cliente1.getNombre);
cliente1.setNombre = 'Francisco';
console.log(cliente1.getNombre);

