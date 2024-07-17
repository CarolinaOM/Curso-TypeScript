let secreto: string | number;

function decirSecreto(secreto: string | number){
    return secreto;
}

//Uniones Descriminantes

type Suma = {
    sumando1: number;
    sumando2: number;
    tipo: '+'
}

type Resta = {
    restando1: number;
    restando2: number;
    tipo: '-'
}

function operar(operar: Suma | Resta){
    if(operar.tipo == '+'){
        console.log(operar.sumando1 + operar.sumando2);
    }

    if(operar.tipo == '-'){
        console.log(operar.restando1 + operar.restando2);
    }
}