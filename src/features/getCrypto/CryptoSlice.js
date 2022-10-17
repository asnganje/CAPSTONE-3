/* eslint-disable */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://api.coinstats.app/public/v1/coins";

export const fetchData = createAsyncThunk(
  "features/fetchCryptoData",
  async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data.coins;
  }
);

export const cryptoSlice = createSlice({
  name: "cryptoCurrency",
  initialState: { cryptoCurrency: [], status: "idle" },

  extraReducers: {
    [fetchData.fulfilled]: (state, { payload }) => ({
      ...state,
      status: "idle",
      cryptoCurrency: payload,
    }),
    [fetchData.pending]: (state) => ({
      ...state,
      status: "pending",
    }),
  },
});

export default cryptoSlice.reducer;
