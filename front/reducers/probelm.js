import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
export const initialState = {
  addProblemLoading: false,
  addProblemDone: false,
  addProblemError: null,
};
export const addProblem = createAsyncThunk(
  "problem/addproblem",
  async (data) => {
    for (const entry of data.entries()) {
      console.log(entry);
    }
    const response = await axios.post(`/problem/${data.user}`, data);
    console.log(response.data);
    return response.data;
  }
);
const problemSlice = createSlice({
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
      .addCase(addProblem.pending, (state, action) => {
        state.addPostLoading = true;
        state.addPostDone = false;
        state.addPostError = null;
      })
      .addCase(addProblem.fulfilled, (state, action) => {
        // dispatch로 넘겨준 데이터는 action.payload에 저장된다
        state.mainPosts.unshift(action.payload);
        state.addProblemLoading = false;
        state.addProblemDone = true;
      })
      .addCase(addProblem.rejected, (state, action) => {
        state.addProblemLoading = false;
        state.addProblemError = action.error;
      })
      .addDefaultCase((state) => state),
});

export default problemSlice;
