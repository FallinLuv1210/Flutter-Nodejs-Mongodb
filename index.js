const app = require("./app");
const db = require("./config/db");
const UserModel = require("./models/user_model");
const cors = require("cors");
const port = 3000;

// const app = express();
// app.use(express());
// app.use(cors());

// const product = require("./product.js");

// mongodb
//   .connect(
//     "mongodb+srv://dung:159357@cluster0.fjpisu0.mongodb.net/dbDatn?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//     }
//   )
//   .then(() => {
//     console.log("Ket noi thanh cong");

//     // chen data vao database api
//     app.post("/insertProduct", async (req, res) => {
//       const data = new product(req.body);
//       data.save().then(async () => {
//         res.json(await product.find());
//       });
//     });
//     // fetch data
//     app.get("/insertProduct", async (req, res) => {
//       const data = await product.find();
//       res.json(data);
//     });
//     //delete data
//     app.delete("/deleteProduct", async (req, res) => {
//       product.del;
//     });
app.get("/", async (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("Dang khoi chay server...");
});
//});
