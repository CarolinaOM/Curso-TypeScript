"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exportadora_1 = require("./exportadora");
var Personaje_1 = require("./Personaje");
console.log(exportadora_1.nombre);
(0, exportadora_1.saludar)();
var actor = new Personaje_1.default('Acuaman', 'Jason');
actor.actuar();
