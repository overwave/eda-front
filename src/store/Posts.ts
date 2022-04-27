import {createAsyncThunk, createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

import * as PostsApi from '../api/Posts';
import {Post} from "../type/Post";

interface PostsState {
    value: Post[];
    status: 'initial' | 'pending' | 'done' | 'error';
}

const initialState: PostsState = {
    value: [],
    status: 'initial'
};

export const getPosts = createAsyncThunk(
    'posts/get',
    async (payload?: { page?: number, size?: number }) => await PostsApi.get(payload?.page, payload?.size)
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState,

    reducers: {
        set: (state: Draft<PostsState>, action: PayloadAction<Post[]>): void => {
            state.value.push(...action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.value.push(...action.payload.content);
                state.status = 'done';
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.value = [];
                state.status = 'error';
            });
    },
});

export const {set} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts;

// export const incrementIfOdd = (amount: number): AppThunk => (
//     dispatch,
//     getState
// ) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//         dispatch(incrementByAmount(amount));
//     }
// };

export default postsSlice.reducer;
