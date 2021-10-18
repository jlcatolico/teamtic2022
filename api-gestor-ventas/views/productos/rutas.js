import Express from 'express';
import { queryAllProductos, crearVehiculo , editarProducto, eliminarProducto, queryProducto} from '../../controllers/productos/controler.js';
import { getDB } from '../../db/db.js';


const rutasProducto = Express.Router();

const genericCallback = (res) => (err, result) => {
    if (err) {
        res.status(500).send("Error consultando los productos");
    } else {
        res.json(result);
    }
};


rutasProducto.route('/productos').get((req, res) => {
    queryAllProductos(genericCallback(res));
});

rutasProducto.route('/productos/:id').get((req, res) => {
    queryProducto(req.params.id, genericCallback(res));
});


rutasProducto.route('/productos').post((req, res) => {
    console.log('creando producto: ' );
    crearVehiculo(req.body, genericCallback(res));
});

rutasProducto.route('/productos/:id').patch((req, res) => {
    editarProducto(req.params.id, req.body, genericCallback(res));
});


rutasProducto.route('/productos/:id').delete((req, res) => {
eliminarProducto(req.params.id, req.body, genericCallback(res));
});


export default rutasProducto;