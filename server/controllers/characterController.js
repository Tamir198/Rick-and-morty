import {getCharacterById,getCharacters} from '../api/characterApi.js'

export async function getSingleCharacter(req, res) {
    const character = await getCharacterById(req.params.id);
    res.send(character);
}

export async function getAllCharacters(req, res) {
    const allCharacters = await getCharacters(req.params.pageNumber);
    res.send(allCharacters);
}