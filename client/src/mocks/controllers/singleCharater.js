import { characterData } from "../data/characters";

export const getSingleCharacter = (req, res, ctx) =>
  res(ctx.status(200), ctx.json(characterData[0]));
