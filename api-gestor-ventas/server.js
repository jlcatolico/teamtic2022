//import express tradicional
//const express = require('express');

//import express modulo
import Express from "express";
import dotenv from 'dotenv';
import {conectarDB, getDB} from './db/db.js';
import { MongoClient, ObjectId } from "mongodb";

dotenv.config({ path: './.env' });

const app = Express();
app.use(Express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



app.get('/productos', (req, res) => {
    const conexion = getDB();
    conexion
        .collection("productos")
        .find({}).limit(50)
        .toArray((err, result) => {
            if (err) {
                res.status(500).send("Error consultando los productos");
            } else {
                res.json(result);
            }
        });
});

app.post('/productos/nuevo', (req, res) => {
    console.log(req);
    const datosProducto = req.body;
    console.log('llaves: ', Object.keys(datosProducto));

    try {
        if (
            Object.keys(datosProducto).includes('id_producto') &&
            Object.keys(datosProducto).includes('descripcion') &&
            Object.keys(datosProducto).includes('precio_unitario') &&
            Object.keys(datosProducto).includes('estado')
        ) {
            const conexion = getDB();
            conexion.collection('productos').insertOne(datosProducto, (err, result) => {
                if (err) {
                    console.error(err);
                    res.sendStatus(500);
                } else {
                    console.log(result);
                    res.sendStatus(200);
                }
            });
        }
        else {
            res.sendStatus(500);
        }
    }
    catch {
        res.sendStatus(500);
    }
});

app.patch('/productos/editar', (req, res) => {
    const edicion = req.body;
    console.log(edicion);
    const filtroProducto = { _id: new ObjectId(edicion.id) };
    delete edicion.id;
    const operacion = {
        $set: edicion,
    };
    const conexion = getDB();
    conexion.collection('productos')
        .findOneAndUpdate(
            filtroProducto,
            operacion,
            { upsert: true, returnOriginal: true }, (err, result) => {
                if (err) {
                    console.error('Error actualizacion Producto: ', err);
                    res.sendStatus(500);
                } else {
                    console.log('Producto Actualizado: ', result);
                    res.sendStatus(200);
                }
            }
        )
});


app.delete('/productos/eliminar', (req, res) => {
    const eliminar = req.body;
    const filtroProducto = { _id: new ObjectId(eliminar.id) };
    const conexion = getDB();
    conexion.collection('productos')
        .deleteOne(
            filtroProducto, (err, result) => {
                if (err) {
                    console.error('Error Eliminando Producto: ', err);
                    res.sendStatus(500);
                } else {
                    console.log('Producto Eliminado: ', result);
                    res.sendStatus(200);
                }
            }
        )
});


app.get('/ventas', (req, res) => {
    const ventas = [
        {
            id_venta: 202110030001,
            valor_venta: 100000,
            id_producto: 1,
            cantidad: 5,
            precio_unitario: 20000,
            fecha_venta: '10/03/2021',
            id_cliente: 1088328203,
            nombre_cliente: 'Valentina Arbelaez',
            vendedor: 'Jane Cooper',
            estado: 'En proceso',
        },
        {
            id_venta: 202110030001,
            valor_venta: 100000,
            id_producto: 11,
            cantidad: 5,
            precio_unitario: 20000,
            fecha_venta: '10/03/2021',
            id_cliente: 1088328203,
            nombre_cliente: 'Valentina Arbelaez',
            vendedor: 'Jane Cooper',
            estado: 'Entregada',
        },
        {
            id_venta: 202110030001,
            valor_venta: 100000,
            id_producto: 1,
            cantidad: 5,
            precio_unitario: 20000,
            fecha_venta: '10/03/2021',
            id_cliente: 1088328203,
            nombre_cliente: 'Valentina Arbelaez',
            vendedor: 'Jane Cooper',
            estado: 'Cancelada',
        },
        {
            id_venta: 202110030001,
            valor_venta: 100000,
            id_producto: 11,
            cantidad: 5,
            precio_unitario: 20000,
            fecha_venta: '10/03/2021',
            id_cliente: 1088328203,
            nombre_cliente: 'Valentina Arbelaez',
            vendedor: 'Jane Cooper',
            estado: 'En proceso',
        },
    ];
    res.send(ventas);
});



const main = () => {

    return app.listen(process.env.PORT, () => {
        console.log(`escuchando puerto ${process.env.PORT}`);
    });


}

conectarDB(main);