import { readFile } from 'fs/promises';

const texto = await readFile('iliada.txt', 'utf-8');

console.log(texto);