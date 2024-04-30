import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "livechat",
  initialState: {
    chatMessages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.chatMessages.unshift(action.payload);
      if(state.chatMessages.length>25){
        state.chatMessages.pop()
      }
    },
  },
});

export default liveChatSlice.reducer;
export const { addMessage } = liveChatSlice.actions;
