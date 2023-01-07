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

transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  transactionsArray[id]
    ? res.json(transactionsArray[id])
    : res.status(404).json("Not Found");
});

module.exports = transactions;
