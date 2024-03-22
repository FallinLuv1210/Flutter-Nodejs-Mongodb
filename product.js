const mongodb = require("mongoose");

const schema = mongodb.Schema({
  name: String,
  id: String,
});

module.exports = mongodb.model("product_database", Schema);
