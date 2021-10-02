import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxes, faHome, faSearchDollar, faUsers } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <nav className="w-auto border border-gray-700 bg-gray-700 h-full p-2 justify">
      <ul className="flex flex-col h-full justify-start justify-around">
        <li className="px-3 m-3">
          <Link to="/Inside">
            <a className="text-white p-2 rounded bg-red-400 flex items-stretch">
              <FontAwesomeIcon icon={faHome} className="m-1" />
              Home
            </a>
          </Link>
        </li>
        <li className="px-3 m-3">
          <Link to="/ProductosListar">
            <a className="text-white p-2 rounded bg-blue-500 flex items-stretch">
              <FontAwesomeIcon icon={faBoxes} className='m-1'/>
              Productos
            </a>
          </Link>
        </li>
        <li className="px-3 m-3">
          <Link to="/VentasListar">
            <a className="text-white p-2 rounded bg-yellow-500 flex items-stretch">
              <FontAwesomeIcon icon={faSearchDollar} className='m-1'/>
              Ventas
            </a>
          </Link>
        </li>
        <li className="px-3 m-3">
          <Link to="/UsuariosListar">
            <a className="text-white p-2 rounded bg-green-600 flex items-stretch">
              <FontAwesomeIcon icon={faUsers} className='m-1'/>
              Usuarios
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
