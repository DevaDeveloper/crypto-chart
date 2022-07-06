import axios, { AxiosResponse } from "axios";

const getCryptoData = async (url: string, query = {}) => {
  try {
    const response: AxiosResponse = await axios.get(url, {
      headers: {},
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getCryptoData;
