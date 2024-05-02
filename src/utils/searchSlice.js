import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const searchSlice = createSlice({
  initialState,
  name: "search",
  reducers: {
    caching: (state, action) => {
      if (Object.keys(state).length > 24) {
        const entries = Object.entries(state);
        const slicedEntries = entries.slice(1);
        state = Object.fromEntries(slicedEntries);
      }
      return { ...state, ...action.payload };
    },
  },
});

export default searchSlice.reducer;
export const { caching } = searchSlice.actions;
