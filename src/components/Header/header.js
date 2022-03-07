import {
    Container,
    Typography,
} from "@mui/material";

const Header = (props) => {
  //  const headerFond = 'linear-gradient(rgba(42,177,234,0.44), rgba(42,177,234,0.44)), url(' + props.header + ') no-repeat center center / cover'
   const headerFond = 'url(' + props.header + ') no-repeat center top / contain'

    return (
        <>

            <div style={{background: headerFond}}>
                <Container sx={{height: '80vh', display:"flex", flexDirection:"column", justifyContent: "center", alignItem:"center"}}>
                    <Typography color="primary" align="center" variant="h1" component="h1">{props.title}</Typography>
                    <Typography align="center" variant="h4" component="h2">{props.text}
                    </Typography>
                </Container>

            </div>
        </>
    );
}
export default Header;