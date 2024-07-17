var gato = { nombre: 'Gato', patas: 4, caminar: function () { return console.log('Caminando'); }, comer: function (numero) { return numero; } };
gato.caminar();
var numero = gato.comer(7);
console.log(numero);
var perro = { nombre: 'Perro', patas: 4, caminar: function () { return console.log('Camina GUA GUA'); }, comer: function (numero) { return numero; } };
perro.caminar();
