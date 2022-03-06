const express = require('express');
const router = express.Router();

const characterController = require("../controllers/characterController");

router.get("/singleCharacter/:id", characterController.getSingleCharacter);
router.get("/allCharacters", characterController.getAllCharacters);

module.exports = router;