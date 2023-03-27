import "dotenv/config";
import express from "express";
import { globalRouter } from "./const/router.const.js";

const PORT = process.env.PORT || 3005;
const HOST = process.env.HOST || "0.0.0.0";

const app = express();

app.use(express.json());

app.use("/api", globalRouter);

app.listen(PORT, HOST, err => {
  if (err) {
    console.log(err);
  }

  console.log(`Server is up at port: ${PORT}`);
});
