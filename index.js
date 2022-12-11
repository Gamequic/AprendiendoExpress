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
    res.json([
        {
            name: "Celular",
            price: "7000"
        },
        {
            name: "Computadora",
            price: "20000"
        },
    ]
)})

app.get("/products/:id", (req, res)=>{  //:id   significa que es un paremetro
    //const id = req.paramsa.id;
    const {id} = req.params
    res.json({
        id,
        name: "Computadora",
        price: "20000"
    })
})

app.get("/categories/:CategoryID/products/:ProductID", (req, res)=>{
    const {CategoryID, ProductID} = req.params;
    res.json({
        CategoryID,
        ProductID
    })
})

app.listen(port, () => {
    console.log("Servidor corriendo en: " + port)
})
