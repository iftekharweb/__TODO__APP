const express = require('express');

const cors = require('cors');

const app = express();
const router = require('./routes');
app.use(cors());
app.use('/api', router);

const port = 5000;
app.listen(port, () => {
    console.log("Everything is fine!");
});