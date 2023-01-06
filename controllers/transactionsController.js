const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transaction");

transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

transactions.post("/new", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray.at(-1));
});

module.exports = transactions;
