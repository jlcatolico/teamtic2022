import {Link} from 'react-router-dom';
import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid';

const Ventas = () => {
	const [mostrarTabla, setMostrarTabla] = useState(true);
	const [textoBoton, setTextoBoton] = useState('Crear Venta');
	const [ventas, setVentas] = useState([]);
	const [ejecutarConsulta, setEjecutarConsulta] = useState([]);

	useEffect(() => {
		const obtenerVentas = async () => {
			const options = {method: 'GET', url: 'http://localhost:5000/ventas/'};

			await axios
				.request(options)
				.then(function (response) {
					setVentas(response.data);
				})
				.catch(function (error) {
					console.error(error);
				});
		};

		if (ejecutarConsulta) {
			obtenerVentas();
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
			setTextoBoton('+ Crear Venta');
		} else {
			setTextoBoton('Mostrar Ventas');
		}
	}, [mostrarTabla]);

	return (
		<div className='w-11/12'>
			<div className='flex justify-evenly'>
				<div className=' my-4 p-2 w-4/6'>
					<span className='p-2 w-full text-2xl'>Administracion de Ventas</span>
				</div>
				<div className=' w-2/6 flex items-center'>
					<div className='w-full flex justify-end items-center'>
						<button
							onClick={() => {
								setMostrarTabla(!mostrarTabla);
							}}
							className='text-white bg-green-500 p-2 rounded-lg hover:bg-green-600 mx-4 '>
							{textoBoton}
						</button>
					</div>
				</div>
			</div>
			<div>
				{mostrarTabla ? <TablaVentas listaVentas={ventas} setEjecutarConsulta={setEjecutarConsulta} /> : <FormularioCreacionVentas setMostrarTabla={setMostrarTabla} />}
				<ToastContainer position='bottom-center' autoClose={2000} />
			</div>
		</div>
	);
};

const TablaVentas = ({listaVentas, setEjecutarConsulta}) => {
	const form = useRef(null);

	const sumitEdit = (e) => {};

	return (
		<div className='w-full h-full flex flex-col overflow-hidden'>
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
											Identificación
										</th>
										<th scope='col' className='labelTable'>
											Nombre
										</th>
										<th scope='col' className='labelTable'>
											Apellido
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
									{listaVentas.map((venta) => (
										<FilaVentas key={nanoid()} venta={venta} setEjecutarConsulta={setEjecutarConsulta} />
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

const FilaVentas = ({venta, setEjecutarConsulta}) => {
	const [edit, setEdit] = useState(false);

	const [nuevoVenta, setnuevoVenta] = useState({
		identificacion: venta.identificacion,
		nombre: venta.nombre,
		apellido: venta.apellido,
		correo: venta.correo,
		estado: venta.estado,
		rol: venta.rol,
	});

	const actualizarVenta = async () => {
		console.log(nuevoVenta);

		const options = {
			method: 'PATCH',
			url: `http://localhost:5000/ventas/${venta._id}`,
			headers: {'Content-Type': 'application/json'},
			data: {...nuevoVenta},
		};

		await axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				toast.success('Venta Moficado con exito');
				setEjecutarConsulta(true);
				setEdit(false);
			})
			.catch(function (error) {
				console.error(error);
				toast.error('El venta no se pudo modificar');
			});
	};

	const eliminarVenta = async () => {
		const options = {
			method: 'DELETE',
			url: `http://localhost:5000/ventas/${venta._id}`,
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				toast.success('Venta Eliminado con exito');
				setEjecutarConsulta(true);
			})
			.catch(function (error) {
				console.error(error);
				toast.error('El venta no se pudo eliminar');
			});
	};

	return (
		<tr>
			{edit ? (
				<>
					<td className='p-4'>
						<input
							type='number'
							value={nuevoVenta.identificacion}
							className='inputSearch'
							onChange={(e) => setnuevoVenta({...nuevoVenta, identificacion: e.target.value})}></input>
					</td>
					<td className='p-4'>
						<input type='text' value={nuevoVenta.nombre} className='listado' onChange={(e) => setnuevoVenta({...nuevoVenta, nombre: e.target.value})}></input>
					</td>
					<td className='p-4'>
						<input type='text' value={nuevoVenta.apellido} className='listado' onChange={(e) => setnuevoVenta({...nuevoVenta, apellido: e.target.value})}></input>
					</td>
					<td className='p-4'>
						<input type='email' value={nuevoVenta.correo} className='listado' onChange={(e) => setnuevoVenta({...nuevoVenta, correo: e.target.value})}></input>
					</td>
					<td className='p-4'>
						<select
							id='estado'
							value={nuevoVenta.estado}
							name='estado'
							className='listado'
							onChange={(e) => setnuevoVenta({...nuevoVenta, estado: e.target.value})}
							required //revisar, creo que no es necesario
							defaultValue={0}>
							<option disabled value={0}>
								Seleccione una Opcion
							</option>
							<option>Pendiente</option>
							<option>Activo</option>
							<option>Inactivo</option>
						</select>
					</td>
					<td className='p-4'>
						<select
							id='estado'
							value={nuevoVenta.rol}
							name='rol'
							className='listado'
							onChange={(e) => setnuevoVenta({...nuevoVenta, rol: e.target.value})}
							required
							defaultValue={0}>
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
					<td className='spaceTable resultTable text-gray-900 font-medium '>{venta.identificacion}</td>
					<td className='spaceTable resultTable'>{venta.nombre}</td>
					<td className='spaceTable resultTable'>{venta.apellido}</td>
					<td className='spaceTable resultTable'>{venta.correo}</td>
					<td className='spaceTable resultTable'>{venta.estado}</td>
					<td className='spaceTable resultTable'>{venta.rol}</td>
				</>
			)}

			<td className='resultTable spaceTable font-medium'>
				<div className='flex w-full justify-around'>
					{edit ? (
						<i onClick={() => actualizarVenta()} className='fas fa-check text-green-600 hover:text-green-300' />
					) : (
						<i onClick={() => setEdit(!edit)} className='fas fa-pencil-alt text-yellow-600 hover:text-yellow-300' />
					)}

					<i onClick={() => eliminarVenta()} className='fas fa-trash text-red-600 hover:text-red-300'></i>
				</div>
			</td>
		</tr>
	);
};

const FormularioCreacionVentas = ({setMostrarTabla}) => {
	const form = useRef(null);

	const sumitForm = async (e) => {
		e.preventDefault();
		const fd = new FormData(form.current);
		const nuevoVenta = {};

		fd.forEach((value, key) => {
			nuevoVenta[key] = value;
		});

		console.log(nuevoVenta);
		const options = {
			method: 'POST',
			url: 'http://localhost:5000/ventas/',
			headers: {'Content-Type': 'application/json'},
			data: {
				identificacion: nuevoVenta.identificacion,
				nombre: nuevoVenta.nombre,
				apellido: nuevoVenta.apellido,
				correo: nuevoVenta.correo,
				estado: nuevoVenta.estado,
				rol: nuevoVenta.rol,
			},
		};

		console.log('option ejecutados');

		await axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});

		console.log('enviado');
		toast.success('Venta agregado con exito');
		setMostrarTabla(true);
	};

	return (
		<div className='grid justify-items-center'>
			<div className='my-3'>
				<h2 className='text-lg font-medium text-gray-600'>Nuevo Venta</h2>
			</div>
			<div className='my-3'>
				<form ref={form} onSubmit={sumitForm}>
					<div className='shadow overflow-hidden sm:rounded-md p-3'>
						<div className='grid grid-cols-1'>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='id'>
									Identificación
								</label>
								<input type='number' name='identificacion' id='identificacion' className='inputTextE ' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='Descripcion'>
									Nombre
								</label>
								<input type='text' name='nombre' id='nombre' className='inputTextE' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='Descripcion'>
									Apellido
								</label>
								<input type='text' name='apellido' id='apellido' className='inputTextE' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='ValorUnitario'>
									Correo
								</label>
								<input type='email' name='correo' id='correo' className='inputTextE' required />
							</div>

							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='estado'>
									Estado
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
								<select id='rol' name='rol' className='inputTextE text-gray-600' required defaultValue={0}>
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

export default Ventas;
