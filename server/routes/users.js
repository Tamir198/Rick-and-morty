import { Router } from "express";
const router = Router();

import { signUpUser, loginUser } from '../controllers/usersController.js';

router.post('/newUser', signUpUser);
router.post('/login', loginUser);

export default router;