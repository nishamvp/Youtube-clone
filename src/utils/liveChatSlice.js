import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "livechat",
  initialState: {
    chatMessages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.chatMessages.push(action.payload);
    },
  },
});

export default liveChatSlice.reducer;
export const { addMessage } = liveChatSlice.actions;
