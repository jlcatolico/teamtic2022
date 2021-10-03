import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='bg-gray-300'>
            <ul className='flex w-full justify-evenly  p-1 items-center'>
                <li>Navegación1</li>
                <li>Navegación2</li>
                <li className='px-1'>
                    <Link to='/Index'>
                        <button className='bg-red-700 p-1 text-white rounded-md hover:bg-red-900'>
                            Logout
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
