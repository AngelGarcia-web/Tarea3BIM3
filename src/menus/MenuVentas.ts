import promptSync from "prompt-sync";
import { VentaService } from "../service/ServiceVentas.js";
import { Venta } from "../models/Ventas.js";

const prompt = promptSync();

export async function menuVentas() {

    const ventaService = new VentaService();

    try {

        await ventaService.cargar();

        let opcion = 0;

        do {

            console.log("\n===== VENTAS =====");
            console.log("1. Listar");
            console.log("2. Agregar");
            console.log("3. Actualizar");
            console.log("4. Eliminar");
            console.log("5. Volver");

            opcion = Number(prompt("Opcion: "));

            switch(opcion){

                case 1:

                    console.log(ventaService.listar());

                    break;


                case 2:

                    try {

                        const id = Number(prompt("Id: "));
                        const idCliente = Number(prompt("Id Cliente: "));
                        const idProducto = Number(prompt("Id Producto: "));
                        const cantidad = Number(prompt("Cantidad: "));
                        const fecha = prompt("Fecha: ");

                        await ventaService.agregar(
                            new Venta(
                                id,
                                idCliente,
                                idProducto,
                                cantidad,
                                fecha
                            )
                        );

                        console.log("Venta agregada");


                    }catch(error:any){

                        console.log(error.message);

                    }

                    break;


                case 3:

                    try {

                        const id = Number(prompt("Id de la venta: "));
                        const idCliente = Number(prompt("Id Cliente: "));
                        const idProducto = Number(prompt("Id Producto: "));
                        const cantidad = Number(prompt("Cantidad: "));
                        const fecha = prompt("Fecha: ");

                        await ventaService.actualizar(
                            id,
                            new Venta(
                                id,
                                idCliente,
                                idProducto,
                                cantidad,
                                fecha
                            )
                        );

                        console.log("Venta actualizada");


                    }catch(error:any){

                        console.log(error.message);

                    }

                    break;


                case 4:

                    try {

                        const id = Number(prompt("Id: "));

                        await ventaService.eliminar(id);

                        console.log("Venta eliminada");


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

        console.log("Error al cargar ventas.");
        console.log(error);

    }

}