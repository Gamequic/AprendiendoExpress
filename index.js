const express = require("express")
const routerApi = require("./routes")

const { logError, errorHandler, boomErrorHandler } = require("./MiddleWares/errorHandler")

const app = express();
const port = 19132

app.use(express.json());

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
