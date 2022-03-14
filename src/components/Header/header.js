import {
    Container, Grid,
    Typography,
} from "@mui/material";

const Header = (props) => {
  //  const headerFond = 'linear-gradient(rgba(42,177,234,0.44), rgba(42,177,234,0.44)), url(' + props.header + ') no-repeat center center / cover'
   const headerFond = 'url(' + props.header + ') no-repeat center top / contain'

    return (
        <>

            <div style={{background: headerFond}}>
                <Container sx={{height: '80vh', display: "flex", alignItems: "center"}}>
                    <Grid container item xs={10}>
                        <Typography align="center" variant="h1" component="h1">{props.title}</Typography>
                        <Typography align="center" variant="h5" >{props.text}</Typography>
                    </Grid>
                </Container>

            </div>
        </>
    );
}
export default Header;