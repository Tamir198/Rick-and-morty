import axios from 'axios'

axios.defaults.baseURL = 'https://rickandmortyapi.com/';
const axiosService = {
     fetchData : async (url) => {
        const res = await axios.get(url);
        if (res.status !== 200) return 'Error';
        return res;
      }
}

export default axiosService;