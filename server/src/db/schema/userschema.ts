import { sql } from "drizzle-orm";
import {
  check,
  datetime,
  int,
  mysqlTable,
  varchar,
} from "drizzle-orm/mysql-core";
import { genderEnum, roleEnum, userStatusEnum } from "./enum";

export const user = mysqlTable(
  "users",
  {
    id: int().primaryKey(),
    fullName: varchar({ length: 255 }).notNull(),
    password: varchar({ length: 255 }).notNull(),
    imgUrl: varchar({ length: 500 }),
    role: roleEnum,
    gender: genderEnum,
    status: userStatusEnum,
    lastLogin: datetime(),
    phone: varchar({ length: 11 }),
    address: varchar({ length: 255 }),

    loginAttempts: int().default(0),

    createdAt: datetime().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: datetime().default(sql`CURRENT_TIMESTAMP`),
  },
  (tabel) => {
    return {
      idCheck: check("id_check", sql`${tabel.id} > 1000`),
    };
  }
);

// export const createFullNameTrigger = sql`CREATE TRIGGER create_full_name BEFORE INSERT OR UPDATE ON users FOR EACH ROW SET NEW.fullName = CONCAT(NEW.firstName,' ' ,NEW.lastName);`;
