import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

interface JwtTokenState {
    token: string | undefined
}

const initialState: JwtTokenState = {
    token: undefined
};

export const jwtTokenSlice = createSlice({
    name: 'jwtToken',
    initialState,

    reducers: {
        setJwtToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            localStorage.setItem('jwtToken', String(action.payload));
            // localStorage.setItem('theme', String(action.payload));
        },
    },
});

export const {setJwtToken} = jwtTokenSlice.actions;

export const selectJwtToken = (state: RootState) => state.jwtToken;

export default jwtTokenSlice.reducer;
