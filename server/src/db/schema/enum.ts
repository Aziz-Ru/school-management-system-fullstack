import { mysqlEnum } from "drizzle-orm/mysql-core";

export const roleEnum = mysqlEnum("role_enum", [
  "ADMIN",
  "SUBADMIN",
  "TEACHER",
  "STUDENT",
  "PARENT",
]);

export const genderEnum = mysqlEnum("gender_enum", ["MALE", "FEMALE"]);

export const userStatusEnum = mysqlEnum("user_status_enum", [
  "ACTIVE",
  "INACTIVE",
  "BLOCKED",
  "DELETED",
  "PENDING",
  "APPROVED",
]);

export const labelEnum = mysqlEnum("label_enum", [
  "PRIMARY",
  "SECONDARY",
  "COLLEGE",
]);

export const attendanceStatusEnum = mysqlEnum("attendance_status_enum", [
  "PRESENT",
  "ABSENT",
  "HALF_DAY",
  "LEAVE",
  "LATE",
  "EXCUSED",
  "ON_LEAVE",
]);

export const examStatusEnum = mysqlEnum("exam_status_enum", [
  "PENDING",
  "IN_PROGRESS",
  "COMPLETED",
]);

export const examTypeEnum = mysqlEnum("exam_type_enum", [
  "THEORY",
  "PRACTICAL",
]);

export const examResultEnum = mysqlEnum("exam_result_enum", ["PASS", "FAIL"]);

export const examGradeEnum = mysqlEnum("exam_grade_enum", [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
]);

export const periodTypeEnum = mysqlEnum("period_enum", [
  "REGULAR",
  "LAB",
  "ACTIVITY",
  "BREAK",
  "ASSEMBLY",
]);

export const leaveTypeEnum = mysqlEnum("leave_type_enum", [
  "SICK",
  "CASUAL",
  "HALF_DAY",
  "LEAVE",
  "LATE",
  "EXCUSED",
  "ON_LEAVE",
  "OTHER",
]);

export const paymentStatusEnum = mysqlEnum("payment_status_enum", [
  "PENDING",
  "PAID",
  "PARTIAL",
  "FAILED",
]);

export const paymentMethodEnum = mysqlEnum("payment_method_enum", [
  "CASH",
  "CHEQUE",
  "CARD",
  "UPI",
  "NETBANKING",
]);

export const paymentTypeEnum = mysqlEnum("payment_type_enum", [
  "ADMISSION",
  "TUTION",
  "TRANSPORT",
  "EXAM",
  "BOOK",
  "UNIFORM",
  "OTHER",
]);

export const audienceTypeEnum = mysqlEnum("audience_type_enum", [
  "STUDENT",
  "PARENT",
  "TEACHER",
  "ALL",
]);

export const noticeTypeEnum = mysqlEnum("notice_type_enum", [
  "ACADEMIC",
  "ADMINISTRATIVE",
  "EXAM",
  "EVENT",
  "HOLIDAY",
  "OTHER",
  "ADMISSION",
  "FEE",
]);

export const notificationTypeEnum = mysqlEnum("notification_type_enum", [
  "EMAIL",
  "SMS",
  "PUSH",
]);

export const notificationStatusEnum = mysqlEnum("notification_status_enum", [
  "PENDING",
  "SENT",
  "FAILED",
]);

export const roomTypeEnum = mysqlEnum("room_type_enum", [
  "CLASS",
  "LAB",
  "LIBRARY",
  "PLAYGROUND",
  "HALL",
]);

export const roomStatusEnum = mysqlEnum("room_status_enum", [
  "AVAILABLE",
  "OCCUPIED",
  "UNDER_REPAIR",
]);

export const authorityRoleEnum = mysqlEnum("authority_role_enum", [
  "PRESIDENT",
  "VICE_PRESIDENT",
  "MANAGER",
  "SECRETARY",
  "COORDINATOR",
  "MEMBER",
]);
