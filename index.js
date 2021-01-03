import express from 'express';
import router from './routes/index.js'
import db from './config/db.js';
// import connection from './config/db.js';
const app= express();

db.authenticate()
    .then(()=>console.log('Base de datos conectada'))
    .catch(err =>console.log(err))

// definimos el puerto local o del proveedor con enviroment
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

// Habilitamos el pug
app.set('view engine','pug');
// Generar variables globales en node
app.use((req,res,next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';
    next();
});
// agregar body parser para leer los datos
app.use(express.urlencoded({extended: true}))
// definir la carpeta publica
app.use(express.static('public'));
// definimos las rutas
app.use('/', router);
/**puerto y host para la app */
app.listen(port,host,()=>{
    console.log(`El servidor: ${host} esta funcionando en el puerto: ${port}`);
})