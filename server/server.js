const express = require('express');
const app = express();
const confige = require("./confige.json")

const characterRoutes = require("./routes/character");

app.use(characterRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the server ');
});

app.listen(confige.port, () => {
    console.log(`Listening on port ${confige.port}`);
})