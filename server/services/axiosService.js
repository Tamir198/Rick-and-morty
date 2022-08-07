import axios from 'axios'

axios.defaults.baseURL = 'https://rickandmortyapi.com/';

const axiosService = {
  fetchData: async (url) => {
    const res = await axios.get(url);
    if (res.status !== 200) return 'Error';
    return res;
  },
  /** 
   * Returns data from multyple requests
   @urls - array of urls to send GET reqest to
   */
  getAndWait: async (urls,cb) => {
    const res = await axios.all(
      urls.map(url => axios.get(url))
      );

    return cb(res);
  }
}

export { axiosService };