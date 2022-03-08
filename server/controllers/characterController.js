const characterApi = require("../api/characterApi");

exports.getSingleCharacter = async(req, res) => {
    res.send(await characterApi.getCharacterById(req.params.id));
}

exports.getAllCharacters = (req, response) => {
    response.send(`You are asking for all characters`);
}