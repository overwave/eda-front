import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import postsReducer from './Posts';
import themeReducer from './Theme';
import jwtTokenReducer from './JwtToken';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    theme: themeReducer,
    jwtToken: jwtTokenReducer
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
