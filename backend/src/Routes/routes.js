import express from "express";

import { saveNew, personas } from "../Controllers/profile.js";

import multer from "multer";
const upload = multer({ dest: "./public/data/uploads/" });

const router = express.Router();

router.post("/save", upload.single("file"), saveNew);

router.get("/", (req, res, next) => {
  res.status(404).json({ error: "page not founds" });
});

router.get("/personas", personas);

export default router;
