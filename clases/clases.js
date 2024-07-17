var Coche = /** @class */ (function () {
    function Coche(_marca, _fecha, _puertas) {
        this.marca = _marca;
        this.fecha = _fecha;
        this.puertas = _puertas;
    }
    return Coche;
}());
var coche1 = new Coche('Ford', '28/12/22', 2);
console.log(coche1.marca);
