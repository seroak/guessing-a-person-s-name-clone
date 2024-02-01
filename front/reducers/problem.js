import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
export const initialState = {
  addProblemLoading: false,
  addProblemDone: false,
  addProblemError: null,
  getProblemLoading: false,
  getProblemDone: false,
  getProblemError: null,
  uploadImageLoading: false,
  uploadImageDone: false,
  uploadImageError: null,
  updateProblemLoading: false,
  updateProblemDone: false,
  updateProblemError: null,
  deleteProblemLoading: false,
  deleteProblemDone: false,
  deleteProblemError: null,
  problemList: [],
  imagePath: "",
};

export const addProblem = createAsyncThunk(
  "problem/addproblem",
  async (data) => {
    console.log(data);
    const response = await axios.post("/problem/addProblem", data);
    console.log(response.data);
    return response.data;
  }
);

export const updateProblem = createAsyncThunk(
  "problem/updateproblem",
  async (data, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await axios.put("problem/updateproblem", data);
      return fulfillWithValue(response.data);
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  }
);

export const getProblem = createAsyncThunk("problem/getProblem", async () => {
  const response = await axios.get("/problem/getProblem");
  console.log(response.data);
  return response.data;
});

export const deleteProblem = createAsyncThunk(
  "problem/deleteProblem",
  async (data, { rejectWithValue, fulfillWithValue }) => {
    try {
      console.log(data);
      const response = await axios.post("/problem/deleteProblem", data);
      return fulfillWithValue(response.data);
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  }
);
export const uploadImage = createAsyncThunk(
  "problem/uploadImage",
  async (data) => {
    const response = await axios.post("/problem/image", data);
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
        state.addProblemLoading = false;
        state.addProblemDone = true;
      })
      .addCase(addProblem.rejected, (state, action) => {
        state.getProblemLoading = false;
        state.getProblemError = action.error;
      })
      .addCase(getProblem.pending, (state, action) => {
        state.getPostLoading = true;
        state.getPostDone = false;
        state.getPostError = null;
      })
      .addCase(getProblem.fulfilled, (state, action) => {
        // dispatch로 넘겨준 데이터는 action.payload에 저장된다
        console.log(action.payload);
        state.problemList = action.payload;
        state.getProblemLoading = false;
        state.getProblemDone = true;
      })
      .addCase(getProblem.rejected, (state, action) => {
        state.getProblemLoading = false;
        state.getProblemError = action.error;
      })
      .addCase(uploadImage.pending, (state, action) => {
        state.uploadImageLoading = true;
        state.uploadImageDone = false;
        state.uploadImageError = null;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.imagePath = action.payload;
        state.uploadImageLoading = false;
        state.uploadImageDone = true;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.uploadImageLoading = false;
        state.uploadImageError = action.error;
      })
      .addCase(updateProblem.pending, (state, action) => {
        state.updateProblemLoading = true;
        state.updateProblemDone = false;
        state.updateProblemError = null;
      })
      .addCase(updateProblem.fulfilled, (state, action) => {
        console.log(action.payload);
        state.updateProblemLoading = false;
        state.updateProblemDone = true;
      })
      .addCase(updateProblem.rejected, (state, action) => {
        state.updateProblemLoading = false;
        state.updateProblemError = action.error;
      })
      .addCase(deleteProblem.pending, (state, action) => {
        state.deleteProblemLoading = true;
        state.deleteProblemDone = false;
        state.deleteProblemError = null;
      })
      .addCase(deleteProblem.fulfilled, (state, action) => {
        console.log(action.payload);
        state.deleteProblemLoading = false;
        state.deleteProblemDone = true;
      })
      .addCase(deleteProblem.rejected, (state, action) => {
        state.deleteProblemLoading = false;
        state.deleteProblemError = action.error;
      })
      .addDefaultCase((state) => state),
});

export default problemSlice;
