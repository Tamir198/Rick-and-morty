export const URLS = {
  HOME: "home",
  SINGLE_CHARACTER: "singleChatacter",
  ALL_CHARACTERS: "allcharacters"
}

export const apiUrl = ({ pageNum=1, id=1 }) => ({
  characters: {
    getAll: `/allCharacters/${pageNum}`,
    getById: `/singleCharacter/${id}`
  },
  generalIfno: {
    getAll: '/generalInfo'
  }
})

export const SERVER = {
  BASE_URL: "http://localhost:4000"
}