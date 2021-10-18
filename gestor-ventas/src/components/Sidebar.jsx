import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Logo from 'Media/Toys.png';
import useActiveRouter from 'hooks/useActiveRouter';

const Sidebar = () => {
	return (
		<nav className='hidden md:flex md:w-50 bg-gray-600 p-2 flex flex-col'>
			<div className='px-4'>
				<img alt='...' src={Logo} className='max-w-200-px my-2' />
			</div>
			<ul className='flex flex-col'>
				<BotonSideBar nombre='Home' ruta='/Inside' icono='fas fa-home' color='red' />
				<BotonSideBar nombre='Productos' ruta='/Productos' icono='fas fa-gifts' color='red' />
				<BotonSideBar nombre='Ventas' ruta='/VentasListar' icono='far fa-list-alt' color='red' />
				<BotonSideBar nombre='Usuarios' ruta='/Usuarios' icono='fas fa-users' color='red' />
			</ul>
		</nav>
	);
};

const BotonSideBar = ({nombre, ruta, icono, color}) => {
	const isActive = useActiveRouter(ruta);
	return (
		<Link to={ruta}>
			<li className={`px-1 m-2 text-white p-2 rounded-lg bg-${color}-500 hover:bg-${color}-900 flex items-center`}>
				<i className={`${icono} w-6`} />
				{nombre}
			</li>
		</Link>
	);
};

export default Sidebar;
