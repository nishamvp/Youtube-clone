import { createSlice } from "@reduxjs/toolkit";

const initialState ={}

const searchSlice = createSlice({
  initialState,
  name: "search",
  reducers: {
    caching: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export default searchSlice.reducer;
export const { caching } = searchSlice.actions;
