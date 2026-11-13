const { Issues } = require("./models/issues.model");
const { Sequelize } = require("../db");
/* let issues = [] */

let getAllIssues = async (req, res) => {
    try {
        const issues = await Issues.findAll();
        res.status(200).json({ message: "Load all issues", issues });
    } catch (error) {
        console.error("Database error:", error.original?.message || error.message);
        res.status(500).json({ message: "Could not load issues" });
    }

}

let createIssue = async (req, res) => {

    console.log("response succuess", req.body)
    let add_issueData = await Issues.create({
        title: req.body.title,
        description: req.body.description,
        votes: req.body.votes,

    })

    /*  issues.push(req.body)
     req.body.id = (issues.length - 1) + 1
     req.body.createdAt = new Date().toISOString() */
    res.status(201).json({
        message: `${req.method} ${req.originalUrl} route`,
        add_issueData
    })

}

let getIssueById = async (req, res) => {
    let { id } = req.params;
    console.log(id)
    // ? id becomes a variable in the world of endpoints


    // Object destructuring

    let foundIssue = await Issues.findByPk(id);
    if (!foundIssue) {
        res.status(200).json({
            message: `issue ${id} not found`
        })
    }
    res.status(200).json({
        message: `Reached ${req.method} route , here is your issue`,
        foundIssue
    })

}

let updateIssue = async (req, res) => {
    let { id } = req.params;


    let foundIssue = await Issues.findByPk(id);


    let updatedIssue = {
        // ?  Nullish coalescing operator */
        // * if it is null keep it as it is (Right hand side)
        //  * if it is not null , use the value in the req.body.country
        // * avoid have to update un wanted data
        title: req.body.title ?? title,
        description: req.body.description ?? description,
        category: req.body.category ?? category,

        votes: req.body.votes ?? votes
    }


    foundIssue.update(updatedIssue)
    if (!foundIssue) {
        res.status(200).json({
            message: `issue ${id} not found`
        })
    }
    res.status(200).json({
        message: `${req.method} ${req.originalUrl} route , Issue updated`,
        updatedIssue

    })
}

function deleteIssue(req, res) {
    let { id } = req.params;
    id = Number(id);
    const index = issues.findIndex(i => i.id === id);
    console.log("issue deleted", index)


    if (index !== -1) {


        issues.splice(index, 1); // remove 1 element at index

        res.status(200).json({
            message: 'Issue deleted', issues
        })
    } else {
        return res.status(404).json({ error: 'Issue not found' });
    }

}


module.exports = { getAllIssues, createIssue, getIssueById, updateIssue, deleteIssue };