exports.getSingleCharacter = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      "id": "1",
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "origin": "Earth (C-137)",
      "location": "Citadel of Ricks",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    }
    )
  )

}