
const errorHandler = require("../middlewares/errorHandler")

const router = require("express").Router()
const { getAll, createNew, getByCountry, updateById, deleteById } = require("../controllers/api.controller")

router.post("/new",
    createNew
)

router.get("/all",
    getAll
)

router.get("/:country",
    getByCountry
)

router.put("/:id",
    updateById
)

router.delete("/:id",
    deleteById

)


module.exports = router