import { readFile } from "fs/promises";

async function archivo() {
    const archivo = await readFile("iliada.txt", "utf8");

    console.log(archivo);
}

archivo();