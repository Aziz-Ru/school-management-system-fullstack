import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";

export const validateData = (schema: z.ZodObject<any, any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((err) => ({
          field: err.path.join("."),
          msg: err.message,
        }));
        res.status(400).json({
          errors: errorMessages,
        });
      } else {
        res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
      }
    }
  };
};
