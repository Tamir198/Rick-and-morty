import express from 'express';
import cors from 'cors';

import port from "./confige.js";
import characterRoutes from "./routes/character.js";

const app = express();
app.use(cors())

app.use(characterRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})