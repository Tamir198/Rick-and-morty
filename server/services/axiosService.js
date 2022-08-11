import axios from 'axios'

axios.defaults.baseURL = 'https://rickandmortyapi.com/';

class axiosService{
  //TODO check how enable dymanic base url
  static axiosInit = (url) => {
    axios.create({
      baseURL: url
    });
  }

  static fetchData = async (url) => {
    const res = await axios.get(url);
    if (res.status !== 200) return 'Error';
    return res;
  }
  /** 
   * Returns data from multyple requests
   @urls - array of urls to send GET reqest to
   */
  static getAndWait = async (urls,cb) => {
    const res = await axios.all(
      urls.map(url => axios.get(url))
      );

    return cb(res);
  }

}


export default axiosService;