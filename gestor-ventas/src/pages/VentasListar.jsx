import React from 'react'

const sale = [
    {
        id_venta: 202110030001,
        valor_venta: 100000,
        id_producto: 1,
        cantidad: 5,
        precio_unitario: 20000,
        fecha_venta: '10/03/2021',
        id_cliente: 1088328203,
        nombre_cliente: 'Valentina Arbelaez',
        vendedor: "Jane Cooper",
        estado: 'En proceso',    
    },
    {
        id_venta: 202110030001,
        valor_venta: 100000,
        id_producto: 11,
        cantidad: 5,
        precio_unitario: 20000,
        fecha_venta: '10/03/2021',
        id_cliente: 1088328203,
        nombre_cliente: 'Valentina Arbelaez',
        vendedor: "Jane Cooper",
        estado: 'Entregada',       
    },
    {
        id_venta: 202110030001,
        valor_venta: 100000,
        id_producto: 1,
        cantidad: 5,
        precio_unitario: 20000,
        fecha_venta: '10/03/2021',
        id_cliente: 1088328203,
        nombre_cliente: 'Valentina Arbelaez',
        vendedor: "Jane Cooper",
        estado: 'Cancelada',       
    },
    {
        id_venta: 202110030001,
        valor_venta: 100000,
        id_producto: 11,
        cantidad: 5,
        precio_unitario: 20000,
        fecha_venta: '10/03/2021',
        id_cliente: 1088328203,
        nombre_cliente: 'Valentina Arbelaez',
        vendedor: "Jane Cooper",
        estado: 'En proceso',       
    },
];

const VentasListar = () => {
    return (
      <div className="w-full h-full flex flex-col overflow-hidden">
        <h2 className="text-lg font-medium leading-6 text-gray-900 p-3">
            Listado de Ventas
        </h2>
        <br />
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-3">
                <h1>Búsqueda</h1>
              <form action="#">
                <div className="my-6 row flex flex-row flex justify-evenly flex items-center">
                  <label htmlFor="id_venta" className="block text-sm font-medium text-gray-700">
                    Id. Venta
                  </label>
                  <input type="text" name="id_venta" id="id_venta" maxLength="5" minLength="5"
                    className="mt-1 w-1/6 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                  <label htmlFor="fecha_venta" className="block text-sm font-medium text-gray-700">
                    Id. Venta
                  </label>
                  <input type="date" name="fecha_venta" id="fecha_venta"
                    className="mt-1 w-1/6 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                  <label htmlFor="nombre_cliente" className="block text-sm font-medium text-gray-700">
                    Nombre Cliente
                  </label>
                  <input type="text" name="nombre_cliente" id="nombre_cliente" autoComplete="nombre_cliente"
                    className="mt-1 w-1/6 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                  <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
                    Estado
                  </label>
                  <select id="estado" name="estado" autoComplete="estado" className="mt-1 w-1/6 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>En proceso</option>
                    <option>Entregada</option>
                    <option>Cancelada</option>
                  </select>
                  <button type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Buscar
                  </button>
                </div>
              </form>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                      ID Venta
                    </th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                      Valor Venta
                    </th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                      Fecha Venta
                    </th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                      ID Cliente
                    </th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                      Nombre Cliente
                    </th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                      Vendedor
                    </th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                      Estado
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">
                          Actualizar
                        </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sale.map((sale) => (
                    <tr key={sale.id_venta}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {sale.id_venta}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {sale.valor_venta}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {sale.fecha_venta}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {sale.id_cliente}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {sale.nombre_cliente}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {sale.vendedor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex leading-5 text-sm rounded-sm bg-green-100 text-green-800">
                          {sale.estado}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Editar
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Anterior
            </a>
            <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Siguiente
            </a>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Mostrando <span className="font-medium">1</span> -{" "}
                <span className="font-medium">1</span> de{" "}
                <span className="font-medium">1</span> resultados
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Anterior</span>
                  <div className="h-5 w-5" aria-hidden="true">
                    &#60;
                  </div>
                </a>
                {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  1
                </a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Siguiente</span>
                  <div className="h-5 w-5" aria-hidden="true">
                    &#62;
                  </div>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
}

export default VentasListar;
