import { Request, Response } from "express";
import userServices from "../services/userService.js";

export async function compareUsersStars(req: Request, res: Response){
    const { firstUser, secondUser } = req.body;

    const firstUserData = await userServices.getUserData(firstUser);
    const secondUserData = await userServices.getUserData(secondUser);

    const battleResult = userServices.battleUserStar(firstUserData, secondUserData);
    
    res.send(battleResult);
}