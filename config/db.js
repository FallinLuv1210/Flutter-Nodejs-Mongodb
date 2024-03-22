const mongoose = require("mongoose");
const connection = mongoose
  .createConnection("mongodb://localhost:27017/dbDatn")
  .on("open", () => {
    console.log("Ket noi db thanh cong");
  })
  .on("error", () => {
    console.log("Ket noi db that bai");
  });

module.exports = connection;
