import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config'
import characterRoutes from "./routes/character.js";
import generalInfoRoutes from "./routes/generalInfo.js";

const loadExtensions = async function (app) {
  app.use(cors());
  try {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (error) {
    console.log('Error connecting to Mongo')
  }
}

const loadRoutes = function (app) {
  app.use(characterRoutes);
  app.use(generalInfoRoutes);
}

const creatApp = () => {
  const app = express();
  // app.use(cors());
  loadExtensions(app);
  loadRoutes(app);

  return app;

}


export default creatApp;


