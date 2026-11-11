
const errorHandler = require("../middlewares/errorHandler")

const router = require("express").Router()
const { getAll, createNew, getByCountry, updateById, deleteById } = require("../controllers/api.controller")

router.post("/new",
    createNew
)

router.get("/all",
    getAll
)

router.get("/country/:country",
    getByCountry
)

router.put("/country/:id",
    updateById
)

router.delete("/country/:id",
    deleteById

)


module.exports = router