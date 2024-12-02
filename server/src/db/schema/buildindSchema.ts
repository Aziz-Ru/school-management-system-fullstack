import { sql } from "drizzle-orm";
import {
  boolean,
  datetime,
  int,
  mysqlEnum,
  mysqlTable,
  varchar,
} from "drizzle-orm/mysql-core";
import { roomTypeEnum } from "./enum";

export const building = mysqlTable("buildings", {
  building_id: int().primaryKey(),
  building_name: varchar({ length: 255 }).notNull(),
  total_floor: int().notNull(),
  total_room: int().notNull(),
});

export const room = mysqlTable("rooms", {
  room_id: int().primaryKey(),
  building_id: int()
    .notNull()
    .references(() => building.building_id, { onDelete: "cascade" }),
  room_no: int().notNull(),
  room_type: roomTypeEnum.default("CLASS"),
  floor_no: int().notNull(),
  capacity: int().notNull(),
  hasProjector: boolean().default(false),
  hasAC: boolean().default(false),
  hasFan: boolean().default(false),
  hasCCTV: boolean().default(false),
  hasWhiteBoard: boolean().default(false),
  status: mysqlEnum(["AVAILABLE", "OCCUPIED"]).default("AVAILABLE"),
  createdAt: datetime().default(sql`CURRENT_TIMESTAMP`),
});
