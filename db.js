import mongoose from "mongoose";
import { config } from "dotenv";
config()

export function connectDb(){
    mongoose.connect(process.env.DB_STRING, {
});

console.log("connected to DB")

const recordSchema = new mongoose.Schema({
    humidity: { type: Number },
    temperature: { type: Number },
    fanActivity: { type: String },
    lightActivity: { type: String }
});

const Record = mongoose.model('Record', recordSchema);
    return Record
}