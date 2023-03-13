import Express from "express";

import sequelize from "./db.js";
import cors from "cors";
import router from "./Routes/routes.js";

const app = Express();

app.use(Express.urlencoded({ extended: true }));

app.use(Express.json());

app.use(cors({ origin: "*" }));

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8888");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(router);
sequelize.sync();

export default app;
