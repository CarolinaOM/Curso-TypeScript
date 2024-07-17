var Cliente = /** @class */ (function () {
    function Cliente(_nombre) {
        this.nombre = _nombre;
    }
    Object.defineProperty(Cliente.prototype, "getNombre", {
        //Get: recibes un valor 
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setNombre", {
        //Set: asignas un valor 
        set: function (_nuevoNombre) {
            this.nombre = _nuevoNombre;
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
var cliente1 = new Cliente('Luis');
console.log(cliente1.getNombre);
cliente1.setNombre = 'Francisco';
console.log(cliente1.getNombre);
