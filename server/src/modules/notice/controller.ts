import db from "@/db";
import { notice } from "@/db/schema/noticeSchema";
import { eq } from "drizzle-orm";
import { Request, Response } from "express";
import { v4 as uuid } from "uuid";

export const getNotices = async (req: Request, res: Response) => {
  try {
    const notices = await db
      .select({
        id: notice.id,
      })
      .from(notice)
      .execute();
    res.status(200).json({ notices });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getNotice = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const exist = await db.select().from(notice).where(eq(notice.id, id));

    if (exist[0]) {
      res.status(200).json({ notice: exist[0] });
    } else {
      res.status(404).json({ errors: { msg: "notice not found" } });
    }
  } catch (error) {
    res.status(500).json({ errors: { msg: "Internal Server Error" } });
  }
};

export const createNotice = async (req: Request, res: Response) => {
  try {
    const { title, filePath, type, audienceType } = req.body;
    const id = uuid();
    await db.insert(notice).values({ id, title, filePath, type, audienceType });
    res.status(201).json({ id, msg: "Notice created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
