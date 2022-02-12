import mongoose from "mongoose";
import app from "./app.js";

const databaseConnection = async () => {
  try {
    console.log("Connecting to the database");
    const db = await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the database.");
    app.listen(process.env.PORT, () => {
      console.log(`Server Started Listening On Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Couldn't start the server!!", error);
  }
};

databaseConnection();
