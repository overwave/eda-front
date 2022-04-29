import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {SnackbarProvider} from 'notistack';

import {useAppDispatch, useAppSelector} from "./store/hooks";
import {DARK, LIGHT, selectTheme, set} from "./store/Theme";
import HomePage from "./app/HomePage";
import LoginPage from "./app/LoginPage";
import ModerationPage from "./app/ModerationPage";

export default function App() {
    const preferDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useAppSelector(selectTheme)?.theme;
    const dispatch = useAppDispatch();

    if (theme === undefined) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === null) {
            dispatch(set(!preferDarkTheme));
        } else {
            dispatch(set(savedTheme === 'true'));
        }
    }

    return (
        <ThemeProvider theme={theme ? LIGHT : DARK}>
            <SnackbarProvider maxSnack={3}>
                <CssBaseline/>
                <BrowserRouter basename="/">
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/moderation' element={<ModerationPage/>}/>
                    </Routes>
                </BrowserRouter>
            </SnackbarProvider>
        </ThemeProvider>
    );
}
