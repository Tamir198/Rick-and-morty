import characterApi from '../api/characterApi.js';

export async function getSingleCharacter(req, res) {
    const character = await characterApi.getCharacterById(req.params.id);
    res.send(character);
}

export async function getAllCharacters(req, res) {
    const allCharacters = await characterApi.getCharacters(req.params.pageNumber);
    res.send(allCharacters);
}