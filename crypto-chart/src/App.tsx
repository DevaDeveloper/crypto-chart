import React from "react";
import "./App.css";
import axios from "axios";
import Chart from "./features/chart/Chart";
import { store } from "./store/store";
import { setErrorMessage } from "./features/chart/ChartSlice";

function App() {
  const { dispatch } = store;

  axios.interceptors.response.use(undefined, (error) => {
    if (error.response.status === 400) {
      dispatch(setErrorMessage("Not valid!"));
    } else if (error.response.status === 401) {
      dispatch(setErrorMessage(error.response.data.message));
    } else if (error.response.status === 403) {
      console.log(error.response.data);
      dispatch(setErrorMessage("Sorry, you don't have permission!"));
    } else if (error.response.status === 500) {
      console.error(error.response.data.message);
    }
  });
  return (
    <>
      <Chart />
    </>
  );
}

export default App;
