import express from "express";
import {
  createStud,
  deleteStud,
  getAllStud,
  updateStud,
} from "../controllers/studController.js";

const router = express.Router();

router.get("/", getAllStud);
router.post("/", createStud);
router.put("/:id", updateStud);
router.delete("/:id", deleteStud);

export default router;
