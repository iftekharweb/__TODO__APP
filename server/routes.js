const express = require('express');
const router = express.Router();

const {getConnectedClient} = require('./database');

const getCollection = () => {
    const client = getConnectedClient();
    const collection = client.db("todosdb").collection("todos");
    return collection;
}

// GET /todos
router.get("/todos", async (req, res) => {
    const collection = getCollection();
    const todos = await collection.find({}).toArray();
    res.status(200).json(todos);
});

// POST /todos
router.post('/todos', async (req, res) => {
    const collection = getCollection();
    const {todo} = req.body;
    const newTodo = await collection.insertOne({todo: todo, status:false});
    res.status(201).json({todo: todo, status:false, _id: newTodo.insertedId});
});

// DELETE /todos/:id
router.delete('/todos/:id', (req, res) => {
    res.status(200).json({message: "DELETE REQUEST TO /api/todos/:id"});
});

// PUT /todos/:id
router.put('/todos/:id', (req, res) => {
    res.status(200).json({message: "PUT REQUEST TO /api/todos/:id"});
});

module.exports = router;