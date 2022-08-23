import { apiUrl } from "constants/url"
import { Api } from "./api/api"

export class GeneralInfoServie {
  static getAll = () => Api.get(apiUrl({}).generalIfno.getAll);
}