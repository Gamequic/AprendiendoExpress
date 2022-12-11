const express = require("express")
const routerApi = require("./routes") //No se pone index.js porque ya sabe que lo tiene que buscar en automatico

const app = express();
const port = 19132

app.get("/", (req, res)=>{
    res.send("Hello world")
});
app.get("/nueva-ruta", (req, res) =>{
    res.send("Hola, soy una nueva ruta")
})

routerApi(app)  //Usar las cosas que divimos en diferentes archivos


app.listen(port, () => {
    console.log("Servidor corriendo en: " + port)
})
