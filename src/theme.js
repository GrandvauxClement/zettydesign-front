import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode:"light",
        primary: {
            main: '#4babff',
            contrastText: '#fff',
        },
    },
    shape: {
      //  borderRadius: '16px',
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
                    fontSize: '4.1em',
                    fontWeight: 600,
                    fontFamily: "haylard-text, sans-serif"
                },
                h4:{
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                }
            }
        }
    }
});

export default theme;