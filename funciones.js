function sumar(numero1, numero2, numero3) {
    if (!numero3)
        numero3 = 0;
    return numero1 + numero2 + numero3;
}
var sumarArrow = function (numeroUno, numeroDos, numeroTres) {
    if (numeroTres === void 0) { numeroTres = 1; }
    return numeroUno + numeroDos + numeroTres;
};
var resultado1 = sumar(5, 6);
var resultado2 = sumarArrow(9, 1);
console.log(resultado1);
console.log(resultado2);
// ...
var saludar = function () {
    var nombres = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nombres[_i] = arguments[_i];
    }
    console.log("Saludar a ", nombres);
};
saludar('Caro', 'Car', 'Ca', 'C', 'Ac');
