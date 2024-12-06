import { z } from "zod";

export const noticeSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  filePath: z
    .string({
      required_error: "File path is required",
    })
    .url({
      message: "Invalid file url",
    }),
  type: z.enum(
    [
      "ACADEMIC",
      "ADMINISTRATIVE",
      "EXAM",
      "EVENT",
      "HOLIDAY",
      "OTHER",
      "ADMISSION",
      "FEE",
    ],
    { message: "Invalid notice type" }
  ),
  audienceType: z.enum(["STUDENT", "PARENT", "TEACHER", "ALL"], {
    message: "Invalid audience type",
  }),
});
