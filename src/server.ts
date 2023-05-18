
import mongoose from "mongoose";
import app from './app'

const port:number = 5000;



// connecting the database

async function connection() {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/test`);
    console.log("db connected successfully");

    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  } catch (err) {
    console.log(`connection failed${err}`);
  }
}
connection();
// connection().catch((err) => console.log(err));

