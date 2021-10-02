import React from 'react'

const ProductosCrear = () => {
    return (
        <>
            
            <div className="mt-10 sm:mt-0 h-full w-2/4">
                <div className="grid-rows-2 grid-cols-1 h-screen">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <h2 className="text-lg font-medium leading-6 text-gray-900">Registro de Productos</h2><br/>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="idproducto" className="block text-sm font-medium text-gray-700">
                                                Id. Producto
                                            </label>
                                            <input
                                                type="number"
                                                name="idproducto"
                                                id="idproducto"
                                                autoComplete="given-name"
                                                className="mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                            />
                                        </div><br/>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
                                                Descripcion Producto
                                            </label>
                                            <input
                                                type="text"
                                                name="descricpcion"
                                                id="descripcion"
                                                autoComplete="family-name"
                                                className="mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="valor-unitario" className="block text-sm font-medium text-gray-700">
                                                Valor Unitario
                                            </label>
                                            <input
                                                type="number"
                                                name="valor-unitario"
                                                id="valor-unitario"
                                                autoComplete="valoruni"
                                                className="mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
                                                Estado Producto
                                            </label>
                                            <select
                                                id="estado"
                                                name="estado"
                                                autoComplete="estado"
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>Disponible</option>
                                                <option>No Disponible</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>          
        </>
    )
}
export default ProductosCrear;
