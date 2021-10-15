import React from 'react'
import { Link } from 'react-router-dom';
import Logo from 'Media/Toys.png';

const Sidebar = () => {
  return (

    <nav className="w-72 border border-gray-300 bg-white p-2 justify">
      <div className="px-4">
        <img alt='...' src={Logo} className='max-w-200-px' />
      </div>
      <ul className="flex flex-col justify-around">
        <BotonSideBar nombre="Home" ruta="/Inside" icono="fas fa-home" color="bg-yellow-300" />
        <BotonSideBar nombre="Productos" ruta="/ProductosListar" icono="fas fa-gifts" color="bg-blue-500" />
        <BotonSideBar nombre="Crear Producto" ruta="/ProductosCrear" icono="fas fa-gift" color="bg-blue-400" />
        <BotonSideBar nombre="Ventas" ruta="/VentasListar" icono="far fa-list-alt" color="bg-red-500" />
        <BotonSideBar nombre="Crear venta" ruta="/VentasCrear" icono="fas fa-cart-arrow-down" color="bg-red-400" />
        <BotonSideBar nombre="Usuarios" ruta="/UsuariosListar" icono="fas fa-users" color="bg-green-500" />
      </ul>
    </nav>
  );
};


const BotonSideBar = ({ nombre, ruta, icono, color }) => {
  return (

    <Link to={ruta}>
      <li className={`px-1 m-4 text-white p-2 rounded ${color} flex items-center`}>
        <i className={`${icono} w-6`} />
        {nombre}
      </li>
    </Link>

  );
};

export default Sidebar;