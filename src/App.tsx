import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {SnackbarProvider} from 'notistack';

import {useAppDispatch, useAppSelector} from "./store/hooks";
import {selectTheme, setTheme} from "./store/Theme";
import {DARK, LIGHT} from "./Theme";
import {HomePage} from "./page/HomePage";
import {LoginPage} from "./page/LoginPage";
import {ModerationPage} from "./page/ModerationPage";
import {AppBar} from "./component/app_bar/AppBar";
import {RequireAuth} from "./component/auth/RequireAuth";

export default function App() {
    const preferDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useAppSelector(selectTheme)?.theme;
    const dispatch = useAppDispatch();

    if (theme === undefined) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === null) {
            dispatch(setTheme(!preferDarkTheme));
        } else {
            dispatch(setTheme(savedTheme === 'true'));
        }
    }

    return (
        <ThemeProvider theme={theme ? LIGHT : DARK}>
            <CssBaseline enableColorScheme/>
            <SnackbarProvider maxSnack={3}>
                <AppBar/>
                <BrowserRouter basename="/">
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/moderation' element={
                            <RequireAuth>
                                <ModerationPage/>
                            </RequireAuth>
                        }
                        />
                    </Routes>
                </BrowserRouter>
            </SnackbarProvider>
        </ThemeProvider>
    );
}
