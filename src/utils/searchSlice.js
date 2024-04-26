import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  initialState: {},
  name: "search",
  reducers: {
    caching: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export default searchSlice.reducer;
export const { caching } = searchSlice.actions;
