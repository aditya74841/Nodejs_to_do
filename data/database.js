import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "todoapi",
    })
    .then((c) => console.log(`Database Connected successfully with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
