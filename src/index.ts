import promptSync from "prompt-sync";

import { menuClientes } from "./menus/MenuClientes.js";
import { menuProductos } from "./menus/MenuProductos.js";
import { menuVentas } from "./menus/MenuVentas.js";

const prompt = promptSync();

function menuPrincipal() {

    console.log("\n==========================");
    console.log("        TIENDA");
    console.log("==========================");
    console.log("1. Clientes");
    console.log("2. Productos");
    console.log("3. Ventas");
    console.log("4. Salir");

    const opcion = Number(prompt("Opcion: "));

    switch (opcion) {

        case 1:

            menuClientes().then(() => {
                menuPrincipal();
            });

            break;

        case 2:

            menuProductos().then(() => {
                menuPrincipal();
            });

            break;

        case 3:

            menuVentas().then(() => {
                menuPrincipal();
            });

            break;

        case 4:

            console.log("\nAdios");

            break;

        default:

            console.log("\nOpcion incorrecta.");
            menuPrincipal();

            break;

    }

}

menuPrincipal();