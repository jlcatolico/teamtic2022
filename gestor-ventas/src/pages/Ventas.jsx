import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { crearVenta } from 'utils/api';
import { obtenerProductos } from 'utils/api';
import { obtenerUsuarios } from 'utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ventas = () => {
	const form = useRef(null);
	const [vendedores, setVendedores] = useState([]);
	const [productos, setProductos] = useState([]);
	const [productosTabla, setProductosTabla] = useState([]);

	const [mostrarTabla, setMostrarTabla] = useState(true);
	const [textoBoton, setTextoBoton] = useState('Crear Venta');
	const [ventas, setVentas] = useState([]);
	const [ejecutarConsulta, setEjecutarConsulta] = useState([]);

	useEffect(() => {
		const fetchVendores = async () => {
			await obtenerUsuarios(
				(response) => {
					setVendedores(response.data);
				},
				(error) => {
					console.error(error);
				}
			);
		};
		const fetchProductos = async () => {
			await obtenerProductos(
				(response) => {
					setProductos(response.data);
				},
				(error) => {
					console.error(error);
				}
			);
		};

		fetchVendores();
		fetchProductos();
	}, []);

	// useEffect(() => {
	// 	const obtenerVentas = async () => {
	// 		const options = { method: 'GET', url: 'http://localhost:5000/ventas/' };

	// 		await axios
	// 			.request(options)
	// 			.then(function (response) {
	// 				setVentas(response.data);
	// 			})
	// 			.catch(function (error) {
	// 				console.error(error);
	// 			});
	// 	};

	// 	if (ejecutarConsulta) {
	// 		obtenerVentas();
	// 		setEjecutarConsulta(false);
	// 	}
	// }, [ejecutarConsulta]);

	// useEffect(() => {
	// 	if (mostrarTabla) {
	// 		setEjecutarConsulta(false);
	// 	}
	// }, [mostrarTabla]);

	// useEffect(() => {
	// 	if (mostrarTabla) {
	// 		setTextoBoton('+ Crear Venta');
	// 	} else {
	// 		setTextoBoton('Mostrar Ventas');
	// 	}
	// }, [mostrarTabla]);

	const submitForm = async (e) => {
		e.preventDefault();
		const fd = new FormData(form.current);

		const formData = {};
		fd.forEach((value, key) => {
			formData[key] = value;
		});

		console.log('form data', formData);

		const listaProductos = Object.keys(formData)
			.map((k) => {
				if (k.includes('producto')) {
					return productosTabla.filter((v) => v._id === formData[k])[0];
				}
				return null;
			})
			.filter((v) => v);

		console.log('lista antes de cantidad', listaProductos);

		Object.keys(formData).forEach((k) => {
			if (k.includes('cantidad')) {
				const indice = parseInt(k.split('_')[1]);
				listaProductos[indice]['cantidad'] = formData[k];
			}
		});

		console.log('lista después de cantidad', listaProductos);

		const datosVenta = {
			vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
			cantidad: formData.valor_venta,
			productos: listaProductos,
		};

		console.log('lista productos', listaProductos);

		const options = {
			method: 'POST',
			url: 'http://localhost:5000/ventas/',
			headers: { 'Content-Type': 'application/json' },
			data: datosVenta,
		};

		console.log('option ejecutados');

		await axios.request(options)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log('error');
				console.error(error);
			});
		console.log('enviado');
		toast.success('venta agregada con exito');
	};

	return (
		<div>
			<div className=' w-5/6 flex items-center'>
				<div className='w-full flex justify-end items-center'>
					<button onClick={() => {
						setMostrarTabla(!mostrarTabla);
					}}
						className='text-white bg-green-500 p-2 rounded-lg hover:bg-green-600 mx-4 '>
						{textoBoton}
					</button>
				</div>
			</div>
			{/* <div>
				{mostrarTabla ? <TablaVentas listaVentas={ventas} setEjecutarConsulta={setEjecutarConsulta} /> : <FormularioCreacionVentas setMostrarTabla={setMostrarTabla} />}
				<ToastContainer position='bottom-center' autoClose={2000} />
			</div> */}

			<div className='grid justify-items-center'>
				<div className='my-3'>
					<h2 className='text-lg font-medium text-gray-600'>Nueva Venta</h2>
				</div>
				<div className='my-3'>
					<form ref={form} onSubmit={submitForm}>
						<div className='shadow overflow-hidden sm:rounded-md p-3'>
							<div className='grid grid-cols-1'>
								<div>
									<div className=''>
										<label className='tracking-wide mb-2' htmlFor='vendedor'>Vendedor</label>
										<select name='vendedor' className='inputTextE text-gray-600' defaultValue='' required>
											<option disabled value=''>
												Seleccione un Vendedor
											</option>
											{vendedores.map((el) => {
												return <option key={nanoid()} value={el._id}>{`${el.nombre} ${el.apellido}`}</option>;
											})}
										</select>
									</div>

									<TablaProductos productos={productos} setProductos={setProductos} setProductosTabla={setProductosTabla} />
									<div className='grid grid-cols-2'>
										<label className='tracking-wide mb-2'>Valor Total Venta
											{/* puede ser necesario un usefect */}
										</label>
										<label className='inputTextD'>0</label>
									</div>
									<button type='submit' className='searchButton bg-green-400 p-2 hover:bg-green-600'>
										Crear Venta
									</button>
								</div>
							</div>
						</div>
					</form>

				</div>
			</div>
		</div>
	);
};

const TablaProductos = ({ productos, setProductos, setProductosTabla }) => {
	const [productoAgregar, setProductoAgregar] = useState({});
	const [filasTabla, setFilasTabla] = useState([]);

	useEffect(() => {
		console.log(productoAgregar);
	}, [productoAgregar]);

	useEffect(() => {
		console.log('filasTabla', filasTabla);
		setProductosTabla(filasTabla);
	}, [filasTabla, setProductosTabla]);

	const agregarNuevoProducto = () => {
		setFilasTabla([...filasTabla, productoAgregar]);
		setProductos(productos.filter((v) => v._id !== productoAgregar._id));
		setProductoAgregar({});
	};

	const eliminarProducto = (productoEliminar) => {
		setFilasTabla(filasTabla.filter((v) => v._id !== productoEliminar._id));
		setProductos([...productos, productoEliminar]);
	};

	const modificarProducto = (producto, cantidad) => {
		setFilasTabla(
			filasTabla.map((ft) => {
				if (ft._id === producto.id) {
					ft.cantidad = cantidad;
					ft.total = producto.precio_unitario * cantidad;
				}
				return ft;
			})
		);
	};

	return (
		<div>
			<div className='flex justify align-middle '>
				<label className='flex flex-col' htmlFor='producto'>
					<select className='inputTextE text-gray-600' value={productoAgregar._id ?? ''} onChange={(e) => setProductoAgregar(productos.filter((v) => v._id === e.target.value)[0])}>
						<option disabled value=''>
							Seleccione un Producto
						</option>
						{productos.map((el) => {
							return (<option key={nanoid()} value={el._id}>{`${el.descripcion}`}</option>
							);
						})}
					</select>
				</label>
				<div className='flex items-center'>
					<button type='button' onClick={() => agregarNuevoProducto()} className='searchButton bg-green-400 p-2 hover:bg-green-600 mx-4'>
						Agregar Producto
					</button>
				</div>

			</div>
			<table className='tabla'>
				<thead>
					<tr>
						<th className='labelTable'>Id Producto</th>
						<th className='labelTable'>Descripcion</th>
						<th className='labelTable'>Valor unitario</th>
						<th className='labelTable'>Estado</th>
						<th className='labelTable'>Unidades</th>
						<th className='labelTable'>Costo</th>
						<th className='labelTable'>Eliminar</th>
						<th className='labelTable hidden'>Input</th>
					</tr>
				</thead>
				<tbody>
					{filasTabla.map((el, index) => {
						// return <FilaProducto key={el._id} prod={el} index={index} eliminarProducto={eliminarProducto} modificarProducto={modificarProducto} />;
						return (
							<tr key={nanoid()}>
								<td className='spaceTable resultTable'>{el.id_producto}</td>
								<td className='spaceTable resultTable'>{el.descripcion}</td>
								<td className='spaceTable resultTable text-right'>{el.precio_unitario}</td>
								<td className='spaceTable resultTable'>{el.estado}</td>
								<td className='spaceTable resultTable'>
									<label htmlFor={`cantidad${index}`}>
										<input type='number' name={`cantidad_${index}`} className='spacetable inputTextE w-20' />
									</label>
								</td>
								<td className='spaceTable resultTable'>Valor final
								</td>
								{/* <td>
									<label htmlFor={`precio_unitario_${index}`}>
										<input
											type='number'
											name={`total_${index}`}
											value={el.cantidad}
											onChange={(e) => {
												modificarProducto(el, e.target.value === '' ? '0' : e.target.value);
												setProducto({
													...producto,
													cantidad: e.target.value === '' ? '0' : e.target.value,
													total: parseFloat(producto.precio_unitario) * parseFloat(e.target.value === '' ? '0' : e.target.value),
												});
											}}
										/>
									</label>
								</td> */}
								<td className='spaceTable resultTable text-center'>
									<i
										onClick={() => eliminarProducto(el)}
										className='fas fa-minus text-red-500 cursor-pointer'
									/>
								</td>
								<input hidden defaultValue={el._id} name={`producto${index}`} />
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

// Fila producto está correcta, para crear

// const FilaProducto = ({ prod, index, eliminarProducto, modificarProducto }) => {
// 	const [producto, setProducto] = useState(prod);
// 	useEffect(() => {
// 		console.log('prod', producto);
// 	}, [producto]);

// 	return (
// 		<tr>
// 			<td>{producto.id_producto}</td>
// 			<td>{producto.descripcion}</td>
// 			<td>{producto.precio_unitario}</td>
// 			<td>{producto.estado}</td>
// 			<td>
// 				<label htmlFor={`precio_unitario_${index}`}>
// 					<input
// 						type='number'
// 						name={`cantidad_${index}`}
// 						value={producto.cantidad}
// 						onChange={(e) => {
// 							modificarProducto(producto, e.target.value === '' ? '0' : e.target.value);
// 							setProducto({
// 								...producto,
// 								cantidad: e.target.value === '' ? '0' : e.target.value,
// 								total: parseFloat(producto.precio_unitario) * parseFloat(e.target.value === '' ? '0' : e.target.value),
// 							});
// 						}}
// 					/>
// 				</label>
// 			</td>
// 			<td>{parseFloat(producto.total ?? 0)}</td>
// 			<td>
// 				<i onClick={() => eliminarProducto(producto)} className='fas fa-minus text-red-500 cursor-pointer' />
// 			</td>
// 			<td className='hidden'>
// 				<input hidden defaultValue={producto._id} name={`Producto_${index}`} />
// 			</td>
// 		</tr>
// 	);
// };
// const TablaVentas = ({listaVentas, setEjecutarConsulta}) => {
// 	const form = useRef(null);

// 	const sumitEdit = (e) => {};

// 	return (
// 		<div className='w-full h-full flex flex-col overflow-hidden'>
// 			<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
// 				<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
// 					<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-3'>
// 						<h1>Búsqueda</h1>
// 						<form>
// 							<div className='my-6 row flex flex-row justify-evenly items-center'>
// 								<label htmlFor='correo' className='labelSearch'>
// 									ID venta
// 								</label>
// 								<input type='email' name='correo' id='correo' autoComplete='correo' className='inputSearch' />
// 								<label htmlFor='rol' className='labelSearch'>
// 									Valor
// 								</label>
// 								<select id='rol' name='rol' autoComplete='rol' className='inputSearch'>
// 									<option disabled value={0}>
// 										Seleccionar
// 									</option>
// 									<option>Administrador</option>
// 									<option>Vendedor</option>
// 								</select>
// 								<label htmlFor='estado' className='labelSearch'>
// 									Estado
// 								</label>
// 								<select id='estado' name='estado' autoComplete='estado' className='inputSearch'>
// 									<option disabled value={0}>
// 										Seleccionar
// 									</option>
// 									<option>Pendiente</option>
// 									<option>Activo</option>
// 									<option>Inactivo</option>
// 								</select>
// 								<button type='submit' className='searchButton'>
// 									Buscar
// 								</button>
// 							</div>

// 							<table className='min-w-full divide-y divide-gray-200'>
// 								<thead className='bg-gray-50'>
// 									<tr>
// 										<th scope='col' className='labelTable'>
// 											Identificación
// 										</th>
// 										<th scope='col' className='labelTable'>
// 											Nombre
// 										</th>
// 										<th scope='col' className='labelTable'>
// 											Apellido
// 										</th>
// 										<th scope='col' className='labelTable'>
// 											Correo
// 										</th>
// 										<th scope='col' className='labelTable'>
// 											Estado
// 										</th>
// 										<th scope='col' className='labelTable'>
// 											Rol
// 										</th>
// 										<th scope='col' className='labelTable'>
// 											Acciones
// 										</th>
// 									</tr>
// 								</thead>
// 								<tbody className='bg-white divide-y divide-gray-200'>
// 									{listaUsuarios.map((usuario) => (
// 										<FilaUsuarios key={nanoid()} usuario={usuario} setEjecutarConsulta={setEjecutarConsulta} />
// 									))}
// 								</tbody>
// 							</table>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 			<div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
// 				<div className='flex-1 flex justify-between sm:hidden'>
// 					<a href='#' className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
// 						Anterior
// 					</a>
// 					<a href='#' className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
// 						Siguiente
// 					</a>
// 				</div>
// 				<div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
// 					<div>
// 						<p className='text-sm text-gray-700'>
// 							Mostrando <span className='font-medium'>1</span> - <span className='font-medium'>1</span> de <span className='font-medium'>1</span> resultados
// 						</p>
// 					</div>
// 					<div>
// 						<nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
// 							<a href='#' className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
// 								<span className='sr-only'>Anterior</span>
// 								<div className='h-5 w-5' aria-hidden='true'>
// 									&#60;
// 								</div>
// 							</a>
// 							{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
// 							<a
// 								href='#'
// 								aria-current='page'
// 								className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'>
// 								1
// 							</a>
// 							<a href='#' className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
// 								<span className='sr-only'>Siguiente</span>
// 								<div className='h-5 w-5' aria-hidden='true'>
// 									&#62;
// 								</div>
// 							</a>
// 						</nav>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// const FilaUsuarios = ({Ventas, setEjecutarConsulta}) => {
// 	const [edit, setEdit] = useState(false);

// 	const [nuevoUsuario, setnuevoUsuario] = useState({
// 		identificacion: usuario.identificacion,
// 		nombre: usuario.nombre,
// 		apellido: usuario.apellido,
// 		correo: usuario.correo,
// 		estado: usuario.estado,
// 		rol: usuario.rol,
// 	});

// 	const actualizarUsuario = async () => {
// 		console.log(nuevoUsuario);

// 		const options = {
// 			method: 'PATCH',
// 			url: `http://localhost:5000/usuarios/${usuario._id}`,
// 			headers: {'Content-Type': 'application/json'},
// 			data: {...nuevoUsuario},
// 		};

// 		await axios
// 			.request(options)
// 			.then(function (response) {
// 				console.log(response.data);
// 				toast.success('Usuario Moficado con exito');
// 				setEjecutarConsulta(true);
// 				setEdit(false);
// 			})
// 			.catch(function (error) {
// 				console.error(error);
// 				toast.error('El usuario no se pudo modificar');
// 			});
// 	};

// 	const eliminarUsuario = async () => {
// 		const options = {
// 			method: 'DELETE',
// 			url: `http://localhost:5000/usuarios/${usuario._id}`,
// 		};

// 		axios
// 			.request(options)
// 			.then(function (response) {
// 				console.log(response.data);
// 				toast.success('Usuario Eliminado con exito');
// 				setEjecutarConsulta(true);
// 			})
// 			.catch(function (error) {
// 				console.error(error);
// 				toast.error('El usuario no se pudo eliminar');
// 			});
// 	};

// 	return (
// 		<tr>
// 			{edit ? (
// 				<>
// 					<td className='p-4'>
// 						<input
// 							type='number'
// 							value={nuevoUsuario.identificacion}
// 							className='inputSearch'
// 							onChange={(e) => setnuevoUsuario({...nuevoUsuario, identificacion: e.target.value})}></input>
// 					</td>
// 					<td className='p-4'>
// 						<input type='text' value={nuevoUsuario.nombre} className='listado' onChange={(e) => setnuevoUsuario({...nuevoUsuario, nombre: e.target.value})}></input>
// 					</td>
// 					<td className='p-4'>
// 						<input type='text' value={nuevoUsuario.apellido} className='listado' onChange={(e) => setnuevoUsuario({...nuevoUsuario, apellido: e.target.value})}></input>
// 					</td>
// 					<td className='p-4'>
// 						<input type='email' value={nuevoUsuario.correo} className='listado' onChange={(e) => setnuevoUsuario({...nuevoUsuario, correo: e.target.value})}></input>
// 					</td>
// 					<td className='p-4'>
// 						<select
// 							id='estado'
// 							value={nuevoUsuario.estado}
// 							name='estado'
// 							className='listado'
// 							onChange={(e) => setnuevoUsuario({...nuevoUsuario, estado: e.target.value})}
// 							required //revisar, creo que no es necesario
// 							defaultValue={0}>
// 							<option disabled value={0}>
// 								Seleccione una Opcion
// 							</option>
// 							<option>Pendiente</option>
// 							<option>Activo</option>
// 							<option>Inactivo</option>
// 						</select>
// 					</td>
// 					<td className='p-4'>
// 						<select
// 							id='estado'
// 							value={nuevoUsuario.rol}
// 							name='rol'
// 							className='listado'
// 							onChange={(e) => setnuevoUsuario({...nuevoUsuario, rol: e.target.value})}
// 							required
// 							defaultValue={0}>
// 							<option disabled value={0}>
// 								Seleccione una Opcion
// 							</option>
// 							<option>Administrador</option>
// 							<option>Vendedor</option>
// 						</select>
// 					</td>
// 				</>
// 			) : (
// 				<>
// 					<td className='spaceTable resultTable text-gray-900 font-medium '>{usuario.identificacion}</td>
// 					<td className='spaceTable resultTable'>{usuario.nombre}</td>
// 					<td className='spaceTable resultTable'>{usuario.apellido}</td>
// 					<td className='spaceTable resultTable'>{usuario.correo}</td>
// 					<td className='spaceTable resultTable'>{usuario.estado}</td>
// 					<td className='spaceTable resultTable'>{usuario.rol}</td>
// 				</>
// 			)}

// 			<td className='resultTable spaceTable font-medium'>
// 				<div className='flex w-full justify-around'>
// 					{edit ? (
// 						<i onClick={() => actualizarUsuario()} className='fas fa-check text-green-600 hover:text-green-300' />
// 					) : (
// 						<i onClick={() => setEdit(!edit)} className='fas fa-pencil-alt text-yellow-600 hover:text-yellow-300' />
// 					)}

// 					<i onClick={() => eliminarUsuario()} className='fas fa-trash text-red-600 hover:text-red-300'></i>
// 				</div>
// 			</td>
// 		</tr>
// 	);
// };

// const FormularioCreacionUsuarios = ({setMostrarTabla}) => {
// 	const form = useRef(null);

// 	const sumitForm = async (e) => {
// 		e.preventDefault();
// 		const fd = new FormData(form.current);
// 		const nuevoUsuario = {};

// 		fd.forEach((value, key) => {
// 			nuevoUsuario[key] = value;
// 		});

// 		console.log(nuevoUsuario);
// 		const options = {
// 			method: 'POST',
// 			url: 'http://localhost:5000/usuarios/',
// 			headers: {'Content-Type': 'application/json'},
// 			data: {
// 				identificacion: nuevoUsuario.identificacion,
// 				nombre: nuevoUsuario.nombre,
// 				apellido: nuevoUsuario.apellido,
// 				correo: nuevoUsuario.correo,
// 				estado: nuevoUsuario.estado,
// 				rol: nuevoUsuario.rol,
// 			},
// 		};

// 		console.log('option ejecutados');

// 		await axios
// 			.request(options)
// 			.then(function (response) {
// 				console.log(response.data);
// 			})
// 			.catch(function (error) {
// 				console.error(error);
// 			});

// 		console.log('enviado');
// 		toast.success('Usuario agregado con exito');
// 		setMostrarTabla(true);
// 	};

// 	return (
// 		<div className='grid justify-items-center'>
// 			<div className='my-3'>
// 				<h2 className='text-lg font-medium text-gray-600'>Nuevo Usuario</h2>
// 			</div>
// 			<div className='my-3'>
// 				<form ref={form} onSubmit={sumitForm}>
// 					<div className='shadow overflow-hidden sm:rounded-md p-3'>
// 						<div className='grid grid-cols-1'>
// 							<div>
// 								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='id'>
// 									Identificación
// 								</label>
// 								<input type='number' name='identificacion' id='identificacion' className='inputTextE ' required />
// 							</div>
// 							<div>
// 								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='Descripcion'>
// 									Nombre
// 								</label>
// 								<input type='text' name='nombre' id='nombre' className='inputTextE' required />
// 							</div>
// 							<div>
// 								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='Descripcion'>
// 									Apellido
// 								</label>
// 								<input type='text' name='apellido' id='apellido' className='inputTextE' required />
// 							</div>
// 							<div>
// 								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='ValorUnitario'>
// 									Correo
// 								</label>
// 								<input type='email' name='correo' id='correo' className='inputTextE' required />
// 							</div>

// 							<div>
// 								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='estado'>
// 									Estado
// 								</label>
// 								<select id='estado' name='estado' className='inputTextE text-gray-600' required defaultValue={0}>
// 									<option disabled value={0}>
// 										Seleccione una Opcion
// 									</option>
// 									<option>Pendiente</option>
// 									<option>Activo</option>
// 									<option>Inactivo</option>
// 								</select>
// 							</div>
// 							<div>
// 								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='estado'>
// 									Rol
// 								</label>
// 								<select id='rol' name='rol' className='inputTextE text-gray-600' required defaultValue={0}>
// 									<option disabled value={0}>
// 										Seleccione una Opcion
// 									</option>
// 									<option>Administrador</option>
// 									<option>Vendedor</option>
// 								</select>
// 							</div>
// 							<div className='my-8'>
// 								<button type='submit' className='w-full bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600'>
// 									Guardar
// 								</button>
// 							</div>
// 						</div>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };



export default Ventas;
