import mongoose from 'mongoose';

export function formConnection() {
  try {
    mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (error) {
    return `Error connecting to Mongo ${error}`
  }
}

export const getMongooseinstance = () => mongoose;
