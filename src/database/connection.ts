import mongoose from "mongoose";

export const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb+srv://phorsbeatrmx0509:Phorsbeatrmx0509@tsoa.iaijc.mongodb.net/");
        console.log("Connected to database");
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}
