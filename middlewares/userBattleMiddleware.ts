import { NextFunction, Request, Response } from "express";
import { bodyUserSchema } from "../schemas/userBattleSchema.js";       

export function validateBodyUser(req: Request, res: Response, next: NextFunction) {
    const values = req.body;

    const { error } = bodyUserSchema.validate(values);

    if (error) {
        throw { type: 'unprocessable_entity', message: error.details[0].message}
    }

    next();
}