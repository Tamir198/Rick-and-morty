import express from 'express';
import cors from 'cors';

import confige from "./confige.js";
import characterRoutes from "./routes/character.js";
import generalInfoRoutes from "./routes/generalInfo.js";


const app = express();
app.use(cors())

app.use(characterRoutes);
app.use(generalInfoRoutes);

app.listen(confige.port, () => {
    console.log(`Listening on port ${confige.port}`);
})