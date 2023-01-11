const { v4: uuidv4 } = require("uuid");

module.exports = [
  {
    id: uuidv4(),
    itemName: "monthly tips",
    amount: 1000,
    date: "2023-01-01",
    from: "TGIF Corp Bank",
    category: "income",
  },
  {
    id: uuidv4(),
    itemName: "food",
    amount: -200,
    date: "2023-01-08",
    from: "BJs",
    category: "personal expense",
  },
  {
    id: uuidv4(),
    itemName: "church gig",
    amount: 50,
    date: "2023-01-13",
    from: "UPC",
    category: "side income",
  },
  {
    id: uuidv4(),
    itemName: "phone-bill",
    amount: -100,
    date: "2022-12-19",
    from: "T-Mobile",
    category: "tech expense",
  },
  {
    id: uuidv4(),
    itemName: "rent",
    amount: -800,
    date: "2022-01-01",
    from: "231 Avenue B",
    category: "living expense",
  },
  {
    id: uuidv4(),
    itemName: "annual bonus",
    amount: 2000,
    date: "2022-12-25",
    from: "Open AI",
    category: "bonus income",
  },
];
