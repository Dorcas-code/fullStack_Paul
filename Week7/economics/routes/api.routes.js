
const errorHandler = require("../middlewares/errorHandler")

const router = require("express").Router()
const { getAll, createNew, getByCountry, updateById, deleteById } = require("../controllers/api.controller")
const requireRole = require("../middlewares/requireRole")
// ? Just like we put the middleware in app.js

router.post("/new", requireRole("admin"), createNew)

router.get("/all",
    getAll
)

router.get("/country/:country",
    getByCountry
)

router.put("/country/:id", requireRole("admin"), updateById)

router.delete("/country/:id", requireRole("admin"), deleteById)


module.exports = router