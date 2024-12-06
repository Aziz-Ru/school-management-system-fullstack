import { validateData } from "@/core/middlewares/validation";
import { Router } from "express";
import { createNotice, getNotice, getNotices } from "./controller";
import { noticeSchema } from "./schema";
const router = Router();

router.get("/", getNotices);
router.get("/:id", getNotice);

router.post("/", validateData(noticeSchema), createNotice);

export default router;
