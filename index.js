const express = require("express")
const routerV1Api = require("./routes") //No se pone index.js porque ya sabe que lo tiene que buscar en automatico
const { logError, errorHandler, boomErrorHandler } = require("./MiddleWares/errorHandler")

const app = express();
const port = 19132

app.use(express.json()) //Permite leer las peteciones por JSON

app.get("/", (req, res)=>{
    res.send("Hello world")
});
app.get("/nueva-ruta", (req, res) =>{
    res.send("Hola, soy una nueva ruta")
})

// //MiddleWare normal se ejecuta antes de los metodos
// app.use((res, req, next) => {
//   console.log("ES MI MIDDLEWARE PERRAS, Y FUE HECHO A LAS '" + Date.now() + "'")
//   next()
// })


routerV1Api(app)  //Usar las cosas que divimos en diferentes archivos


//MiddleWere de error se ejecutan despues de los metodos
//Usar los MiddleWares que creamos en la carpeta de MiddleWare
app.use(logError);    //Se ejecutan en el orden que se ponen
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
    console.log("Servidor corriendo en: " + port)
})


/*
Carta de suicidio
Hoy aprendi muchas cosas sobre los middlewares
Lo que no aprendi fue:
PORQUE MIERDA LOS MIDDLEWARE DE ERROR NO SE EJECUTAN CAUDNO SE TIENEN QUE EJECUTAR
TODO ES UN MIDDLEWARE, SOLO QUE DEPENDE LA RUTA QUE SE HAGA
UN MIDDLE WARE SE EJECUTA DE MANERA GLOBAL O DE MANERA ESPECIFICA PARA LOS ROUTES, LOS GLOBALES AFECTAN A LOS ROUTERS
*/
