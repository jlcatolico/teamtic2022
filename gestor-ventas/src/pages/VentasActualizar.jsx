import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const producto = [
  {
    id_producto: "00034",
    descripcion: "Televisor lg 42 Pulgadas",
    cantidad: "2",
    precioUnitario: "2.300.000",
    precioTotal: "4.600.000",
  },
  {
    id_producto: "00012",
    descripcion: "mini componente sony 300w",
    cantidad: "3",
    precioUnitario: "600.000",
    precioTotal: "1.800.000",
  },
  {
    id_producto: "00054",
    descripcion: "Lavadora lg 30 libras",
    cantidad: "1",
    precioUnitario: "3.200.000",
    precioTotal: "3.200.000",
  },
];

const VentasActualizar = () => {
  return (
    <>
      <div className="h-full flex flex-col p-3">
        <div className="grid-rows-2 grid-cols-1 h-screen ">
          <div className="md:flex mb-2 flex justify-between">
            <h2 className="text-lg font-medium leading-6 text-gray-700">
              Actualizar Información de Ventas
            </h2>
            <Link to="/VentasListar">
              <div className="px-4 py-3 text-right sm:px-2">
                <button
                  type="submit"
                  className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="m-1 align-middle"
                  />
                  Regresar
                </button>
              </div>
            </Link>
          </div>
          <br />
          <form action="#">
            <div className="shadow overflow-hidden sm:rounded-md p-3">
              <div className="md:flex mb-3">
                <span className="w-full text-gray-600 font-bold">
                  Información Venta
                </span>
              </div>
              <div className="-mx-3 md:flex mb-1">
                <div className=" md:w-1/4 px-3">
                  <label
                    className=" tracking-wide text-gray-700 mb-2"
                    htmlFor=""
                  >
                    Id Venta
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3"
                    id="id_venta"
                    type="text"
                    placeholder="33456"
                    disabled="true"
                  />
                </div>
                <div className=" md:w-1/4 px-3">
                  <label
                    className=" tracking-wide text-gray-700 mb-2"
                    htmlFor=""
                  >
                    Fecha Venta
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-500 border border-gray-200 rounded py-1 px-4 mb-3"
                    id="fecha_venta"
                    type="date"
                    placeholder="10/03/2021"
                    disabled="true"
                  />
                </div>
                <div className=" md:w-2/4 px-3">
                  <label
                    className=" tracking-wide text-gray-700 mb-2"
                    htmlFor=""
                  >
                    Estado Venta
                  </label>
                  <select
                    id="estado"
                    name="estado"
                    autoComplete="estado"
                    className="w-full px-2 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>En proceso</option>
                    <option>Entregada</option>
                    <option>Cancelada</option>
                  </select>
                </div>
              </div>
              <div className="md:flex mb-3">
                <span className="w-full text-gray-600 font-bold">
                  Información Cliente
                </span>
              </div>
              <div className="-mx-3 md:flex mb-1">
                <div className="md:w-1/4 px-3">
                  <label
                    className="tracking-wide text-gray-700  mb-2"
                    htmlFor=""
                  >
                    Identificación
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3"
                    id="id_cliente"
                    type="text"
                    placeholder="102345721 "
                    disabled="true"
                  />
                </div>
                <div className="md:w-3/4 px-3 mb-6 md:mb-0">
                  <label
                    className="tracking-wide text-gray-700 mb-2"
                    htmlFor=""
                  >
                    Nombre
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3"
                    id="nombre_cliente"
                    type="text"
                    placeholder="ANDRES CAMILO LOPEZ"
                    disabled="true"
                  />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-1">
                <div className="md:w-1/2 px-3 mb-3 md:mb-0">
                  <label
                    className="tracking-wide text-gray-700 mb-2"
                    htmlFor=""
                  >
                    Direccion
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3"
                    id="direccion_cliente"
                    type="text"
                    placeholder="CARRERA 10D 33-13 PISO 4"
                    disabled="true"
                  />
                </div>

                <div className="md:w-1/2 px-3">
                  <label
                    className="tracking-wide text-gray-700 mb-2"
                    htmlFor=""
                  >
                    Correo Electronico
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3"
                    id="email_cliente"
                    type="text"
                    placeholder="ANDRES.LOPEZ@GMAIL.COM"
                    disabled="true"
                  />
                </div>
              </div>

              <div className="md:flex mb-1">
                <span className="w-full text-gray-600 font-bold mb-2">
                  Información Vendedor
                </span>
              </div>
              <div className="-mx-3 md:flex mb-3">
                <div className="md:w-1/4 px-3">
                  <label
                    className="tracking-wide text-gray-700 mb-2"
                    htmlFor=""
                  >
                    Codigo
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-700 border rounded py-1 px-4 mb-3"
                    id="id_vendedor"
                    type="text"
                    placeholder="4055"
                    disabled="true"
                  />
                </div>
                <div className="md:w-3/4 px-3 mb-6 md:mb-0">
                  <label
                    className="tracking-wide text-gray-700 mb-2"
                    htmlFor=""
                  >
                    Nombre
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-700 border rounded py-1 px-4 mb-3"
                    id="company"
                    type="text"
                    placeholder="DIEGO RAMIREZ"
                    disabled="true"
                  />
                </div>
              </div>
              <div className="md:flex mb-6">
                <span className="w-full text-gray-600 font-bold">
                  Detalle de Productos
                </span>
              </div>

              <div className="-mx-3 md:flex mb-6">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider"
                      >
                        Codigo
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider"
                      >
                        Decripción
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right font-medium text-gray-500 tracking-wider"
                      >
                        Cantidad
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right font-medium text-gray-500 tracking-wider"
                      >
                        Precio Unitario
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right font-medium text-gray-500 tracking-wider"
                      >
                        Precio Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {producto.map((producto) => (
                      <tr key={producto.id_producto}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm  text-gray-500">
                            {producto.id_producto}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {producto.descripcion}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex justify-end">
                            {producto.cantidad}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex justify-end">
                            {producto.precioUnitario}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex justify-end">
                            {producto.precioTotal}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="md:flex mb-2">
                <span className="text-gray-600 font-bold md:w-5/6 px-3 flex justify-end">
                  Sub Total:
                </span>
                <span className="text-gray-600 font-bold md:w-1/6 px-3 flex justify-end">
                  9.600.000
                </span>
              </div>

              <div className="md:flex mb-2">
                <span className="text-gray-600 font-bold md:w-5/6 px-3 flex justify-end">
                  Impuestos:
                </span>
                <span className="text-gray-600 font-bold md:w-1/6 px-3 flex justify-end">
                  1.824.000
                </span>
              </div>

              <div className="md:flex mb-2">
                <span className="text-gray-600 font-bold md:w-5/6 px-3 flex justify-end">
                  Total:
                </span>
                <span className="text-gray-600 font-bold md:w-1/6 px-3 flex justify-end">
                  11.424.000
                </span>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-2 mb-5">
                <button
                  type="submit"
                  className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Guardar
                </button>
              </div>
              <div className="bg-green-400  w-full rounded-md my-3">
                <p className="p-2 text-center text-white">
                  El registro se actualizó correctamente
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VentasActualizar;
