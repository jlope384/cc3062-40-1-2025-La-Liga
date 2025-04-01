
import { readFileSync } from 'fs';

const contenido = readFileSync('iliada.txt', 'utf-8');

console.log(contenido);