import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';

const VentasFinal = () => {
    
    const [ventas, setVentas] = useState([]);
    
    useEffect(() => {
		obtenerVentas();
	}, []);

	const obtenerVentas = async () => {
		const options = { method: 'GET', url: 'http://localhost:5000/ventas/' };

		await axios
			.request(options)
			.then(function (response) {
				setVentas(response.data);
				console.log(ventas);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

    const eliminarVenta = async (venta) => {
		const options = {
			method: 'DELETE',
			url: `http://localhost:5000/ventas/${venta._id}`,
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				toast.success('Venta Eliminado con exito');
			})
			.catch(function (error) {
				console.error(error);
				toast.error('El venta no se pudo eliminar');
			});
        }


    return (
        <div>
            Hola ventas
        </div>
    )
}

export default VentasFinal;
