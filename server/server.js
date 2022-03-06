const express = require('express');
const app = express();
const port = 4000

const characterRoutes = require("./routes/character");

app.use(characterRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the server ');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})