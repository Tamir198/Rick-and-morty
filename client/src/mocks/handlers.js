import { rest } from 'msw';
import { getSingleCharacter } from 'mocks/controllers/singleCharater';
import { getAllCharaters } from 'mocks/controllers/allCharaters';
import { SERVER } from 'constants/url';

const baseAdress = SERVER.BASE_URL;

//TODO make this more generic - one handlers array per feature
export const handlers = [
  rest.get(`${baseAdress}/singlecharacter/1`, getSingleCharacter),
  rest.get(`${baseAdress}/allCharacters/1`, getAllCharaters)
]
