import { rest } from "msw";
import { getSingleCharacter } from "./controllers/singleCharacter";
import { getAllCharacters } from "./controllers/allCharacters";
import { apiUrl, SERVER } from "constants/url";

const baseAddress = SERVER.BASE_URL;

//TODO make this more generic - one handlers array per feature
export const handlers = [
  rest.get(
    `${baseAddress}${apiUrl({ id: 1 }).characters.getById}`,
    getSingleCharacter
  ),
  rest.get(
    `${baseAddress}${apiUrl({ id: 1 }).characters.getAll}`,
    getAllCharacters
  ),
];
