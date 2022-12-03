import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'cursive'
        ].join(',')
    },
    palette: {
        mode:"light",
        primary: {
            main: '#7d9fd3',
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
                    fontSize: '4.0em',
                    fontWeight: 900,
                },
                h2:{
                    fontSize: '3.3em',
                    fontWeight: 700,
                },
                h3:{
                  fontSize: '1.6em',
                  fontWeight: 'bolder',
                },
                h4:{
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                },
                h6:{
                    fontSize: '1.5em',
                    fontWeight: "bold",
                }
            }
        }
    }
});

export default theme;