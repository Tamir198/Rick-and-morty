const axios = require("axios");
const characterModel = require("../models/characterModel");

exports.getCharacterById = async(id) => {
    return await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => {
            return new characterModel(
                id, res.data.name,
                res.data.status,
                res.data.species,
                res.data.origin.name,
                res.data.location.name
            );
        });
}