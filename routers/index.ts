import { Router } from "express";
import { validateBodyUser } from "../middlewares/userBattleMiddleware.js";
import { compareUsersStars } from "../controllers/battleController.js";

const router = Router();

router.post('/battle', validateBodyUser, compareUsersStars)
router.get('/ranking',)

export default router;