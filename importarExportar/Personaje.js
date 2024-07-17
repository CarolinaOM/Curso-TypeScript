"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Personaje = /** @class */ (function () {
    function Personaje(_nombre, _actor) {
        this.nombre = _nombre;
        this.actor = _actor;
    }
    Personaje.prototype.actuar = function () {
        console.log("Soy ".concat(this.actor, " y hago de ").concat(this.nombre));
    };
    return Personaje;
}());
exports.default = Personaje;
