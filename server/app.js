import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerConfige from './config/swagger.js';

import 'dotenv/config'
import { formConnection } from './services/db/db.js';

import characterRoutes from "./routes/character.js";
import generalInfoRoutes from "./routes/generalInfo.js";
import usersRoutes from "./routes/users.js";

const loadExtensions = async function (app) {
  app.use(cors('*'));
  app.use(express.json());

  formConnection();
  
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfige));
}

const loadRoutes = function (app) {

  app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
  });

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


