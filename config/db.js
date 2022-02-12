import mongoose from "mongoose";

const connectDatabase = async () => {
  return mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDatabase;
