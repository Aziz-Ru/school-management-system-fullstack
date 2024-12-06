import express from "express";
import { defaultErrorHandler, notFoundHandler } from "./core/common/error";
import adminRouter from "./modules/admin";
import teacherRouter from "./modules/teacher";
const app = express();

//parse json body from request based on body-parser
//type - default application/json
app.use(express.json());
//URL-encoded data looks like a query string (key1=value1&key2=value2)
app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRouter);
app.use("/teacher", teacherRouter);

app.use(notFoundHandler);
app.use(defaultErrorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
