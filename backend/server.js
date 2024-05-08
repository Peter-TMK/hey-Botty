import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`Hey Botty! Running on http://localhost:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});