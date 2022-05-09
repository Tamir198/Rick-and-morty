import { rest } from 'msw';
import { getSingleCharacter } from './controllers/singleCharater';
import { getAllCharaters } from './controllers/allCharaters';

const baseAdress = 'http://localhost:4000';

export const handlers = [
  rest.get(`${baseAdress}/singlecharacter/1`
    , (req, res, ctx) => getSingleCharacter(req, res, ctx)),

  rest.get(`${baseAdress}/allCharacters/1`
    , (req, res, ctx) => getAllCharaters(req, res, ctx))
]