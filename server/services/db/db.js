import mongoose from 'mongoose';


export function formConnection() {
  try {
    console.log(process.env.MONGO_URL)
    mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (error) {
    return 'Error connecting to Mongo'
  }
}

export const getMongooseinstance = () => mongoose;
