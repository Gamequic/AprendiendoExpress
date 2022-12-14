const express = require("express")
const faker = require('@faker-js/faker')

const router = express.Router()


//Quitamos todo lo que diga /products, esto se va encargar otra parte del codigo
router.get("/", (req, res) =>{
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

router.get('/filter', (req, res) => {
    res.send("Yo soy un filter")
})

router.get("/:id", (req, res)=>{
    //const id = req.paramsa.id;
    const {id} = req.params
    if (id === "999") {
        res.status(404).json({
            message: "not found"
        })
    } else {
        res.status(200).json({
            id,
            name: "Computadora",
            price: "20000"
        })
    }
})



router.post("/", (req, res) => {    //Recibir peticiones por post
    const body = req.body;
    res.status(201).json({
        message: "created",
        data: body
    })
})

router.patch("/:id", (req, res) => {    //No te obliga a enviar todo para actualizar una cosa, solo te pide lo que cambiaras
    const { id } = req.params
    const body = req.body;
    res.json({
        message: "update",
        data: body,
        id,
    })
})

router.put("/:id", (req, res) => {    //Es necesario enviar el objeto completo aunque no lo vayas a modificar todo
    const { id } = req.params
    const body = req.body;
    res.json({
        message: "update",
        data: body,
        id,
    })
})

router.delete("/:id", (req, res) => {    //Eliminar algo
    const { id } = req.params
    res.json({
        message: "deleted",
        id
    })
})

module.exports = router
