const express = require('express');
const app = express();

const confige = require("./confige.json")
const characterRoutes = require("./routes/character");

app.use(characterRoutes);

app.listen(confige.port, () => {
    console.log(`Listening on port ${confige.port}`);
})