import { rest } from 'msw';
import { getSingleCharacter } from './controllers/singleCharater';
import { getAllCharaters } from './controllers/allCharaters';

//TODO change this to constant confige files 
const baseAdress = 'http://localhost:4000';

//TODO make this more generic - one handlers array per feature
export const handlers = [
  rest.get(`${baseAdress}/singlecharacter/1`, getSingleCharacter),
  rest.get(`${baseAdress}/allCharacters/1`, getAllCharaters)
]
