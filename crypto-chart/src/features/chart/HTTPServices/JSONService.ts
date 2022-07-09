import axios, { AxiosResponse } from "axios";
import { BASE_URL_JSON_DB } from "../../../BaseURL";

let url: string = `${BASE_URL_JSON_DB}/data`;
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
