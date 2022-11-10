import { Router } from "express";
const router = Router();

import {getSingleCharacter,getAllCharacters} from "../controllers/characterController.js";

router.get("/singleCharacter/:id", getSingleCharacter);
router.get("/allCharacters/:pageNumber", getAllCharacters);

export default router;
