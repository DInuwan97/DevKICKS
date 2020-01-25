const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const usersRoute = require("./Routes/api/Users");
const schoolsRoute = require("./Routes/api/Schools");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 6000;

const app = express();

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use("/api/users", usersRoute);
app.use("/api/schools", schoolsRoute);

///////////////////////////Usage of CORS/////////////////////////
app.use(cors());
var corsOption = {
  origin: "*",
  optionSuccessStatus: 200
};
app.use(cors(corsOption));
///////////////////////////Usage of CORS///////////////////////////

//////////////////////////MongoDB Configuration///////////////////

const mongoURI = "mongodb://localhost:27017/DEVKicks";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB was connected to DEVKicks"))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log("Server is listening on PORT " + PORT);
});
