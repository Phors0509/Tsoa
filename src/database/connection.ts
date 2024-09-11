import mongoose from "mongoose";
import config from "../config"

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(`${config.MONGODB_URL}`);
        console.log("Connection : Connected to database");
    } catch (error) {
        console.error('Connection : MongoDB connection error:', error);
        process.exit(1);
    }
}
