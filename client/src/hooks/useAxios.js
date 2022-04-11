import axios from "axios";

import axiosService from '../services/axiosService';

const useAxios = () => {
  const fetchData = axiosService.fetchData;
  return { fetchData };
}

export default useAxios;