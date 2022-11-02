import { characterData } from "../data/characters";

export const getAllCharacters = (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json({
      currentPageNumber: "1",
      nextPageNumber: 2,
      characters: characterData,
    })
  );
