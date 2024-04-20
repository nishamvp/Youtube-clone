import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  initialState: {
    isMenuOpen: true,
    popularVideos: null,
  },
  name: "app",
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, setPopularVideos, closeMenu } = appSlice.actions;
export default appSlice.reducer;
