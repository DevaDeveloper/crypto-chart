import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "../features/chart/ChartSlice";

export const store = configureStore({
  reducer: {
    chart: chartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
