import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
export const initialState = {
  problemLoading: false, // 로그인 시도중
  problemError: null, // 로그인 에러
  problemDone: false, // 로그인 상태 체크
  getCustomProblemLoading: false, // 로그인 시도중
  getCustomProblemError: null, // 로그인 에러
  getCustomProblemDone: false, // 로그인 상태 체크
  problem: [],
};
const dummyProblem = [
  {
    src: "./카리나.png",
    name: "카리나",
    name_candi: ["카리나", "리나", ""],
  },
  {
    src: "./설윤.png",
    name: "설윤",
    name_candi: ["설윤", "윤아", "설윤아", ""],
  },
  {
    src: "./민지.png",
    name: "민지",
    name_candi: ["민지", "김민지", ""],
  },
];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
export const problemAction = createAsyncThunk(
  "game/problemAction",
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
export const getCustomProblem = createAsyncThunk(
  "game/getCustomProblem",
  async (data, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await axios.post("/getCustomProblem", data);

      return fulfillWithValue(response.data);
    } catch (error) {
      error.response.data;
      throw rejectWithValue(error.response.data);
      throw rejectWithValue(data);
    }
  }
);
const gameSlice = createSlice({
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
      .addCase(problemAction.pending, (state) => {
        state.problemLoading = true;
        state.problemDone = false;
      })
      .addCase(problemAction.fulfilled, (state, action) => {
        state.problemLoading = false;
        state.problemDone = true;
        // 불변성 에러가 일어나므로 배열을 복사해서 사용 나중에 axios로 받은 데이터도
        // 불변성 에러가 일어나는지 확인
        const shuffle_dummyProblem = shuffleArray(dummyProblem.slice());
        state.problem = shuffle_dummyProblem;
      })
      .addCase(problemAction.rejected, (state, action) => {
        state.problemLoading = false;
        state.problemError = action.payload.data.message;
      })

      .addCase(getCustomProblem.pending, (state) => {
        state.getCustomProblemLoading = true;
        state.getCustomProblemDone = false;
      })
      .addCase(getCustomProblem.fulfilled, (state, action) => {
        state.getCustomProblemLoading = false;
        state.getCustomProblemDone = true;
        state.problem = action.payload;
      })
      .addCase(getCustomProblem.rejected, (state, action) => {
        state.getCustomProblemLoading = false;
        state.getCustomProblemError = action.payload.data.message;
      })
      .addDefaultCase((state) => state),
});

export default gameSlice;
