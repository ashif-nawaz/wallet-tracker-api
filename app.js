import express from "express";
import v1 from "./api/v1/routes/index.js";

const app = express();

app.get("/", (req, res, next) => {
  res.send("OK");
});

app.use("/api/v1", v1);

app.use("*", (req, res, next) => {
  res.send("404, Not Found");
});

export default app;
