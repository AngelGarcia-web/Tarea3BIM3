import promptSync from "prompt-sync";
import { ProductoService } from "../service/ServiceProductos.js";
import { Producto } from "../models/Productos.js";

const prompt = promptSync();

export async function menuProductos() {

    const productoService = new ProductoService();

    try {

        await productoService.cargar();

        let opcion = 0;

        do {

            console.log("\n===== PRODUCTOS =====");
            console.log("1. Listar");
            console.log("2. Agregar");
            console.log("3. Actualizar");
            console.log("4. Eliminar");
            console.log("5. Volver");

            opcion = Number(prompt("Opcion: "));

            switch(opcion){

                case 1:

                    console.log(productoService.listar());

                    break;


                case 2:

                    try {

                        const id = Number(prompt("Id: "));
                        const nombre = prompt("Nombre: ");
                        const precio = Number(prompt("Precio: "));
                        const stock = Number(prompt("Stock: "));

                        await productoService.agregar(
                            new Producto(id, nombre, precio, stock)
                        );

                        console.log("Producto agregado");


                    }catch(error:any){

                        console.log(error.message);

                    }

                    break;


                case 3:

                    try {

                        const id = Number(prompt("Id del producto: "));
                        const nombre = prompt("Nombre: ");
                        const precio = Number(prompt("Precio: "));
                        const stock = Number(prompt("Stock: "));

                        await productoService.actualizar(
                            id,
                            new Producto(id, nombre, precio, stock)
                        );

                        console.log("Producto actualizado");


                    }catch(error:any){

                        console.log(error.message);

                    }

                    break;


                case 4:

                    try {

                        const id = Number(prompt("Id: "));

                        await productoService.eliminar(id);

                        console.log("Producto eliminado");


                    }catch(error:any){

                        console.log(error.message);

                    }

                    break;


                case 5:

                    console.log("Regresando...");

                    break;


                default:

                    console.log("Opcion incorrecta");

            }


        }while(opcion !== 5);


    }catch(error:any){

        console.log("Error al cargar productos.");
        console.log(error);

    }

}