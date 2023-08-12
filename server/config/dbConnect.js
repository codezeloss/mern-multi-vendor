const { connect } = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `::: ✅  DB connection successful w/ server: ${conn.connection.host} :::`
        .magenta.bold
    );
  } catch (error) {
    console.log("::: Some DB errors occurred!! :::".red.bold);
    console.log(error.message);
  }
};

module.exports = connectDB;
