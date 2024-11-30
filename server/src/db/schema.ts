import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const userTable = mysqlTable("users", {
  id: int().autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
});
