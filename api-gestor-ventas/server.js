//import express tradicional
//const express = require('express');

//import express modulo
import Express from "express";
import dotenv from 'dotenv';
import { conectarDB} from './db/db.js';
import rutasProducto from "./views/productos/rutas.js";


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

app.use(rutasProducto);

const main = () => {

    return app.listen(process.env.PORT, () => {
        console.log(`escuchando puerto ${process.env.PORT}`);
    });


}

conectarDB(main);