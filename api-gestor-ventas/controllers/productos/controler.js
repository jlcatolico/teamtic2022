import { getDB } from '../../db/db.js';
import { ObjectId } from 'mongodb';

const queryAllProductos = async (callback) => {
    const conexion = getDB();
    await conexion.collection("productos").find({}).limit(50).toArray(callback);
};

const queryProducto = async (id, callback) => {
    const conexion = getDB();
    await conexion.collection("productos").findOne({_id: new ObjectId(id)}, callback);
};

const crearVehiculo = async (datosProducto, callback) => {

    //console.log(req);
    //console.log('llaves: ', Object.keys(datosProducto));
    
        if (
            Object.keys(datosProducto).includes('id_producto') &&
            Object.keys(datosProducto).includes('descripcion') &&
            Object.keys(datosProducto).includes('precio_unitario') &&
            Object.keys(datosProducto).includes('estado')
        ) {
            console.log('Campos ok');
            const conexion = getDB();
            await conexion.collection('productos').insertOne(datosProducto, callback);
            console.log('Campos Insertados');
        }
        else {
            return "error campos";
            console.log('Error en campos');
        }
};

const editarProducto = async (id, datosProducto, callback) => {
    //obtener id desde el body
    //const id = datosProducto.id;
    console.log(datosProducto);
    const filtroProducto = { _id: new ObjectId(id) };
    delete datosProducto.id;
    const operacion = {
        $set: datosProducto,
    };
    const conexion = getDB();
    await conexion.collection('productos')
        .findOneAndUpdate(
            filtroProducto,
            operacion,
            { upsert: true, returnOriginal: true }, callback)
}

const eliminarProducto = async (id, datosProducto, callback) => {
    //obtener id desde el body
    //const id = datosProducto.id;
    const filtroProducto = { _id: new ObjectId(id) };
    const conexion = getDB();
    conexion.collection('productos')
        .deleteOne(
            filtroProducto, callback)

}

export { queryAllProductos, queryProducto, crearVehiculo, editarProducto, eliminarProducto };