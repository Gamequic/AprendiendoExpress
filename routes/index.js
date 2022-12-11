const productRouter = require("./products") //importar los productos
const categoriesRouter = require("./categories")
const usersRouter = require("./users")

function routerApi(app) {
    app.use("/products", productRouter) //Poner la ruta que usaran los productos
    app.use("/categories", categoriesRouter)
    app.use("/users", usersRouter)
}

module.exports = routerApi  //Exportar la funcion router api
