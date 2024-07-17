import { nombre, saludar } from "./exportadora";
import Personaje from "./Personaje";

console.log(nombre);
saludar();

const actor: Personaje = new Personaje('Acuaman', 'Jason');
actor.actuar();