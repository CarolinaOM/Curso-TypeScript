var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Padre = /** @class */ (function () {
    function Padre(_nombre, _edad) {
        this.nombre = _nombre;
        this.edad = _edad;
    }
    Padre.prototype.mostrarEdad = function () {
        console.log("Soy ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os"));
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(_nombre, _edad, _apellidos) {
        var _this = _super.call(this, _nombre, _edad) || this;
        _this.apellidos = _apellidos;
        return _this;
    }
    return Hijo;
}(Padre));
var hijo1 = new Hijo('Caro', 18, 'Fernandez');
console.log(hijo1.apellidos);
console.log(hijo1.nombre);
hijo1.mostrarEdad();
