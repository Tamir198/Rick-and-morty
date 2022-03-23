const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors())

const confige = require("./confige.json")
const characterRoutes = require("./routes/character");

app.use(characterRoutes);

app.listen(confige.port, () => {
    console.log(`Listening on port ${confige.port}`);
})