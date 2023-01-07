const { v4: uuidv4 } = require("uuid");

module.exports = [
  {
    id: uuidv4(),
    itemName: "monthly tips",
    amount: 1000,
    date: "2023-1-1",
    from: "employer",
    category: "income",
  },
  {
    id: uuidv4(),
    itemName: "food",
    amount: -200,
    date: "2023-1-8",
    from: "supermarket",
    category: "personal expenses",
  },
];
