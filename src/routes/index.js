import express from 'express';

const router = express.Router();

//importar el controlador
import estatesController from '../controllers/estatesController.js';




//exportar router como funcion
export default function () {

    //ruta para obtener todos los inmuebles
    router.get('/', estatesController.getEstates);

    return router;
}


