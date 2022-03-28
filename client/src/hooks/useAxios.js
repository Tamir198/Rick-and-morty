import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4000/';

const useAxios = () => {

  const fetchData = async (url) => {
    const res = await axios.get(url);
    if(res.status !== 200) return 'Error';
    return res;
  };

  return { fetchData };
}

export default useAxios;