import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from './Posts';
import themeReducer from './Theme';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    theme: themeReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
