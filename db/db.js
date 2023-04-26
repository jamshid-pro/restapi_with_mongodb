import mongoose from "mongoose";

const connectDB = () => {
    mongoose.set("strictQuery");
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(`MongoDB connected`);
}

export default connectDB;