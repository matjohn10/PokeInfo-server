const express = require("express");
const cors = require("cors");
// const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

// const sendEmail = require("./utils/sendEmail");
// const storeEmail = require("./utils/storeDB");

const PORT = process.env.PORT;
const app = express();
app.use(
  bodyParser.urlencoded({
    limit: "5000mb",
    extended: true,
    parameterLimit: 100000000000,
  })
);

app.use(
  cors({
    origin: ["https://pokeinfo-dul5.onrender.com", "http://localhost:5173"],
  })
); // 'http://localhost:5173'
app.use(express.json());
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "..", "client")));

app.use("/get", require("./routes/api"));
app.use("/newsletter", require("./routes/newsletter"));
app.use("/users", require("./routes/users"));

// app.get("/pokedex/*", (req, res) => {
//   console.log("here");
//   res.sendFile(path.join(__dirname, "../client/index.html"));
// });

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
