class Personaje {
    nombre: string;
    actor: string;

    constructor(_nombre:string, _actor:string){
        this.nombre = _nombre;
        this.actor = _actor;
    }

    actuar(): void {
        console.log(`Soy ${this.actor} y hago de ${this.nombre}`)
    }
}

export default Personaje;