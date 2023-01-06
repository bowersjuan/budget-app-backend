const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const transactionsController = require("./controllers/transactionsController");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use("/transactions", transactionsController);

app.get("/", (req, res) => {
  res.json("App running...");
});

module.exports = app;
