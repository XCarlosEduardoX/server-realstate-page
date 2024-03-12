
import fs from 'fs';
const rutaArchivo = './src/controllers/estates.json';


function getAll() {
    try {
        const datos = JSON.parse(fs.readFileSync(rutaArchivo, 'utf8'));
        return datos;
    } catch (error) {
        console.error('Ocurrió un error al leer el archivo JSON:', error);
    }
}


export default {

    getEstates: async (req, res) => {
        try {
            const estates = await getAll();
            res.json(estates);
        } catch (error) {
            console.log(error);
            res.json({ message: 'An error has ocurred' });
        }
    }
}
