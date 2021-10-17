import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';

const Productos = () => {

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Crear Producto');
    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState([]);


    useEffect(() => {

        const obtenerProductos = async () => {
            const options = { method: 'GET', url: 'http://localhost:5000/productos/' };

            await axios.request(options).then(function (response) {
                setProductos(response.data)
            })
                .catch(function (error) {
                    console.error(error);
                });
        };

        if (ejecutarConsulta) {
            obtenerProductos();
            setEjecutarConsulta(false);
        }

    }, [ejecutarConsulta]);

    useEffect(() => {
        if (mostrarTabla) {
            setEjecutarConsulta(true);
        }
    }, [mostrarTabla]);


    useEffect(() => {

        if (mostrarTabla) {
            setTextoBoton('+ Crear Producto')
        } else {
            setTextoBoton('Mostrar Productos')
        }

    }, [mostrarTabla]);


    return (
        <div className='w-5/6'>
            <div className=' my-4 w-full  p-2'>
                <span className='text-gray-600 p-2 w-full text-2xl'>Administracion de Productos</span>
            </div>
            <div className='w-full flex justify-end'>
                <button
                    onClick={() => {
                        setMostrarTabla(!mostrarTabla);
                    }}
                    className='text-white bg-green-500 p-3 rounded-lg bottom-4 hover:bg-green-600 '>{textoBoton}</button>
            </div>
            <div>
                {mostrarTabla ? (
                    <TablaProductos listaProductos={productos} setEjecutarConsulta={setEjecutarConsulta} />
                ) : (
                    <FormularioCreacionProductos setMostrarTabla={setMostrarTabla} />
                )}
                <ToastContainer position='bottom-center' autoClose={2000} />
            </div>
        </div>
    );
};

const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {

    const form = useRef(null);

    const sumitEdit = (e) => {
    }

    return (
        <div className='w-full h-full flex flex-col overflow-hidden'>
            <h2 className='text-lg font-medium leading-6 text-gray-900 p-3'>Listado de Productos</h2>
            <br />
            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                    <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-3'>
                        <h1>Búsqueda</h1>
                        <form>
                            <div className='my-6 row flex flex-row justify-evenly items-center'>
                                <label htmlFor='id_producto' className='labelSearch'>
                                    Id. Producto
                                </label>
                                <input type='text' name='id_producto' id='id_producto' className='inputSearch' required />
                                <label htmlFor='descripcion_producto' className='labelSearch'>
                                    Nombre Producto
                                </label>
                                <input
                                    type='text'
                                    name='descripcion_producto'
                                    id='descripcion_producto'
                                    autoComplete='descripcion_producto'
                                    className='inputSearch' required
                                />
                                <label htmlFor='estado' className='labelSearch'>
                                    Estado
                                </label>
                                <select id='estado' name='estado' autoComplete='estado' className='inputSearch' required>
                                    <option>Disponible</option>
                                    <option>No Disponible</option>
                                </select>
                                <button type='submit' className='searchButton'>
                                    Buscar
                                </button>
                            </div>

                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-300'>
                                    <tr>
                                        <th scope='col' className='labelTable'>
                                            ID Producto
                                        </th>
                                        <th scope='col' className='labelTable'>
                                            Nombre Producto
                                        </th>
                                        <th scope='col' className='labelTable'>
                                            Valor Producto
                                        </th>
                                        <th scope='col' className='labelTable'>
                                            Estado
                                        </th>
                                        <th scope='col' className='labelTable'>
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200'>
                                    {listaProductos.map((producto) => (
                                        <FilaPoducto key={nanoid()} producto={producto} setEjecutarConsulta={setEjecutarConsulta} />
                                    ))}
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
            <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
                <div className='flex-1 flex justify-between sm:hidden'>
                    <a
                        href='#'
                        className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
                        Anterior
                    </a>
                    <a
                        href='#'
                        className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
                        Siguiente
                    </a>
                </div>
                <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
                    <div>
                        <p className='text-sm text-gray-700'>
                            Mostrando <span className='font-medium'>1</span> - <span className='font-medium'>1</span> de{' '}
                            <span className='font-medium'>1</span> resultados
                        </p>
                    </div>
                    <div>
                        <nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
                            <a
                                href='#'
                                className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                                <span className='sr-only'>Anterior</span>
                                <div className='h-5 w-5' aria-hidden='true'>
                                    &#60;
                                </div>
                            </a>
                            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                            <a
                                href='#'
                                aria-current='page'
                                className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'>
                                1
                            </a>
                            <a
                                href='#'
                                className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                                <span className='sr-only'>Siguiente</span>
                                <div className='h-5 w-5' aria-hidden='true'>
                                    &#62;
                                </div>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};


const FilaPoducto = ({ producto, setEjecutarConsulta }) => {

    //console.log(producto);

    const [edit, setEdit] = useState(false);

    const [nuevoProducto, setnuevoProducto] = useState({
        id_producto: producto.id_producto,
        descripcion: producto.descripcion,
        precio_unitario: producto.precio_unitario,
        estado: producto.estado,
    });


    const actualizarVehiculo = async () => {
        console.log(nuevoProducto);

        const options = {
            method: 'PATCH',
            url: `http://localhost:5000/productos/${producto._id}`,
            headers: { 'Content-Type': 'application/json' },
            data: { ...nuevoProducto }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("Producto Moficado con exito");
            setEjecutarConsulta(true);
            setEdit(false);
        }).catch(function (error) {
            console.error(error);
            toast.error("El Producto no se pudo modificar");
        });


    };

    const eliminarVehiculo = async () => {

        const options = {
            method: 'DELETE',
            url: `http://localhost:5000/productos/${producto._id}`,
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("Producto Eliminado con exito");
            setEjecutarConsulta(true);
        }).catch(function (error) {
            console.error(error);
            toast.error("El Producto no se pudo eliminar");
        });
    }


    return (
        <tr>
            {edit ?
                <>
                    <td className='p-4'> <input type="number" value={nuevoProducto.id_producto} className='w-full p-1 rounded-md text-gray-600 border-gray-400'
                        onChange={(e) => setnuevoProducto({ ...nuevoProducto, id_producto: e.target.value })}></input></td>
                    <td className='p-4'> <input type="text" value={nuevoProducto.descripcion} className='w-full p-1 rounded-md text-gray-600 border-gray-400'
                        onChange={(e) => setnuevoProducto({ ...nuevoProducto, descripcion: e.target.value })}></input></td>
                    <td className='p-4'> <input type="number" value={nuevoProducto.precio_unitario} className='w-full p-1 rounded-md text-gray-600 border-gray-400'
                        onChange={(e) => setnuevoProducto({ ...nuevoProducto, precio_unitario: e.target.value })}></input></td>
                    <td className='p-4'> <select id='estado' value={nuevoProducto.estado} name='estado' className='w-full p-1 rounded-md text-gray-600 border-gray-400' required defaultValue={0}
                        onChange={(e) => setnuevoProducto({ ...nuevoProducto, estado: e.target.value })}>
                        <option disabled value={0}>Seleccione una Opcion</option>
                        <option>Disponible</option>
                        <option>No Disponible</option>
                    </select>
                    </td>
                </>
                :
                <>
                    <td className='spaceTable resultTable text-gray-900 font-medium '>{producto.id_producto}</td>
                    <td className='spaceTable resultTable'>{producto.descripcion}</td>
                    <td className='spaceTable resultTable'>{producto.precio_unitario}</td>
                    <td className='spaceTable resultTable'>{producto.estado}</td>
                </>
            }

            <td className='resultTable spaceTable font-medium'>
                <div className='flex w-full justify-around'>
                    {edit ? (

                        <i onClick={() => actualizarVehiculo()} className='fas fa-check text-green-600 hover:text-green-300' />

                    ) :
                        (
                            <i onClick={() => setEdit(!edit)} className='fas fa-pencil-alt text-yellow-600 hover:text-yellow-300' />
                        )
                    }

                    <i onClick={() => eliminarVehiculo()} className='fas fa-trash text-red-600 hover:text-red-300'></i>
                </div>
            </td>
        </tr>

    );
}

const FormularioCreacionProductos = ({ setMostrarTabla }) => {

    const form = useRef(null);

    const sumitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevoProducto = {};

        fd.forEach((value, key) => {
            nuevoProducto[key] = value;
        });

        console.log(nuevoProducto);
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/productos/',
            headers: { 'Content-Type': 'application/json' },
            data: { id_producto: nuevoProducto.id_producto, descripcion: nuevoProducto.descripcion, precio_unitario: nuevoProducto.precio_unitario, estado: nuevoProducto.estado },
        };

        console.log('option ejecutados');

        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });

        console.log('enviado');
        toast.success("producto agregado con exito");
        setMostrarTabla(true);
    };

    return (
        <div className='grid justify-items-center'>
            <div className='my-3'>
                <h2 className='text-lg font-medium text-gray-600'>Nuevo Producto</h2>
            </div>
            <div className='my-3'>
                <form ref={form} onSubmit={sumitForm}>
                    <div className='shadow overflow-hidden sm:rounded-md p-3'>
                        <div className='grid grid-cols-1'>
                            <div>
                                <label className=' tracking-wide mb-2 text-gray-600' htmlFor='id'>
                                    Id. Producto
                                </label>
                                <input type='number' name='id_producto' id='id_producto' className='inputTextE ' required />
                            </div>
                            <div>
                                <label className=' tracking-wide mb-2 text-gray-600' htmlFor='Descripcion'>
                                    Descripcion Producto
                                </label>
                                <input type='text' name='descripcion' id='descripcion' className='inputTextE' required />
                            </div>
                            <div>
                                <label className=' tracking-wide mb-2 text-gray-600' htmlFor='ValorUnitario'>
                                    Valor Unitario
                                </label>
                                <input type='number' name='precio_unitario' id='precio_unitario' className='inputTextE' required />
                            </div>

                            <div>
                                <label className=' tracking-wide mb-2 text-gray-600' htmlFor='estado'>
                                    Estado Producto
                                </label>
                                <select id='estado' name='estado' className='inputTextE text-gray-600' required defaultValue={0}>
                                    <option disabled value={0}>Seleccione una Opcion</option>
                                    <option>Disponible</option>
                                    <option>No Disponible</option>
                                </select>
                            </div>
                            <div className='my-8'>
                                <button type='submit' className='w-full bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600'>
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};


export default Productos
