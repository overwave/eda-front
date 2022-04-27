import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import {createTheme} from '@mui/material/styles';


export const DARK = createTheme({
    palette: {
        mode: 'dark'
    },
});
export const LIGHT = createTheme({
    palette: {
        mode: 'light'
    },
});

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
        set: (state, action: PayloadAction<boolean>) => {
            state.theme = action.payload;
            localStorage.setItem('theme', String(action.payload));
        },
    },
});

export const {set} = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
