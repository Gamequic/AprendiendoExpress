const express = require("express")

const router = express.Router()

router.get("/", (req, res)=>{  //http://localhost:19132/user?limit=100&offset=200
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


module.exports = router
