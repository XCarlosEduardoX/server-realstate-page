//importar express
import express from 'express';
//importar router
import router from './routes/index.js';
//importar bodyparser
import bodyParser from 'body-parser';

const app = express();


//habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router());



//puerto
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});