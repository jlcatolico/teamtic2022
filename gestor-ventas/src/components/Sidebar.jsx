import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Logo from 'Media/Toys.png';
import useActiveRoute from 'hooks/useActiveRoute';

const Sidebar = () => {
	return (
		<nav className='hidden md:flex md:w-50 bg-gray-100 border border-gray-300 p-2 flex flex-col'>
			<div className='px-4'>
				<img alt='...' src={Logo} className='max-w-200-px my-2' />
			</div>
			<ul className='flex flex-col'>
				<BotonSideBar nombre='Home' ruta='/Inside' icono='fas fa-home' />
				<BotonSideBar nombre='Productos' ruta='/Productos' icono='fas fa-gifts' />
				<BotonSideBar nombre='Ventas' ruta='/VentasListar' icono='far fa-list-alt' />
				<BotonSideBar nombre='Usuarios' ruta='/Usuarios' icono='fas fa-users' />
			</ul>
		</nav>
	);
};

const BotonSideBar = ({nombre, ruta, icono}) => {
	const isActive = useActiveRoute(ruta);
	const color = 'pink';

	return (
		<Link to={ruta}>
			<li className={`px-1 m-2 text-white p-2 rounded-lg bg-${isActive ? 'yellow' : 'gray'}-400 hover:bg-${color}-600 flex items-center`}>
				<i className={`${icono} w-6`} />
				{nombre}
			</li>
		</Link>
	);
};

export default Sidebar;
