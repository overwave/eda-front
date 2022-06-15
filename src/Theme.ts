import {createTheme} from "@mui/material/styles";
import colors from './style.module.scss'

export const DARK = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        },
        success: {
            main: colors.success,
        },
        error: {
            main: colors.error,
        },
        info: {
            main: colors.info,
        },
    },
});
export const LIGHT = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        },
        success: {
            main: colors.success,
        },
        error: {
            main: colors.error,
        },
        info: {
            main: colors.info,
        },
    },
});
