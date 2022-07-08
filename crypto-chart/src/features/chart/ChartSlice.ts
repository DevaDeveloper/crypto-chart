import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { InitialChartState } from "./models";
import getCryptoData from "./ChartService";
import getCryptoDataJson from "./JSONService";

const initialState: InitialChartState = {
  data: "",
  assetData: [],
  token: "",
  status: "",
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
    manualParsing: (state) => {
      let obj = {};
      let propertiesSplit = state.data.split(" ");
      console.log(propertiesSplit());
    },
  },
  extraReducers: (builder) => {
    // fetch data from api
    builder.addCase(fetchCryptoData.pending, (state) => {
      state.status = "pending";
      console.log(state.status);
    });
    builder.addCase(fetchCryptoData.fulfilled, (state, action) => {
      state.status = "fulfilled";
      // console.log(temp[78964]);

      // 78964 - 78972

      state.data = action.payload;
      console.log(action.payload);
      console.log(state.status);
    });
    builder.addCase(fetchCryptoData.rejected, (state) => {
      state.status = "rejected";
      console.log(state.status);
    });

    // fetch data fro JSON db api
    builder.addCase(fetchCryptoDataJson.pending, (state) => {
      state.status = "pending";
      console.log(state.status);
    });
    builder.addCase(fetchCryptoDataJson.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.assetData = action.payload;
      console.log(action.payload);
      console.log(state.status);
    });
    builder.addCase(fetchCryptoDataJson.rejected, (state) => {
      state.status = "rejected";
      console.log(state.status);
    });
  },
});

export const { consoling } = chartSlice.actions;

export default chartSlice.reducer;
