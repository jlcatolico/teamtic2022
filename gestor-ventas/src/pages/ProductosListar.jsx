import React from 'react'

const producto = [
    {
        id_producto: '00001',
        descripcion: 'Gelatina x Caja',
        precio_unitario: '2.500',
        estado: 'Disponible',    
    },
    {
      id_producto: '00034',
      descripcion: 'Televisor lg 42 Pulgadas',
      precio_unitario: '2.300.000',
      estado: 'Disponible',    
    },
    {
      id_producto: '00012',
      descripcion: 'Mini componente sony 300w',
      precio_unitario: '600.000',
      estado: 'Disponible',    
    },
    {
      id_producto: '00054',
      descripcion: 'Lavadora LG 30 libras',
      precio_unitario: '3.200.000',
      estado: 'No disponible',    
  },
];

const ProductosListar = () => {
    return (
      <div className="w-full h-full flex flex-col overflow-hidden">
        <h2 className="text-lg font-medium leading-6 text-gray-900 p-3">
            Listado de Productos
        </h2>
        <br />
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-3">
                <h1>Búsqueda</h1>
              <form action="#">
                <div className="my-6 row flex flex-row justify-evenly items-center">
                  <label htmlFor="id_producto" className="block text-sm font-medium text-gray-700">
                    Id. Producto
                  </label>
                  
                  <input type="numbers" name="nombre_producto" id="nombre_producto"
                    className="mt-1 w-1/6 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                  <label htmlFor="nombre_producto" className="block text-sm font-medium text-gray-700">
                    Nombre Producto
                  </label>
                  <input type="text" name="nombre_producto" id="nombre_producto" autoComplete="nombre_producto"
                    className="mt-1 w-1/6 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                  <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
                    Estado
                  </label>
                  <select id="estado" name="estado" autoComplete="estado" className="mt-1 w-1/6 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Disponible</option>
                    <option>No Disponible</option>
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
                      ID Producto
                    </th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                      Nombre Producto
                    </th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                      Valor Producto
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
                  {producto.map((producto) => (
                    <tr key={producto.id_producto}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {producto.id_producto}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {producto.descripcion}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {producto.precio_unitario}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {producto.estado}
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

export default ProductosListar;
