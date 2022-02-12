import mongoose from "mongoose";
import app from "./app.js";
import connectDatabase from "./config/db.js";

(async () => {
  try {
    console.log("Connecting to the database");
    const db = await connectDatabase();
    console.log("Connected to the database.");
    app.listen(process.env.PORT, () => {
      console.log(`Server Started Listening On Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Couldn't start the server!!", error);
  }
})();
