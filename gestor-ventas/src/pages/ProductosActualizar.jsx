import React from 'react'

const VentasActualizar = () => {
  return (
    <>
      <div className="mt-10 sm:mt-0 h-full w-2/4">
        <div className="grid-rows-2 grid-cols-1 h-screen">
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Actualización de Productos
          </h2>
          <br />
            <form action="#">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="md:grid grid-cols-2">
                        <label htmlFor="id-producto" className="block text-sm font-medium">
                         Id. Producto
                        </label>
                        <input type="number" name="id-producto" id="id-producto" placeholder='Id. producto'
                         className="mt-1 block w-full p-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"/>
                    </div>

                    <div className="md:grid grid-cols-2">
                        <label htmlFor="producto" className="block text-sm font-medium">
                         Nombre Producto
                        </label>
                        <input type="text" name="producto" id="producto" placeholder='Nombre producto'
                         className="mt-1 block w-full p-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"/>
                    </div>
                    
                    
                    <div className="md:grid grid-cols-2">
                        <label htmlFor="valor-producto" className="block text-sm font-medium text-gray-700">
                          Valor Producto
                        </label>
                        <input type="number" name="valor-producto" id="valor-producto" placeholder='Valor producto'
                         className="mt-1 block w-full p-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"/>
                    </div>

                    <div className="md:grid grid-cols-2">
                        <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
                          Estado producto
                        </label>
                        <select  id="estado" name="estado" placeholder='Estado de la venta'
                          className="mt-1 block w-full p-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700">
                          <option>Disponible</option>
                          <option>No Disponible</option>
                         </select>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit"
                      className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Guardar
                    </button>
                  </div>
                </div>
            </form>
        </div>
      </div>
    </>
  );
};

export default VentasActualizar;
