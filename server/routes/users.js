import { Router } from "express";
const router = Router();

import { generateToken, loginUser } from '../controllers/usersController.js';

router.post('/newUser', generateToken);
router.post('/login', loginUser);

export default router;