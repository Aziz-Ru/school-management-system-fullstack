import { sql } from "drizzle-orm";
import {
  boolean,
  check,
  datetime,
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";
import { RoomTypeEnum } from "./enum";

export const building = mysqlTable("buildings", {
  buildingId: serial("building_id").primaryKey(),
  buildingName: varchar("building_name", { length: 255 }).notNull(),
  totalFloor: int("total_floor").notNull(),
  totalRoom: int("total_room").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export const room = mysqlTable(
  "rooms",
  {
    roomId: varchar("room_id", { length: 255 }).primaryKey(),
    buildingId: serial("building_id")
      .notNull()
      .references(() => building.buildingId, { onDelete: "cascade" }),
    roomNo: int("room_no").notNull(),
    roomType: RoomTypeEnum.default("CLASS").notNull(),
    floorNo: int("floor_no").notNull(),
    capacity: int("capacity").notNull(),
    hasProjector: boolean("has_projector").default(false),
    hasAC: boolean("has_ac").default(false),
    hasFan: boolean("has_fan").default(false),
    hasCCTV: boolean("has_cctv").default(false),
    hasWhiteBoard: boolean("has_white_board").default(false),
    status: mysqlEnum(["AVAILABLE", "OCCUPIED"]).default("AVAILABLE"),
    createdAt: datetime().default(sql`CURRENT_TIMESTAMP`),
  },
  (rooms) => ({
    uniqueRoom: uniqueIndex("unique_building_room").on(
      rooms.buildingId,
      rooms.roomNo
    ),
    checkCapacity: check("check_capacity", sql`${rooms.capacity}>0`),
  })
);
