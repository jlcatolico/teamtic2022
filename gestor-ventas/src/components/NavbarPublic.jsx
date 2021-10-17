import React from 'react'
import DesarrolloIT from 'Media/DesarrolloIT.ico'
import DesarrolloIT_completo from 'Media/DesarrolloIT completo.ico'
import user from 'Media/user.svg'
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className="bg-gray-500">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-8 w-auto" src={DesarrolloIT} alt="GESTOR DE VENTAS"/>
                            
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="#" className="bg-gray-800 text-white border-solid border-2 border-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-500 hover:text-white hover:font-bold" aria-current="page">Ofertas</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white hover:font-bold px-3 py-2 rounded-md text-sm font-medium">Conocenos</a>

                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white hover:font-bold px-3 py-2 rounded-md text-sm font-medium">Noticias</a>

                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white hover:font-bold px-3 py-2 rounded-md text-sm font-medium">Trabaja con Nosotros</a>
                            </div>
                        </div>
                    </div>
                    <Link to='/Login'>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <a href="#" className="bg-gray-800 text-white border-solid border-2 border-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-800 hover:text-white hover:font-bold" aria-current="page">Login</a>
                        </button>
                    </div>
                    </Link>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-4 space-y-2">
                <a href="#" className="bg-gray-800 text-white border-solid border-2 border-white px-3 py-2 rounded-lg text-base font-medium hover:bg-green-500 hover:text-white hover:font-bold" aria-current="page">OFERTAS</a>

                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Conocenos</a>

                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Noticias</a>

                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Trabaja con Nosotros</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
