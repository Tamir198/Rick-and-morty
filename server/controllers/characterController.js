exports.getSingleCharacter = (req, res) => {
    res.send(`You are asking for character with id of ${req.params.id}`);
}

exports.getAllCharacters = (req, res) => {
    res.send(`You are asking for all characters`);
}