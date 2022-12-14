const express = require("express")

const ProductsServcice = require("./../Services/product")

const router = express.Router()
const service = new ProductsServcice()


//Quitamos todo lo que diga /products, esto se va encargar otra parte del codigo
router.get("/", (req, res) =>{
    const products = service.find()
    res.json(products)
})

router.get('/filter', (req, res) => {
    res.send("Yo soy un filter")
})

router.get("/:id", (req, res)=>{
    //const id = req.paramsa.id;
    const { id } = req.params
    const product = service.findOne(id)
    res.json(product)
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
