import { getGeneralInfoData } from "../api/generalInfoApi.js"

export async function getGeneralInfo(req,res) {
  res.send(await getGeneralInfoData());
}