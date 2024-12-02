import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { audienceTypeEnum, noticeTypeEnum } from "./enum";

export const notice = mysqlTable("notices", {
  id: varchar({ length: 255 }).primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  filePath: varchar({ length: 255 }).notNull(),
  type: noticeTypeEnum.default("ACADEMIC"),
  audienceType: audienceTypeEnum.default("ALL"),
});
