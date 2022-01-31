import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode:"light",
        primary: {
            main: '#2ab1ea',
            contrastText: '#fff',
        },
        secondary: {
            main: '#5dbbe5',
            contrastText: '#ffffff',
        },
    },
    shape: {
        borderRadius: '16px',
    },
    components: {
        MuiButton:{
            styleOverrides:{
                root:{
                    color: '#ffffff',
                    borderRadius: '48px'
                }
            }
        },
        MuiTypography: {
            styleOverrides:{
                h1: {
                    fontSize: '3.1em',
                    fontWeight: 600
                },
                h4:{
                    fontSize: '1.8em',
                    fontWeight: 'bold',
                }
            }
        }
    }
});

export default theme;
