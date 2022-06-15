import React from "react";
import {AppBar as MuiAppBar, Avatar, Slide, Toolbar, Typography, useScrollTrigger} from "@mui/material";
import {FreeBreakfastOutlined as BreakfastIcon} from "@mui/icons-material";

import {ThemeSwitch} from '../theme_switch/ThemeSwitch'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectTheme, setTheme} from "../../store/Theme";

export function AppBar() {
    const trigger = useScrollTrigger();
    const dispatch = useAppDispatch();

    const theme = useAppSelector(selectTheme)?.theme;
    const toggleTheme = () => dispatch(setTheme(!theme));
    const pictureUrl = localStorage.getItem("profile_picture") || "";

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <MuiAppBar>
                <Toolbar>
                    <BreakfastIcon sx={{mr: 2}}/>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Где поесть
                    </Typography>
                    <ThemeSwitch sx={{mr: 3}} onChange={toggleTheme} checked={theme}/>
                    <Avatar src={pictureUrl}>KR</Avatar>
                </Toolbar>
            </MuiAppBar>
        </Slide>
    );
}
