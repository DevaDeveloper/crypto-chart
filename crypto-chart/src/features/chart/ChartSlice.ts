import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { InitialChartState } from "./models";
import getCryptoData from "./ChartService";

const initialState: InitialChartState = {
  data: {},
  token: "",
  status: "",
};

export const fetchCryptoData = createAsyncThunk(
  "chart/fetchCryptoData",
  async () => getCryptoData()
);

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    consoling: () => {
      console.log("data");
    },
  },
  extraReducers: (builder) => {
    // fetch data from api
    builder.addCase(fetchCryptoData.pending, (state) => {
      state.status = "pending";
      console.log(state.status);
    });
    builder.addCase(
      fetchCryptoData.fulfilled,
      (state, action: PayloadAction<object>) => {
        state.status = "fulfilled";
        state.data = action.payload;
        console.log(action.payload);
        console.log(state.status);
      }
    );
    builder.addCase(fetchCryptoData.rejected, (state) => {
      state.status = "rejected";
      console.log(state.status);
    });
  },
});

export const { consoling } = chartSlice.actions;

export default chartSlice.reducer;
