
import generalInfo from "../models/generalInfoModel.js";
import axiosService  from "../services/axiosService.js";

const getCharactersCount = (arr) => {
  const res = [];
  arr.forEach(item => res.push(item.data.info.count));
  return res;
}

const generateUrl = (status, name) => `api/character/?status=${status}&name=${name}`

async function getGeneralInfoData() {
  const res = await axiosService.getAndWait([
    generateUrl("alive", "rick"),
    generateUrl("alive", "morty"),
    generateUrl("dead", "rick"),
    generateUrl("dead", "morty"),
  ], getCharactersCount);

  return new generalInfo(
    `Alive: ${res[0]} Dead: ${res[1]}`,
    `Alive: ${res[2]} Dead: ${res[3]}`
  );

}

export { getGeneralInfoData }                         
