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

  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://rickandmortydocs.netlify.app/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
});

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


