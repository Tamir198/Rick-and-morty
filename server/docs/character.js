/**
 * @swagger
 * tags:
 *   name: Chareacter
 *   description: The character API
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     Character:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 *           description: The character id
 *         name:
 *           type: string
 *           description: The character name
 *         status:
 *           type: string
 *           description: The character status
 *         species:
 *           type: string
 *           description: The character species
 *         origin:
 *           type: string
 *           description: The character Origin
 *         locaiton:
 *           type: string
 *           description: The character Location
 *         image:
 *            type: string
 *            description: Link to the character image
 *       example:
 *         id: 8
 *         name: Adjudicator Rick
 *         status: Dead
 *         species: Human
 *         origin: unknown
 *         location: Citadel of Ricks
 *         image: https://rickandmortyapi.com/api/character/avatar/8.jpeg
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AllCharacters:
 *       type: object
 *       properties:
 *         currentPageNumber:
 *           type: string
 *           description: Current page number
 *         nextPageNumber:
 *           type: number
 *           description: Next page number.
 *         characters:
 *           type: array
 *           description: List of the characters
 *       example:
 *         currentPageNumber: "8"
 *         nextPageNumber: 9
 *         characters: ["{Character Object}, {Character Object}...."]
*/

/**
 * @swagger
 * path: 
 * /singleCharacter/{id}:
 *   get:
 *     summary: Get single character data
 *     tags: [Chareacter]
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: Character decsciption
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Character'
 */

/**
 * @swagger
 * path:
 * /allCharacters/{pageNumber}:
 *   get:
 *     summary: Get data on multyple characters
 *     tags: [Chareacter]
 *     parameters:
 *       - in: path
 *         name: pageNumber
 *     responses:
 *       200:
 *         description: characters list
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/AllCharacters'
 */