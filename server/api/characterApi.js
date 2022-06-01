import get from "axios";
import allCharactersModel from "../models/allCharactersModel.js"
import characterModel from "../models/characterModel.js";

async function getCharacterById(id) {

  return await get(`https://rickandmortyapi.com/api/character/${id}`)
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

async function getCharacters(pageNumber) {
  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  return await get(url).then(res => {
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


export {getCharacterById, getCharacters}
