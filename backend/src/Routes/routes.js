import express from "express";

import { saveNew } from "../Controllers/profile.js";

const router = express.Router();

router.post("/save", saveNew);

router.get("/", (req, res, next) => {
  res.status(404).json({ error: "page not founds" });
});

export default router;
