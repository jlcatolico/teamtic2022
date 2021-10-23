import {Link} from 'react-router-dom';
import React, {useEffect, useRef, useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid';
import {crearVenta} from 'utils/api';
// import {obtenerVentas} from 'utils/api';
// import {editarVenta} from 'utils/api';
// import {deleteVenta} from 'utils/api';
import {obtenerUsuarios} from 'utils/api';
import {obtenerProductos} from 'utils/api';
import Usuarios from './Usuarios';

const Ventas = () => {
	const [mostrarTabla, setMostrarTabla] = useState(true);
	const [textoBoton, setTextoBoton] = useState('Crear Venta');
	const [ventas, setVentas] = useState([]);
	const [ejecutarConsulta, setEjecutarConsulta] = useState([]);

	const [vendedores, setVendedores] = useState([]);
	const [productos, setProductos] = useState([]);
	const [productosTabla, setProductosTabla] = useState([]);

	useEffect(() => {
		const fetchVendedores = async () => {
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

		fetchVendedores();
		fetchProductos();

		// const fetchVentas = async () => {
		// 	await obtenerVentas(
		// 		(response) => {
		// 			console.log('la respuesta que se recibio fue', response);
		// 			setVentas(response.data);
		// 			setEjecutarConsulta(false);
		// 		},
		// 		(error) => {
		// 			console.error('Salio un error:', error);
		// 		}
		// 	);
		// };
		// if (ejecutarConsulta) {
		// 	fetchVentas();
		// 	setEjecutarConsulta(false);
		// }
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
		<div className='w-5/6'>
			<div className=' my-4 w-full  p-2'>
				<span className='text-gray-600 p-2 w-full text-2xl'>Administracion de Ventas</span>
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
			<h2 className='text-lg font-medium leading-6 text-gray-900 p-3'>Listado de Ventas</h2>
			<br />
			<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
					<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-3'>
						<h1>Búsqueda</h1>
						<form>
							<div className='my-6 row flex flex-row justify-evenly items-center'>
								<label htmlFor='id_venta' className='labelSearch'>
									Id. Venta
								</label>
								<input type='text' name='id_venta' id='id_venta' className='inputSearch' required />
								<label htmlFor='descripcion_venta' className='labelSearch'>
									Nombre Venta
								</label>
								<input type='text' name='descripcion_venta' id='descripcion_venta' autoComplete='descripcion_venta' className='inputSearch' required />
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
											ID Venta
										</th>
										<th scope='col' className='labelTable'>
											Vendedor
										</th>
										<th scope='col' className='labelTable'>
											ID Cliente
										</th>
										<th scope='col' className='labelTable'>
											Nombre Cliente
										</th>
										<th scope='col' className='labelTable'>
											Apellido Cliente
										</th>
										<th scope='col' className='labelTable'>
											Fecha Venta
										</th>
										<th scope='col' className='labelTable'>
											Valor Venta
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
									{listaVentas.map((venta) => (
										<FilaPoducto key={nanoid()} venta={venta} setEjecutarConsulta={setEjecutarConsulta} />
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

const FilaPoducto = ({venta, setEjecutarConsulta}) => {
	const [edit, setEdit] = useState(false);

	const [nuevaVenta, setnuevaVenta] = useState({
		id_venta: venta.id_venta,
		vendedor: vendedores._id,
		id_cliente: venta.id_cliente,
		nombre_cliente: venta.nombre_cliente,
		apellido_cliente: venta.apellido_cliente,
		fecha_venta: venta.fecha_venta,
		valor_venta: venta.valor_venta,
		estado: venta.estado,
	});

	const actualizarVenta = async () => {
		// await editarVenta(
		// 	venta._id,
		// 	nuevaVenta,
		// 	(response) => {
		// 		console.log(response.data);
		// 		toast.success('Venta Moficado con exito');
		// 		setEjecutarConsulta(true);
		// 		setEdit(false);
		// 	},
		// 	(error) => {
		// 		console.error(error);
		// 		toast.error('El Venta no se pudo modificar');
		// 	}
		// );
	};

	const eliminarVenta = async () => {
		// await deleteVenta(
		// 	venta._id,
		// 	(response) => {
		// 		console.log(response.data);
		// 		toast.success('Venta eliminado con exito');
		// 		setEjecutarConsulta(true);
		// 	},
		// 	(error) => {
		// 		console.error(error);
		// 		toast.error('El Venta no se pudo eliminar');
		// 	}
		// );
	};

	return (
		// <tr> //
		// 	{edit ? (
		// 		<>
		// 			<td className='p-4'>
		// 				{' '}
		// 				<input type='number' value={nuevaVenta.id_venta} className='listado' onChange={(e) => setnuevaVenta({...nuevaVenta, id_venta: e.target.value})}></input>
		// 			</td>
		// 			<td className='p-4'>
		// 				{' '}
		// 				<input type='text' value={nuevaVenta.descripcion} className='listado' onChange={(e) => setnuevaVenta({...nuevaVenta, descripcion: e.target.value})}></input>
		// 			</td>
		// 			<td className='p-4'>
		// 				{' '}
		// 				<input type='number' value={nuevaVenta.precio_unitario} className='listado' onChange={(e) => setnuevaVenta({...nuevaVenta, precio_unitario: e.target.value})}></input>
		// 			</td>
		// 			<td className='p-4'>
		// 				{' '}
		// 				<select
		// 					id='estado'
		// 					value={nuevaVenta.estado}
		// 					name='estado'
		// 					className='listado'
		// 					required
		// 					defaultValue={0}
		// 					onChange={(e) => setnuevaVenta({...nuevaVenta, estado: e.target.value})}>
		// 					<option disabled value={0}>
		// 						Seleccione una Opcion
		// 					</option>
		// 					<option>Disponible</option>
		// 					<option>No Disponible</option>
		// 				</select>
		// 			</td>
		// 		</>
		// 	) : (
		<tr>
			<>
				<td className='spaceTable resultTable text-gray-900 font-medium '>{venta.id_venta}</td>
				<td className='spaceTable resultTable'>{vendedores._id}</td>
				<td className='spaceTable resultTable'>{venta.id_cliente}</td>
				<td className='spaceTable resultTable'>{venta.nombre_cliente}</td>
				<td className='spaceTable resultTable'>{venta.apellido_cliente}</td>
				<td className='spaceTable resultTable'>{venta.fecha_venta}</td>
				<td className='spaceTable resultTable'>{venta.valor_venta}</td>
				<td className='spaceTable resultTable'>{venta.estado}</td>
			</>

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

		const nuevaVenta = {};
		fd.forEach((value, key) => {
			nuevaVenta[key] = value;
		});

		console.log('nueva Venta', nuevaVenta);

		const listaProductos = Object.keys(nuevaVenta)
			.map((k) => {
				if (k.includes('producto')) {
					return productosTabla.filter((v) => v._id === nuevaVenta[k])[0];
				}
				return null;
			})
			.filter((v) => v);

		const datosVenta = {
			vendedor: vendedores.filter((v) => v._id === nuevaVenta.vendedor)[0],
			vendedorid: vendedores._id,
			id_cliente: nuevaVenta.id_cliente,
			nombre_cliente: nuevaVenta.nombre_cliente,
			apellido_cliente: nuevaVenta.apellido_cliente,
			fecha_venta: nuevaVenta.fecha_venta,
			valor_venta: nuevaVenta.valor_venta,
			estado: nuevaVenta.estado,
			cantidad: nuevaVenta.valor,
			productos: listaProductos,
		};

		await crearVenta(
			datosVenta,
			(response) => {
				console.log(response.data);
				toast.success('Venta agregado con éxito');
			},
			(error) => {
				console.error(error);
				toast.error('Error creando un venta');
			}
		);

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
									ID Venta
								</label>
								<input type='number' name='id_venta' id='id_venta' className='inputTextE ' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='Descripcion'>
									Vendedor
								</label>
								<select id='vendedor' name='vendedor' className='inputTextE text-gray-600' required defaultValue={0}>
									<option disabled value={0}>
										Seleccione un vendedor
									</option>
									{vendedores.map((el) => {
										return <option key={nanoid()} value={el._id}>{`${el.email}`}</option>;
									})}
								</select>
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='Descripcion'>
									ID Cliente
								</label>
								<input type='text' name='id_cliente' id='id_cliente' className='inputTextE' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='Descripcion'>
									Nombre Cliente
								</label>
								<input type='text' name='nombre_cliente' id='nombre_cliente' className='inputTextE' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='Descripcion'>
									Apellido Cliente
								</label>
								<input type='text' name='apellido_cliente' id='apellido_cliente' className='inputTextE' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='ValorUnitario'>
									Fecha Venta
								</label>
								<input type='date' name='fecha_venta' id='fecha_venta' className='inputTextE' required />
							</div>

							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='Descripcion'>
									Valor Venta
								</label>
								<input type='text' name='valor_venta' id='valor_venta' className='inputTextE' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='estado'>
									Estado Venta
								</label>
								<select id='estado' name='estado' className='inputTextE text-gray-600' required defaultValue={0}>
									<option disabled value={0}>
										Seleccione una Opcion
									</option>
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

export default Ventas;
