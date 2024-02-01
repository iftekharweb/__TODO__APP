const express = require('express');
require('dotenv').config();
const { connectToMongodb } = require('./database');

const cors = require('cors');

const app = express();
app.use(express.json());
const router = require('./routes');
app.use(cors());
app.use('/api', router);

const port = process.env.PORT;

async function startServer () {
    await connectToMongodb();
    app.listen(port, () => {
        console.log("Everything is fine!");
    });
}

startServer();