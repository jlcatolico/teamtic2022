import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
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
	const params = useParams();
	const history = useHistory();
	const [multi, setMulti] = useState([]);

	const [ventas, setVentas] = useState([]);

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
			fecha: formData.fecha,
			cantidad: formData.valor_venta,
			productos: listaProductos,
			totalVenta: formData.totalVenta,
			estado: formData.estado,
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
		history.push('/VentasListado');

	};

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

	// useEffect(()=>{
	// 	var suma=0;
	// 	for (let i of filasTabla){
	// 	 suma =(suma + (i.producto.precio_unitario * i.cantidad));
	// 	}
	// 	setMulti(parseInt(suma));
	// 	// eslint-disable-next-line
	//   },[filasTabla]);

	return (
		<div className='w-11/12'>
			<div className='flex justify-evenly'>
				<div className=' my-4 p-2 w-4/6'>
					<span className='p-2 w-full text-2xl'>Administracion de Ventas</span>
				</div>
				<div className=' w-2/6 flex items-center'>
					<div className='w-full flex justify-end items-center'>
						<button className='text-white bg-green-500 p-2 rounded-lg hover:bg-green-600 mx-4 '>
							<Link to='/VentasListado'>
								Regresar
							</Link>
						</button>
					</div>
				</div>
			</div>
			<div className='grid justify-items-center'>
				<div className='my-3'>
					<h2 className='text-lg font-medium text-gray-600'>Nueva Venta</h2>
				</div>
				<div className='my-3'>
					<form ref={form} onSubmit={submitForm}>
						<div className='shadow overflow-hidden sm:rounded-md p-3'>
							<div className='grid grid-cols-1'>
								<div>
									<div className='grid grid-cols-2 items-center'>
										<label className='tracking-wide mb-2'>
											Fecha
										</label>
										<input type='date' name='fecha' className='inputTextE text-gray-600' />
									</div>
									<div className='grid grid-cols-2 items-center'>
										<label className='tracking-wide mb-2' htmlFor='vendedor'>Vendedor</label>
										<select name='vendedor' className='inputTextE text-gray-600' defaultValue='' required>
											<option disabled value=''>
												Seleccione un Vendedor
											</option>
											{vendedores.map((vend) => {
												return (<option key={nanoid()} onChange={(a)=> setVendedores(vendedores.filter((v)=>v._id === a.target.value)[0])} value={vend._id}>{`${vend.nombre} ${vend.apellido}`}</option>);
											})}
										</select>
									</div>

									<div>
										<div className='flex justify align-middle my-1'>
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
										<table className='min-w-full divide-y divide-gray-200'>
											<thead className='bg-gray-50'>
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
									<div className='grid grid-cols-2 items-center'>
										<label className='tracking-wide mb-2'>Valor Total Venta
											{/* puede ser necesario un usefect */}
										</label>
										<label className='inputTextD text-gray-600 text-right' name='totalVenta'>0</label>
									</div>
									<div className='grid grid-cols-2 items-center'>
										<label className='tracking-wide mb-2'>Estado
										</label>
										<select name='estado' className='inputTextE text-gray-600'>
											<option disabled value=''>Seleccione un Estado</option>
											<option>En progreso</option>
											<option>Completada</option>
											<option>Cancelada</option>
										</select>
									</div>
									<button type='submit' className='searchButton bg-green-400 p-2 hover:bg-green-600 justify-items-center'>
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

export default Ventas;
