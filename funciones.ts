function sumar(numero1: number, numero2: number, numero3?: number): number{
    if(!numero3) numero3=0
    return numero1 + numero2 + numero3;
}

const sumarArrow = (numeroUno: number, numeroDos: number, numeroTres: number = 1): number => {
    return numeroUno + numeroDos +  numeroTres;
}

const resultado1 = sumar(5, 6);
const resultado2 = sumarArrow(9, 1);

console.log(resultado1);
console.log(resultado2);

// ...

const saludar = (...nombres:string[]): void =>{
    console.log("Saludar a ", nombres);
}

saludar('Caro', 'Car', 'Ca', 'C', 'Ac')