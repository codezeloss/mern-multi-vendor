const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./config/dbConnect");

// !! config env
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "./.env" });
}

// !! connect DB
connectDB();

// !! PORT
const PORT = 4000 || process.env.PORT;

// !! Listen to server
app.listen(PORT, () => {
  console.log("::: 🚀 Server has started :::".cyan.bold);
});
