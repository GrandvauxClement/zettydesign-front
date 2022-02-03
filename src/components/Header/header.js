import NavBar from "../Navbar/navbar";
import header from "../../assets/images/header.jpg";
import {
    Container,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";

const Header = () => {
    const headerFond = 'linear-gradient(rgba(42,177,234,0.44), rgba(42,177,234,0.44)), url(' + header + ') no-repeat center center / cover'
    return (
        <>
            <NavBar />
            <div style={{background: headerFond}}>
                <Container sx={{height: '80vh', display:"flex", flexDirection:"column", justifyContent: "center", alignItem:"center"}}>
                    <Typography color="white" align="center" variant="h1" component="h1">Votre freelance en communication dans tous l'est de la France </Typography>
                    <Typography align="center" variant="h4" component="h2">Création de site Internet & référencement naturel, Graphisme, Community Management,
                        Stratégies de communication, ..
                    </Typography>
                </Container>

            </div>
        </>
    );
}
export default Header;