import axios, { AxiosResponse } from "axios";

let url: string = "http://localhost:5000/data";
const getCryptoDataJson = async (token?: string) => {
  try {
    const response: AxiosResponse = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getCryptoDataJson;
