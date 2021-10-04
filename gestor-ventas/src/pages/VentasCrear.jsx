import AdicionarProducto from 'components/AdicionarProducto';
import React from 'react'

const productos = [
    {
        codigo: "00034",
        descripcion: "Televisor lg 42 Pulgadas",
        cantidad: "2",
        precioUnitario: "2.300.000",
        precioTotal: "4.600.000",
    },
    {
        codigo: "00012",
        descripcion: "mini componente sony 300",
        cantidad: "3",
        precioUnitario: "600.000",
        precioTotal: "1.800.000",
    },
    {
        codigo: "00054",
        descripcion: "Lavadora lg 30 libras",
        cantidad: "1",
        precioUnitario: "3.200.000",
        precioTotal: "3.200.000",
    },
];


const VentasCrear = () => {
    return (
        <>
            <div className="h-full flex flex-col p-3">
                <div className="grid-rows-2 grid-cols-1 h-screen ">
                    <div className="md:flex mb-2 flex justify-between">
                        <h2 className="text-lg font-medium leading-8 text-gray-700">
                            Creacion de Ventas
                        </h2>
                    </div>
                    <br />
                    <form action="#">
                        <div className="shadow overflow-hidden sm:rounded-md p-3">
                            <div className="-mx-3 md:flex mb-1">
                                <div className=" md:w-1/6 col-span-6 sm:col-span-3 mb-2 px-3">
                                    <label class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">
                                        Id Venta
                                    </label>
                                    <input class="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 px-3 mb-3" id="company" type="text" placeholder="33456" />
                                    <div>
                                    </div>
                                </div>
                            </div>
                            <div class="md:flex mb-3">
                                <span class="w-full text-gray-600 font-bold">Informacion Cliente</span>
                            </div>


                            <div class="-mx-3 md:flex mb-1">
                                <div class="md:w-1/4 px-3">
                                    <label class="uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="">
                                        Identificacion
                                    </label>
                                    <input class="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3" id="company" type="text" placeholder="102345721" />
                                    <div>
                                    </div>
                                </div>

                                <div class="md:w-3/4 px-3 mb-6 md:mb-0">
                                    <label class="uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="">
                                        Nombre
                                    </label>
                                    <input class="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3" id="company" type="text" placeholder="ANDRES CAMILO LOPEZ" />
                                    <div>
                                    </div>
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-5">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="">
                                        Direccion
                                    </label>
                                    <input class="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3" id="company" type="text" placeholder="CARRERA 10D 33-13 PISO 4" />
                                    <div>
                                    </div>
                                </div>

                                <div class="md:w-1/2 px-3">
                                    <label class="uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="">
                                        Correo Electronico
                                    </label>
                                    <input class="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3" id="company" type="text" placeholder="ANDRES.LOPEZ@GMAIL.COM" />
                                    <div>
                                    </div>
                                </div>
                            </div>

                            <div class="md:flex mb-2">
                                <span class="w-full text-gray-600 font-bold">Informacion Vendedor</span>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/6 px-3">
                                    <label class="uppercase tracking-wide text-gray-700  text-xs mb-2" htmlFor="">
                                        Codigo
                                    </label>
                                    <input class="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3" id="company" type="text" placeholder="4055" />
                                    <div>
                                    </div>
                                </div>

                                <div class="md:w-5/6 px-3 mb-6 md:mb-0">
                                    <label class="uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="">
                                        Nombre
                                    </label>
                                    <input class="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3" id="company" type="text" placeholder="DIEGO RAMIREZ" />
                                    <div>
                                    </div>
                                </div>
                            </div>


                            <div class="md:flex mb-6">
                                <span class="w-full text-gray-600 font-bold">Detalle de Productos</span>
                            </div>

                            <div class="md:flex mb-2">

                                <div class="md:w-1/6 px-3 md:mb-1">
                                    <label class="uppercase tracking-wide text-gray-700  text-xs mb-2" htmlFor="">Codigo</label>
                                    <input class=" w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-1 px-3" id="company" type="text" placeholder="00032" />
                                </div>

                                <div class="md:w-2/6 px-3 md:mb-1">
                                    <label class="uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="">Descripcion</label>
                                    <input class="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-3" id="company" type="text" placeholder="Licuadora Oster 5000" />
                                </div>

                                <div class="md:w-1/6 px-3 md:mb-1">
                                    <label class="uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="">Cantidad</label>
                                    <input class="text-right w-full  bg-gray-50 text-gray-700 border border-gray-200 rounded py-1 px-3" id="company" type="number" placeholder="2" />
                                </div>


                                <div class="md:w-1/6 px-3 md:mb-1">
                                    <label class="uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="">Precio Unitario</label>
                                    <input class="text-right w-full  bg-gray-50 text-gray-700 border border-gray-200 rounded py-1 px-3" id="company" type="number" placeholder="370.000" />
                                </div>


                                <div class="md:w-1/6 px-2 py-6 md:mb-1">
                                    <button type="submit"
                                        className="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        + Adicionar
                                    </button>
                                </div>

                            </div>



                            <div class="-mx-3 md:flex mb-6">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Codigo</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Descripcion</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Cantidad</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Precio Unitario</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Precio Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {productos.map((productos) => (
                                            <tr key={productos.codigo}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm  text-gray-500">
                                                        {productos.codigo}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">
                                                        {productos.descripcion}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <div className="flex justify-end">
                                                        {productos.cantidad}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <div className="flex justify-end">
                                                        {productos.precioUnitario}
                                                    </div>

                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <div className="flex justify-end">
                                                        {productos.precioTotal}
                                                    </div>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div class="md:flex mb-2">
                                <span class="text-gray-600 font-bold md:w-5/6 px-3 flex justify-end">Sub Total: </span>
                                <span class="text-gray-600 font-bold md:w-1/6 px-3 flex justify-end">9.600.000</span>
                            </div>

                            <div class="md:flex mb-2">
                                <span class="text-gray-600 font-bold md:w-5/6 px-3 flex justify-end">Impuestos: </span>
                                <span class="text-gray-600 font-bold md:w-1/6 px-3 flex justify-end">1.824.000</span>
                            </div>

                            <div class="md:flex mb-2">
                                <span class="text-gray-600 font-bold md:w-5/6 px-3 flex justify-end">Total: </span>
                                <span class="text-gray-600 font-bold md:w-1/6 px-3 flex justify-end">11.424.000</span>
                            </div>

                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-2 mb-10">
                                <button type="submit"
                                    className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Guardar
                                </button>
                            </div>

                        </div>



                    </form>
                </div>
            </div >
        </>
    );
}

export default VentasCrear;
