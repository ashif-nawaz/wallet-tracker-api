import express from "express";
import resHeaders from "./api/v1/middleware/res-headers.js";
import v1 from "./api/v1/routes/index.js";

const app = express();

app.use(resHeaders);
app.use(express.json({ type: "*/json" }));

app.get("/", (req, res, next) => {
  res.send("OK");
});

app.use("/api/v1", v1);

app.use("*", (req, res, next) => {
  res.send("404, Not Found");
});

app.use((err, req, res, next) => {
  console.log("Error handler", err);
  res.json("error occured");
});

export default app;
