import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { formConnection } from './services/db/db.js';

import characterRoutes from "./routes/character.js";
import generalInfoRoutes from "./routes/generalInfo.js";
import usersRoutes from "./routes/users.js";

const loadExtensions = async function (app) {
  app.use(cors('*'));
  app.use(express.json());

  formConnection();
}

const loadRoutes = function (app) {
  app.use(characterRoutes);
  app.use(generalInfoRoutes);
  app.use(usersRoutes);
}

const creatApp = () => {
  const app = express();
  loadExtensions(app);
  loadRoutes(app);

  return app;
}


export default creatApp;


