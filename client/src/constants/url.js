export const URLS = {
  HOME: "home",
  SINGLE_CHARACTER: "singleChatacter",
  ALL_CHARACTERS: "allcharacters"
}

export const apiUrl = ({ pageNum, characterId }) => ({
  characters: {
    getAll: `/allCharacters/${pageNum}`,
    getById: `/singleCharacter/${characterId}`
  },
  generalIfno: {
    getGenerallInfo: '/generalInfo'
  }
})