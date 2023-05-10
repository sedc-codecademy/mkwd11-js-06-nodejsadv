// This line must be first in your index.js if you want to use .env file variables
import "dotenv/config";

import express from "express";
import { globalRouter } from "./const/router.const.js";
import cors from "cors";

console.log(process.env.ACCESS_TOKEN_SECRET);

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "0.0.0.0";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", globalRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is up at port ${PORT}`);
});
