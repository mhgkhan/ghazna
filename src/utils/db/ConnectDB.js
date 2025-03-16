import FreezeEnv from "@/config/EnvConfig";
import mongoose from "mongoose";

export default connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(FreezeEnv.DBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
};
