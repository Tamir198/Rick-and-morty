import { apiUrl } from "constants/url"
import { Api } from "./api/api"

export class CharacterService {
  static getAll = (pageNum) => Api.get(apiUrl({ pageNum }).characters.getAll);
  static getById = (characterId) => Api.get(apiUrl({ id: characterId }).characters.getById);
}

