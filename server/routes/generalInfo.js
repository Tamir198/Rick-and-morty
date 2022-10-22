import { Router } from 'express';
const router = Router();

import { getGeneralInfo } from '../controllers/generalInfoController.js';
/**
 * @swagger
 * components:
 *   schemas:
 *     General info:
 *       type: object
 *       properties:
 *         ricksInfo:
 *           type: string
 *           description: How many ricks are alive/dead
 *         mortysInfo:
 *           type: string
 *           description: How mnay mortys are alive/dead
 *       example:
 *         ricksInfo: "Alive: 29 Dead: 34"
 *         mortysInfo: "Alive: 54 Dead: 18"
 */


 /**
  * @swagger
  * tags:
  *   name: General Info
  *   description: General inforamtion regarding how many ricks and mortys are alive
  */

/**
 * @swagger
 * /generalInfo:
 *   get:
 *     summary: Returns the data regarding single character
 *     tags: [General Info]
 *     responses:
 *       200:
 *         description: General information regarding ricks and mortys
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/General info'
 */
router.get("/generalInfo", getGeneralInfo);

export default router;