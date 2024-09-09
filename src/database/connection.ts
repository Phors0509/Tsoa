import mongoose from "mongoose";
import config from "../config"

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(`${config.MONGODB_URL}`);
        console.log("Connected to database");
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}
