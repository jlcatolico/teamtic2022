import React from 'react'
import IconoToys from 'Media/IconoToys.png'
import ToysCompleto from 'Media/ToysCompleto.png'
import user from 'Media/user.svg'
import {Link, useLocation} from 'react-router-dom';
import useActiveRouter from 'hooks/useActiveRouter';



const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-white via-yellow-400 to-yellow-600">
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
                            <img className="block lg:hidden h-8 w-auto" src={IconoToys} alt="TOYS"/>
                            <img className="hidden lg:block h-8 w-auto" src={ToysCompleto} alt="TOYS"/>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="Marcas" className="text-orange-500 px-3 py-2 rounded-lg text-lg font-extrabold hover:bg-yellow-600 hover:text-white hover:font-extrabold hover:border-white hover:border-4" aria-current="page">Marcas</a>
                                <a href="Edades" className="text-orange-500 px-3 py-2 rounded-lg text-lg font-extrabold hover:bg-yellow-600 hover:text-white hover:font-extrabold hover:border-white hover:border-4">Edades</a>
                                <a href="Categorias" className="text-orange-500 px-3 py-2 rounded-lg text-lg font-extrabold hover:bg-yellow-600 hover:text-white hover:font-extrabold hover:border-white hover:border-4">Categorias</a>
                                <a href="ServicioAlCliente" className="text-orange-500 px-3 py-2 rounded-lg text-lg font-extrabold hover:bg-yellow-600 hover:text-white hover:font-extrabold hover:border-white hover:border-4">Servicio Al Cliente</a>
                                <RutaPublic nombre="Acerca De Nosotros" ruta="/AcercaDeNosotros" />
                            </div>
                        </div>
                    </div>
                    <Link to='/Login'>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="p-4 rounded-full text-white text-xl font-extrabold hover:bg-gray-200 hover:text-yellow-600 focus:outline-none focus:ring-full focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            Login
                        </button>
                    </div>
                    </Link>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-4 space-y-2">
                <a href="#" className="text-yellow-600 hover:bg-yellow-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Marcas</a>
                <a href="#" className="text-yellow-600 hover:bg-yellow-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Edades</a>
                <a href="#" className="text-yellow-600 hover:bg-yellow-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Categorias</a>
                <a href="#" className="text-yellow-600 hover:bg-yellow-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Servicio Al Cliente</a>
                <a href="#" className="text-yellow-600 hover:bg-yellow-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Acerca de Nosotros</a>
                </div>
            </div>
        </nav>
    )
}

const RutaPublic = ({nombre, ruta}) => {
	return (
		<Link to={ruta}>
            <button type="button" className="text-orange-500 px-3 py-2 rounded-lg text-lg font-extrabold hover:bg-yellow-600 hover:text-white hover:font-extrabold hover:border-white hover:border-4">{nombre}</button>
        </Link>
	);
};

export default Navbar;
