const express = require("express")

const app = express();
const port = 19132

app.get("/", (req, res)=>{
    res.send("Hello world")
})

app.listen(port, () => {
    console.log("Servidor corriendo en: " + port)
})
