import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Entrei aqui");
  res.send("Hello World");
});

app.listen(3333, () => console.log("Server is running"));
