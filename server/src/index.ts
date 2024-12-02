import { eq } from "drizzle-orm";
import express from "express";
import db from "./db";

const app = express();



app.get("/h", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
