import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const url = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.hvmywc6.mongodb.net/?retryWrites=true&w=majority`;
const Connection = () => {
  try {
    mongoose.connect(url, {});
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};

export default Connection;
