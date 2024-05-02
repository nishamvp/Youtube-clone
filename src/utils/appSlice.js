import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  initialState: {
    isMenuOpen: true,
    popularVideos: null,
    searchedVideos: null,
  },
  name: "app",
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
    setSearchedVideos: (state, action) => {
      state.searchedVideos = action.payload;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, setPopularVideos, setSearchedVideos, closeMenu } =
  appSlice.actions;
export default appSlice.reducer;
