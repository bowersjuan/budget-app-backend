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
  transactionsArray.some((transaction) => {
    return transaction.id === id;
  })
    ? res.json(
        transactionsArray.find((transaction) => {
          return transaction.id === id;
        })
      )
    : res.status(404).json("Not Found");
});

transactions.put("/:id", (req, res) => {
  const { id } = req.params;
  let indexToChange = "";
  const transactionToUpdate = transactionsArray.some((transaction, index) => {
    indexToChange = index;
    return transaction.id === id;
  });
  console.log(indexToChange);
  if (transactionToUpdate) {
    transactionsArray[indexToChange] = req.body;
    res.json(transactionsArray[indexToChange]);
  } else {
    res.status(404).json("Not Found");
  }
});

module.exports = transactions;
