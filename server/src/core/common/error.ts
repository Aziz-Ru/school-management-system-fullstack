import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next([{ msg: "not found" }]);
};

export const defaultErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  //Ends the Response
  res.status(err.status ? err.status : 400).json({ errors: err });
};
