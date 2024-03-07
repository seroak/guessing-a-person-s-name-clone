import { combineReducers } from "redux";
import axios from "axios";

import userSlice from "./user";
import pageSlice from "./page";
import gameSlice from "./game";
import problemSlice from "./problem";

axios.defaults.baseURL = "http://localhost:3065";
axios.defaults.withCredentials = true;
// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  user: userSlice.reducer,
  page: pageSlice.reducer,
  game: gameSlice.reducer,
  problem: problemSlice.reducer,
});

export default rootReducer;
