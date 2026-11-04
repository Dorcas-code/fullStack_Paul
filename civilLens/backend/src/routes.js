const router = require("express").Router()
const { getAllIssues, createIssue, getIssueById, updateIssue, deleteIssue } = require('./controllers');


/* let issues = [] */

router.get("/issues", getAllIssues)

router.post("/issues", createIssue)

router.get("/issues/:id", getIssueById)

router.put("/issues/:id", updateIssue)

router.delete("/issues/:id", deleteIssue)
module.exports = router