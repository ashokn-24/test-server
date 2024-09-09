const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;

// Mock data
const mockData = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Zoro", email: "zoro@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
  { id: 4, name: "Taylor Swift", email: "taylor@example.com" },
  { id: 5, name: "The Weeknd", email: "weeknd@example.com" },
];

app.get("/api/users", (req, res) => {
  res.json(mockData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
