import {
    Grid,
    Typography,
    Container,
} from "@mui/material";
import theme from "../../theme";

const BannerDisplayNumber = () => {
    return(
        <div style={{backgroundColor: theme.palette.primary.main, width:'100%'}}>
            <Container sx={{py: 6}}>
                <Grid container item xs={12} direction="row">
                    <Grid item xs={4} sx={{textAlign:"center"}}>
                        <Typography color="white" sx={{fontWeight:'bold'}} variant="h2">5</Typography>
                        <Typography variant="h5" color="white"> Année d'expérience</Typography>
                    </Grid>
                    <Grid item xs={4} sx={{textAlign:"center"}}>
                        <Typography color="white" sx={{fontWeight:'bold'}} variant="h2">54</Typography>
                        <Typography variant="h5" color="white"> Projets Réalisés</Typography>
                    </Grid>
                    <Grid item xs={4} sx={{textAlign:"center"}}>
                        <Typography color="white" sx={{fontWeight:'bold'}} variant="h2">100</Typography>
                        <Typography variant="h5" color="white"> % de clients satisfaits</Typography>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}

export default BannerDisplayNumber;