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
    res.json({
        id,
        name: "Computadora",
        price: "20000"
    })
})


//Recivir peticiones por post

router.post("/", (req, res) => {
    const body = req.body;
    res.json({
        message: "created",
        data: body
    })
})

module.exports = router
