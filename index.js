import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`Server Started Listening On Port ${process.env.PORT}`);
});