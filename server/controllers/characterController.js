const characterApi = require("../api/characterApi");

exports.getSingleCharacter = async(req, res) => {
    const character = await characterApi.getCharacterById(req.params.id);
    res.send(character);
}

exports.getAllCharacters = async(req, res) => {
    const allCharacters = await characterApi.getAllCharacters(req.params.pageNumber);
    res.send(allCharacters);
}