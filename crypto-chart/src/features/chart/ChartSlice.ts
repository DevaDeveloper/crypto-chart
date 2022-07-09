import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialChartState } from "./models";
import getCryptoData from "./HTTPServices/ChartService";
import getCryptoDataJson from "./HTTPServices/JSONService";

const initialState: InitialChartState = {
  data: "",
  assetData: [],
  token: "",
  status: "",
  APRDaily: 0.05,
  APRStartValue: 6.5,
  date: 2,
  TVLDaily: 0.0359,
  TVLStartValue: Math.floor(Math.random() * 4000),
  errorMessages: "",
};

export const fetchCryptoData = createAsyncThunk(
  "chart/fetchCryptoData",
  async () => getCryptoData()
);

export const fetchCryptoDataJson = createAsyncThunk(
  "chart/fetchCryptoDataJson",
  async () => getCryptoDataJson()
);

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    consoling: () => {
      console.log("data");
    },
    setErrorMessage: (state, action) => {
      state.errorMessages = action.payload;
    },
  },
  extraReducers: (builder) => {
    // fetch data from api
    builder.addCase(fetchCryptoData.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchCryptoData.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.data = action.payload;
    });
    builder.addCase(fetchCryptoData.rejected, (state) => {
      state.status = "rejected";
    });

    // fetch data fro JSON db api
    builder.addCase(fetchCryptoDataJson.pending, (state) => {
      state.status = "pending";
      console.log(state.status);
    });
    builder.addCase(fetchCryptoDataJson.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.assetData = action.payload;
    });
    builder.addCase(fetchCryptoDataJson.rejected, (state) => {
      state.status = "rejected";
      console.log(state.status);
    });
  },
});

export const { consoling, setErrorMessage } = chartSlice.actions;

export default chartSlice.reducer;
