import React from 'react'

const VentasActualizar = () => {
  return (
    <>
      <div className="mt-10 sm:mt-0 h-full w-2/4">
        <div className="grid-rows-2 grid-cols-1 h-screen">
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Actualización de Ventas
          </h2>
          <br />
            <form action="#">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="md:grid grid-cols-2">
                        <label htmlFor="id-venta" className="block text-sm font-medium">
                         Id. Venta
                        </label>
                        <input type="number" name="id-venta" id="id-venta" placeholder='Id. Venta'
                         className="mt-1 block w-full p-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"/>
                    </div>
                    
                    <div className="md:grid grid-cols-2">
                        <label htmlFor="valor-venta" className="block text-sm font-medium text-gray-700">
                          Valor venta
                        </label>
                        <input type="number" name="valor-venta" id="valor-venta" placeholder='Valor venta'
                         className="mt-1 block w-full p-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"/>
                    </div>

                    <div className="md:grid grid-cols-2">
                        <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
                          Estado Venta
                        </label>
                        <select  id="estado" name="estado" placeholder='Estado de la venta'
                          className="mt-1 block w-full p-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700">
                          <option>En progreso</option>
                          <option>Entregada</option>
                          <option>Cancelada</option>
                        </select>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit"
                      className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Save
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
