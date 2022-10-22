import { Router } from 'express';
const router = Router();

import { getGeneralInfo } from '../controllers/generalInfoController.js';

router.get("/generalInfo", getGeneralInfo);

export default router;