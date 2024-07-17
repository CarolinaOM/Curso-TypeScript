function mostrarGenerico<T>(dato: T): T {
    return dato;
}

console.log(mostrarGenerico('Caro'));
console.log(mostrarGenerico('87'));

const almacenar = mostrarGenerico('hola');