import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
export const initialState = {
  logInButton: false,
  signUpButton: false,
};

const pageSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleLogin(state, action) {
      // 값을 하나만 전달해서 값이 바로 payload에 저장이된다
      // 내가 만든 포스트를 me state에 저장하는 reducer
      state.logInButton = !action.payload;
      state.signUpButton = false;
    },
    toggleSignUp(state, action) {
      state.signUpButton = !action.payload;
      state.logInButton = false;
    },
  },
  // 외부에서 action을 만든것은 extraReducers로 가져와서 사용한다 주로 createAsyncThunk로 action을 만들 때 사용한다
  extraReducers: (builder) =>
    builder
      .addCase(HYDRATE, (state, action) => ({
        ...state,
        ...action.payload.user,
      }))

      .addDefaultCase((state) => state),
});
export const { toggleLogin, toggleSignUp } = pageSlice.actions;
export default pageSlice;
