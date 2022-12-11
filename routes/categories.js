const express = require("express")

const router = express.Router()

router.get("/:CategoryID/products/:ProductID", (req, res)=>{
    const {CategoryID, ProductID} = req.params;
    res.json({
        CategoryID,
        ProductID
    })
})

module.exports = router
