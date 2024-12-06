import { Router } from "express";
import noticeRouter from "./notice";
const router = Router();

router.use("/notice", noticeRouter);
router.get("/", (req, res) => {
  res.send("Admin module");
});

export default router;
