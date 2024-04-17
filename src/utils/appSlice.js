import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  initialState: {
    isMenuOpen: true,
  },
  name: "app",
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
