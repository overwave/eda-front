import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

interface ThemeState {
    theme: boolean | undefined
}

const initialState: ThemeState = {
    theme: undefined
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initialState,

    reducers: {
        setTheme: (state, action: PayloadAction<boolean>) => {
            state.theme = action.payload;
            localStorage.setItem('theme', String(action.payload));
        },
    },
});

export const {setTheme} = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
