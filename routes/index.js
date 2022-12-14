const express = require("express")

const productRouter = require("./products") //importar los productos
const categoriesRouter = require("./categories")
const usersRouter = require("./users")

function routerV1Api(app) {
    const router = express.Router()
    app.use("/api/v1", router)  //Pone por defecto todo en vez de hacerlo uno a uno

    router.use("/products", productRouter) //Poner la ruta que usaran los productos
    router.use("/categories", categoriesRouter)
    router.use("/users", usersRouter)

    // const v1 = "/api/v1"
    // app.use(v1+"/products", productRouter) //Poner la ruta que usaran los productos
    // app.use(v1+"/categories", categoriesRouter)
    // app.use(v1+"/users", usersRouter)
}

module.exports = routerV1Api  //Exportar la funcion router api
