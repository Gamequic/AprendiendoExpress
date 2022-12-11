const express = require("express")
const faker = require('@faker-js/faker')

const app = express();
const port = 19132

app.get("/", (req, res)=>{
    res.send("Hello world")
});
app.get("/nueva-ruta", (req, res) =>{
    res.send("Hola, soy una nueva ruta")
})
app.get("/products", (req, res) =>{
    const products = []
    const { size } = req.query
    const limit = size ||  10;
    for (let index = 0; index < limit; index++){
        products.push({
            name: faker.faker.commerce.productName(),
            price: parseInt(faker.faker.commerce.price(), 10),
            image: faker.faker.image.imageUrl()
        })
    }
    res.json(products)
})

//Todo lo especifico va antes que lo dinamico, como este /products/filer funciona porque va antes que el /products/:id
app.get('/products/filter', (req, res) => {
    res.send("Yo soy un filter")
})

//Parametros por URL
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

//Parametros por query
app.get("/user", (req, res)=>{  //http://localhost:19132/user?limit=100&offset=200
    const {limit, offset} = req.query;  //
    if (limit && offset){
        res.json({
            limit,
            offset
        })
    } else {
        res.send("No hay parametros")
    }
})

app.listen(port, () => {
    console.log("Servidor corriendo en: " + port)
})
