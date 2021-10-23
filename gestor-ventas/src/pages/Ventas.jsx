import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { nanoid } from 'nanoid';
import { crearVenta } from 'utils/api';
import { obtenerProductos } from 'utils/api';
import { obtenerUsuarios } from 'utils/api';



const Ventas = () => {

	const form = useRef(null);
	const [vendedores, setVendedores] = useState([]);
	const [Productos, setProductos] = useState([]);
	const [ProductosTabla, setProductosTabla] = useState([]);


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
					return ProductosTabla.filter((v) => v._id === formData[k])[0];
				}
				return null;
			})
			.filter((v) => v);

		const datosVenta = {
			vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
			cantidad: formData.valor,
			Productos: listaProductos,
		};

		await crearVenta(
			datosVenta,
			(response) => {
				console.log(response);
			},
			(error) => {
				console.error(error);
			}
		);
	};

	return (
		<div className='flex h-full w-full items-center justify-center'>
			<form ref={form} onSubmit={submitForm} className='flex flex-col h-full'>
				<h1 className='text-3xl font-extrabold text-gray-900 my-3'>Crear una nueva venta</h1>
				<label className='flex flex-col' htmlFor='vendedor'>
					<span className='text-2xl font-gray-900'>Vendedor</span>
					<select name='vendedor' className='p-2' defaultValue='' required>
						<option disabled value=''>
							Seleccione un Vendedor
						</option>
						{vendedores.map((el) => {
							return <option key={nanoid()} value={el._id}>{`${el.email}`}</option>;
						})}
					</select>
				</label>

				<TablaProductos
					Productos={Productos}
					setProductos={setProductos}
					setProductosTabla={setProductosTabla}
				/>

				<label className='flex flex-col'>
					<span className='text-2xl font-gray-900'>Valor Total Venta</span>
					<input
						className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
						type='number'
						name='valor'
						required
					/>
				</label>
				<button
					type='submit'
					className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
				>
					Crear Venta
				</button>
			</form>
		</div>
	);
};

const TablaProductos = ({ Productos, setProductos, setProductosTabla }) => {
	const [ProductoAAgregar, setProductoAAgregar] = useState({});
	const [filasTabla, setFilasTabla] = useState([]);
  
	useEffect(() => {
	  setProductosTabla(filasTabla);
	}, [filasTabla, setProductosTabla]);
  
	const agregarNuevoProducto = () => {
	  setFilasTabla([...filasTabla, ProductoAAgregar]);
	  setProductos(Productos.filter((v) => v._id !== ProductoAAgregar._id));
	  setProductoAAgregar({});
	};
  
	const eliminarProducto = (ProductoAEliminar) => {
	  setFilasTabla(filasTabla.filter((v) => v._id !== ProductoAEliminar._id));
	  setProductos([...Productos, ProductoAEliminar]);
	};
  
	const modificarProducto = (Producto, cantidad) => {
	  setFilasTabla(
		filasTabla.map((ft) => {
		  if (ft._id === Producto.id) {
			ft.cantidad = cantidad;
			ft.total = Producto.valor * cantidad;
		  }
		  return ft;
		})
	  );
	};
  
	return (
	  <div>
		<div className='flex '>
		  <label className='flex flex-col' htmlFor='Producto'>
			<select
			  className='p-2'
			  value={ProductoAAgregar._id ?? ''}
			  onChange={(e) =>
				setProductoAAgregar(Productos.filter((v) => v._id === e.target.value)[0])
			  }
			>
			  <option disabled value=''>
				Seleccione un Producto
			  </option>
			  {Productos.map((el) => {
				return (
				  <option
					key={nanoid()}
					value={el._id}
				  >{`${el.name} ${el.brand} ${el.model}`}</option>
				);
			  })}
			</select>
		  </label>
		  <button
			type='button'
			onClick={() => agregarNuevoProducto()}
			className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
		  >
			Agregar Producto
		  </button>
		</div>
		<table className='tabla'>
		  <thead>
			<tr>
			  <th>Id Venta</th>
			  <th>Valor Venta</th>
			  <th>Fecha venta</th>
			  <th>Id Cliente</th>
			  <th>Nombre Cliente</th>
			  <th>Vendedor</th>
			  <th>Estado</th>
			  <th>Eliminar</th>
			  <th className='hidden'>Input</th>
			</tr>
		  </thead>
		  <tbody>
			{filasTabla.map((el, index) => {
			  return (
				<FilaProducto
				  key={el._id}
				  veh={el}
				  index={index}
				  eliminarProducto={eliminarProducto}
				  modificarProducto={modificarProducto}
				/>
			  );
			})}
		  </tbody>
		</table>
	  </div>
	);
  };
  
  const FilaProducto = ({ veh, index, eliminarProducto, modificarProducto }) => {
	const [Producto, setProducto] = useState(veh);
	useEffect(() => {
	  console.log('veh', Producto);
	}, [Producto]);
	return (
	  <tr>
		<td>{Producto._id}</td>
		<td>{Producto.id_producto}</td>
		<td>{Producto.descripcion}</td>
		<td>{Producto.precio_unitario}</td>
		<td>{Producto.estado}</td>
		<td>
		  <label htmlFor={`valor_${index}`}>
			<input
			  type='number'
			  name={`cantidad_${index}`}
			  value={Producto.cantidad}
			  onChange={(e) => {
				modificarProducto(Producto, e.target.value === '' ? '0' : e.target.value);
				setProducto({
				  ...Producto,
				  cantidad: e.target.value === '' ? '0' : e.target.value,
				  total:
					parseFloat(Producto.valor) *
					parseFloat(e.target.value === '' ? '0' : e.target.value),
				});
			  }}
			/>
		  </label>
		</td>
		<td>{Producto.valor}</td>
		<td>{parseFloat(Producto.total ?? 0)}</td>
		<td>
		  <i
			onClick={() => eliminarProducto(Producto)}
			className='fas fa-minus text-red-500 cursor-pointer'
		  />
		</td>
		<td className='hidden'>
		  <input hidden defaultValue={Producto._id} name={`Producto_${index}`} />
		</td>
	  </tr>
	);
  };

export default Ventas;
