import express, { json } from "express";
import { data } from "./api.js";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const filter_data = data.filter((val) => val.place == id);
  res.json(filter_data);
});

app.listen(port, () => {
  console.log("server is on http://localhost:", port);
});
