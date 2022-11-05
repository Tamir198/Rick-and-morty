import { apiUrl } from "constants/url";
import { Api } from "./api/api";

export class GeneralInfoService {
  static getAll = () => Api.get(apiUrl().generalInfo.getAll);
}
