const express = require("express")

const app = express();
const port = 19132

app.get("/", (req, res)=>{
    res.send("Hello world")
});

app.get("/nueva-ruta", (req, res) =>{
    res.send("Hola, soy una nueva ruta")
})

app.get("/products", (req, res) =>{
    res.json({
        name: "Celular",
        price: "7000"
    })
})

app.listen(port, () => {
    console.log("Servidor corriendo en: " + port)
})
