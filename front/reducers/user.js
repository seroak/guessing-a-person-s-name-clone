import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInError: null, // 로그인 에러
  logInDone: false, // 로그인 상태 체크

  logOutLoading: false, //로그아웃 시도중
  logOutError: null, // 로그아웃 에러

  signUpLoading: false, // 회원가입 시도중
  signUpDone: false, // 회원가입 상태 체크
  signUpError: null, // 회원가입 에러

  me: null,
};
const dummyUser = {
  nickname: "제로초",
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [{ id: "부기초" }, { id: "Chanho park" }, { id: "PAKA" }],
  Followers: [{ id: "부기초" }, { id: "Chanho park" }, { id: "PAKA" }],
};
export const loginAction = createAsyncThunk(
  "user/login",
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      //   const response = await axios.post("/user/login", data);
      //   return fulfillWithValue(response.config.data);
      return fulfillWithValue(data);
    } catch (error) {
      //   throw rejectWithValue(error.response.data);
      throw rejectWithValue(data);
    }
  }
);
export const logoutAction = createAsyncThunk("user/logout", async () => {
  //   const response = await axios.post("/user/logout");
  return;
});

export const signUp = createAsyncThunk(
  "user/signup",
  async (data, { rejectWithValue, fulfillWithValue }) => {
    try {
      //   const response = await axios.post("/user", data);
      // response data안에config.data에 회원가입 정보들이 들어있다
      //   return fulfillWithValue(response.config.data);
      return fulfillWithValue(data);
    } catch (error) {
      //error.response.data 안에 send로 보낸 message가 들어있다
      //   throw rejectWithValue(error.response.data);
      throw rejectWithValue(data);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  // 외부에서 action을 만든것은 extraReducers로 가져와서 사용한다 주로 createAsyncThunk로 action을 만들 때 사용한다
  extraReducers: (builder) =>
    builder
      .addCase(HYDRATE, (state, action) => ({
        ...state,
        ...action.payload.user,
      }))
      .addCase(loginAction.pending, (state) => {
        state.logInLoading = true;
        state.logInDone = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.logInLoading = false;
        state.logInDone = true;
        state.me = dummyUser;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.logInLoading = false;
        state.logInError = action.payload.data.message;
      })
      .addCase(logoutAction.pending, (state) => {
        state.logOutLoading = true;
        state.logInDone = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.logOutLoading = false;
        state.logInDone = false;
        state.me = null;
      })
      .addCase(logoutAction.rejected, (state, action) => {
        state.logOutLoading = false;
        state.logOutError = action.payload;
      })
      //signUp 리듀서
      .addCase(signUp.pending, (state, action) => {
        state.signUpLoading = true;
        state.signUpDone = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.signUpLoading = false;
        state.signUpDone = true;
        state.signUpData = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.signUpError = action.payload;
      })

      .addDefaultCase((state) => state),
});
export default userSlice;
