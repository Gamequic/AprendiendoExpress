const express = require("express")
const routerV1Api = require("./routes") //No se pone index.js porque ya sabe que lo tiene que buscar en automatico
const { logError, errorHandler } = require("./MiddleWares/errorHandler")

const app = express();
const port = 19132

app.use(express.json()) //Permite leer las peteciones por JSON

app.get("/", (req, res)=>{
    res.send("Hello world")
});
app.get("/nueva-ruta", (req, res) =>{
    res.send("Hola, soy una nueva ruta")
})

routerV1Api(app)  //Usar las cosas que divimos en diferentes archivos

//Usar los MiddleWares que creamos en la carpeta de MiddleWare
app.use(logError);
app.use(errorHandler);
/*
Nota
Un MiddleWare es software que se interpone entre el cliente y el servidor
Sirve para gestionar permisos, capturar errores y cualquier funcion que se les pueda dar
es solamente un filtro que esta entre el servidor y el cliente.
Obviamente ser corre por parte del servidor
*/

app.listen(port, () => {
    console.log("Servidor corriendo en: " + port)
})
