import express from 'express';
import cors from 'cors';

import characterRoutes from "./routes/character.js";
import generalInfoRoutes from "./routes/generalInfo.js";

const loadExtensions = async function (app) {
  app.use(cors());
}

const loadRoutes = function (app) {
  app.use(characterRoutes);
  app.use(generalInfoRoutes);
}

const creatApp = () =>{
  const app = express();

  loadRoutes(app);
  loadExtensions(app);

  return app;
  
}


export default creatApp;


