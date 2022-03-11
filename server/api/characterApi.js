const axios = require("axios");
const allCharactersModel = require("../models/allCharactersModel");
const characterModel = require("../models/characterModel");

exports.getCharacterById = async(id) => {

    return await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => {
            return new characterModel(
                id,
                res.data.name,
                res.data.status,
                res.data.species,
                res.data.origin.name,
                res.data.location.name,
                res.data.image
            );
        });
}


exports.getAllCharacters = async(pageNumber) => {
    const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

    return await axios.get(url).then(res => {
        const characters = [];

        res.data.results.forEach(element => {
            characters.push(new characterModel(
                element.id, element.name,
                element.status,
                element.species,
                element.origin.name,
                element.location.name,
                element.image
            ));
        });
        return new allCharactersModel(
            pageNumber, +pageNumber + 1, characters
        );
    });

}