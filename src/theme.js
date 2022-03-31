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
                h2:{
                    fontSize: '3.3em',
                    fontWeight: 500,
                    fontFamily: "haylard-text, sans-serif"
                },
                h3:{
                  fontSize: '1.6em',
                  fontWeight: 'bolder'
                },
                h4:{
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                },
                h6:{
                    fontSize: '1em',
                    fontWeight: "bold"
                }
            }
        }
    }
});

export default theme;