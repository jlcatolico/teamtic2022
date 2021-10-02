import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='bg-green-400'>
            <ul className='flex w-full justify-between p-2'>
                <i className='fas fa-clipboard-check'></i>
                <li>Navegación1</li>
                <li>Navegación2</li>
                <li className='px-3'>
                    <Link to='/login'>
                        <button className='bg-blue-700 p-1 text-white rounded-md hover:bg-blue-900'>
                            Iniciar sesión
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
