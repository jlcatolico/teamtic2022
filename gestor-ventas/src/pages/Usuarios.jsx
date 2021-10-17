import {Link} from 'react-router-dom';
import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid';

const Usuarios = () => {
	const [mostrarTabla, setMostrarTabla] = useState(true);
	const [textoBoton, setTextoBoton] = useState('Crear Usuario');
	const [usuarios, setUsuarios] = useState([]);

	useEffect(() => {
		if (mostrarTabla) {
			const options = {method: 'GET', url: 'http://localhost:5000/usuarios/'};

			axios
				.request(options)
				.then(function (response) {
					setUsuarios(response.data);
				})
				.catch(function (error) {
					console.error(error);
				});
		}
	}, [mostrarTabla]);

	useEffect(() => {
		if (mostrarTabla) {
			setTextoBoton('+ Crear Usuario');
		} else {
			setTextoBoton('Mostrar Usuarios');
		}
	}, [mostrarTabla]);

	return (
		<div className='w-5/6'>
			<div className=' my-4 w-full  p-2'>
				<span className='text-gray-600 p-2 w-full text-2xl'>Administracion de Usuarios</span>
			</div>
			<div className='w-full flex justify-end'>
				<button
					onClick={() => {
						setMostrarTabla(!mostrarTabla);
					}}
					className='text-white bg-green-500 p-3 rounded-lg bottom-4 hover:bg-green-600 '>
					{textoBoton}
				</button>
			</div>
			<div>
				{mostrarTabla ? <TablaUsuarios listaUsuarios={usuarios} setUsuarios={setUsuarios} /> : <FormularioCreacionUsuarios setMostrarTabla={setMostrarTabla} />}
				<ToastContainer position='bottom-center' autoClose={2000} />
			</div>
		</div>
	);
};

const TablaUsuarios = ({listaUsuarios, setUsuarios}) => {
	const form = useRef(null);

	const sumitEdit = (e) => {};

	return (
		<div className='w-full h-full flex flex-col overflow-hidden'>
			<h2 className='text-lg font-medium leading-6 text-gray-900 p-3'>Listado de Usuarios</h2>
			<br />
			<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
					<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-3'>
						<h1>Búsqueda</h1>
						<form>
							<div className='my-6 row flex flex-row justify-evenly items-center'>
								<label htmlFor='correo' className='labelSearch'>
									Correo
								</label>
								<input type='email' name='correo' id='correo' autoComplete='correo' className='inputSearch' />
								<label htmlFor='rol' className='labelSearch'>
									Rol
								</label>
								<select id='rol' name='rol' autoComplete='rol' className='inputSearch'>
									<option disabled value={0}>
										Seleccionar
									</option>
									<option>Administrador</option>
									<option>Vendedor</option>
								</select>
								<label htmlFor='estado' className='labelSearch'>
									Estado
								</label>
								<select id='estado' name='estado' autoComplete='estado' className='inputSearch'>
									<option disabled value={0}>
										Seleccionar
									</option>
									<option>Pendiente</option>
									<option>Activo</option>
									<option>Inactivo</option>
								</select>
								<button type='submit' className='searchButton'>
									Buscar
								</button>
							</div>

							<table className='min-w-full divide-y divide-gray-200'>
								<thead className='bg-gray-50'>
									<tr>
										<th scope='col' className='labelTable'>
											ID Usuario
										</th>
										<th scope='col' className='labelTable'>
											Nombre
										</th>
										<th scope='col' className='labelTable'>
											Correo
										</th>
										<th scope='col' className='labelTable'>
											Estado
										</th>
										<th scope='col' className='labelTable'>
											Rol
										</th>
										<th scope='col' className='labelTable'>
											Acciones
										</th>
									</tr>
								</thead>
								<tbody className='bg-white divide-y divide-gray-200'>
									{listaUsuarios.map((usuario) => (
										<FilaUsuarios key={nanoid()} usuario={usuario} />
									))}
								</tbody>
							</table>
						</form>
					</div>
				</div>
			</div>
			<div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
				<div className='flex-1 flex justify-between sm:hidden'>
					<a href='#' className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
						Anterior
					</a>
					<a href='#' className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
						Siguiente
					</a>
				</div>
				<div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
					<div>
						<p className='text-sm text-gray-700'>
							Mostrando <span className='font-medium'>1</span> - <span className='font-medium'>1</span> de <span className='font-medium'>1</span> resultados
						</p>
					</div>
					<div>
						<nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
							<a href='#' className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
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
							<a href='#' className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
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

const FilaUsuarios = ({usuario}) => {
	const [edit, setEdit] = useState(false);

	const actualizarUsuario = () => {};

	return (
		<tr>
			{edit ? (
				<>
					<td className='p-4'>
						<input type='text' defaultValue={usuario.identificacion} className='listado'></input>
					</td>
					<td className='p-4'>
						<input type='text' defaultValue={usuario.nombre} className='listado'></input>
					</td>
					<td className='p-4'>
						<input type='text' defaultValue={usuario.correo} className='listado'></input>
					</td>
					<td className='p-4'>
						<select id='estado' defaultValue={usuario.estado} name='estado' className='listado' required defaultValue={0}>
							<option disabled value={0}>
								Seleccione una Opcion
							</option>
							<option>Pendiente</option>
							<option>Activo</option>
							<option>Inactivo</option>
						</select>
					</td>
					<td className='p-4'>
						<select id='estado' defaultValue={usuario.rol} name='rol' className='listado' required defaultValue={0}>
							<option disabled value={0}>
								Seleccione una Opcion
							</option>
							<option>Administrador</option>
							<option>Vendedor</option>
						</select>
					</td>
				</>
			) : (
				<>
					<td className='spaceTable resultTable text-gray-900 font-medium '>{usuario.identificacion}</td>
					<td className='spaceTable resultTable'>{usuario.nombre}</td>
					<td className='spaceTable resultTable'>{usuario.correo}</td>
					<td className='spaceTable resultTable'>{usuario.rol}</td>
				</>
			)}

			<td className='resultTable spaceTable font-medium'>
				<div className='flex w-full justify-around'>
					{edit ? (
						<i onClick={() => actualizarUsuario()} className='fas fa-check text-green-600 hover:text-green-300' />
					) : (
						<i onClick={() => setEdit(!edit)} className='fas fa-pencil-alt text-yellow-600 hover:text-yellow-300' />
					)}

					<i className='fas fa-trash text-red-600 hover:text-red-300'></i>
				</div>
			</td>
		</tr>
	);
};

const FormularioCreacionUsuarios = ({setMostrarTabla}) => {
	const form = useRef(null);

	const sumitForm = async (e) => {
		e.preventDefault();
		const fd = new FormData(form.current);
		const nuevoUsuario = {};

		fd.forEach((value, key) => {
			nuevoUsuario[key] = value;
		});

		console.log(nuevoUsuario);
		const options = {
			method: 'POST',
			url: 'http://localhost:5000/usuarios/',
			headers: {'Content-Type': 'application/json'},
			data: {
				identificacion: nuevoUsuario.identificacion,
				descripcion: nuevoUsuario.nombre,
				precio_unitario: nuevoUsuario.correo,
				estado: nuevoUsuario.rol,
			},
		};

		console.log('option ejecutados');

		await axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				toast.success('Usuario agregado con exito');
			})
			.catch(function (error) {
				console.error(error);
				toast.error('Error creando usuario');
			});

		setMostrarTabla(true);
	};

	return (
		<div className='grid justify-items-center'>
			<div className='my-3'>
				<h2 className='text-lg font-medium text-gray-600'>Nuevo Usuario</h2>
			</div>
			<div className='my-3'>
				<form ref={form} onSubmit={sumitForm}>
					<div className='shadow overflow-hidden sm:rounded-md p-3'>
						<div className='grid grid-cols-1'>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='id'>
									Id. Usuario
								</label>
								<input type='number' name='identificacion' id='identificacion' className='inputTextE ' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='Descripcion'>
									Nombre
								</label>
								<input type='text' name='descripcion' id='descripcion' className='inputTextE' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='ValorUnitario'>
									Correo
								</label>
								<input type='number' name='precio_unitario' id='precio_unitario' className='inputTextE' required />
							</div>

							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='estado'>
									Estado Usuario
								</label>
								<select id='estado' name='estado' className='inputTextE text-gray-600' required defaultValue={0}>
									<option disabled value={0}>
										Seleccione una Opcion
									</option>
									<option>Pendiente</option>
									<option>Activo</option>
									<option>Inactivo</option>
								</select>
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='estado'>
									Rol
								</label>
								<select id='estado' name='estado' className='inputTextE text-gray-600' required defaultValue={0}>
									<option disabled value={0}>
										Seleccione una Opcion
									</option>
									<option>Administrador</option>
									<option>Vendedor</option>
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

export default Usuarios;
