interface Animal {
    //Propiedades 
    readonly nombre: string;
    patas?: number;

    //Funciones
    caminar(): void;
    comer(numero: number): number;
}

let gato: Animal = {nombre: 'Gato', patas: 4, caminar: () => console.log('Caminando'), comer: (numero) => {return numero }}
gato.caminar();
const numero = gato.comer(7);
console.log(numero);

let perro: Animal = {nombre: 'Perro', patas: 4, caminar: () => console.log('Camina GUA GUA'), comer: (numero) => {return numero }}
perro.caminar();