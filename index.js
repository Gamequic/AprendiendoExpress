const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");

const { logError, errorHandler, boomErrorHandler } = require("./MiddleWares/errorHandler")

const app = express();
const port = 19132

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null)
    } else {
      callback(new Error("Access denied"))
    }
  }
}
app.use(cors())   //Aqui habilitamos peticiones externas para todas las rutas, pero se puede solo para rutas en especifico

app.get("/", (req, res)=>{
  res.send("Hello world");
});

app.get("/nueva-ruta", (req, res) =>{
  res.send("Hola, soy una nueva ruta");
});

routerApi(app)

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log("Servidor corriendo en: " + port)
})
