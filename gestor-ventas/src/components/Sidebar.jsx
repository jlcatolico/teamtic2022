import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from 'Media/Toys.png';
import useActiveRouter from 'hooks/useActiveRouter';

const Sidebar = () => {
  return (

    <nav className="w-72 border border-gray-300 bg-white p-2 justify">
      <div className="px-4">
        <img alt='...' src={Logo} className='max-w-200-px' />
      </div>
      <ul className="flex flex-col justify-around">
        <BotonSideBar nombre="Home" ruta="/Inside" icono="fas fa-home" color="bg-orange-500" />
        <BotonSideBar nombre="Productos" ruta="/Productos" icono="fas fa-gifts" color="bg-orange-500" />
        <BotonSideBar nombre="Ventas" ruta="/VentasListar" icono="far fa-list-alt" color="bg-orange-500" />
        <BotonSideBar nombre="Usuarios" ruta="/UsuariosListar" icono="fas fa-users" color="bg-orange-500" />
      </ul>
    </nav>
  );
};


const BotonSideBar = ({ nombre, ruta, icono, color }) => {
  const isActive = useActiveRouter(ruta);
  return (

    <Link to={ruta}>
      <li className={`px-1 m-4 text-white p-2 rounded-lg ${color} flex items-center`}>
        <i className={`${icono} w-6`} />
        {nombre}
      </li>
    </Link>

  );
};

export default Sidebar;