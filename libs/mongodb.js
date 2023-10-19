import mongoose from "mongoose";

const connectMongoDB = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection to MongoDB..SUCCESS !! ....")
  }
  catch (error) {
    console.log("Problem connecting to MONGODB......")
    console.log(error)
  }
}

export default connectMongoDB;