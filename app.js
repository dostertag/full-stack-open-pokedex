import express, { static } from "express";
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5001;

app.use(static("dist"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
