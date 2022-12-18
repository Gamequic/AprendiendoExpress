const express = require("express")

const ProductsServcice = require("./../Services/product")

const router = express.Router()
const service = new ProductsServcice()


//Quitamos todo lo que diga /products, esto se va encargar otra parte del codigo
router.get("/", async (req, res) =>{
    const products = await service.find()
    res.json(products)
})

router.get('/filter', (req, res) => {
    res.send("Yo soy un filter")
})

router.get("/:id", async (req, res)=>{
    //const id = req.paramsa.id;
    const { id } = req.params
    const product = service.findOne(id)
    res.json(product)
})



router.post("/", async (req, res) => {    //Recibir peticiones por post
    const body = req.body;
    const newProduct = await service.create(body)
    res.status(201).json({newProduct})
})

router.patch("/:id", async (req, res) => {    //No te obliga a enviar todo para actualizar una cosa, solo te pide lo que cambiaras
  try {
    const { id } = req.params
    const body = req.body;
    const product = await service.update(id, body)
    res.json({product})
  } catch (error) {
    res.status(404).json({ message : error.message })
  }
})

router.delete("/:id", async (req, res) => {    //Eliminar algo
    const { id } = req.params
    const product = await service.delete(id)
    res.json({product})
})

module.exports = router
