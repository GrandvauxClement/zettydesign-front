import {
    Grid,
    Typography,
    Container,
} from "@mui/material";
import theme from "../../theme";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Box from "@mui/material/Box";

const BannerDisplayNumber = () => {

    const numYearFromStared = () => {
        const start = new Date(2017, 8, 1);
        const today = new Date();
        return today.getFullYear() - start.getFullYear()
    }

    return(
        <Box
            style={{
                backgroundColor: theme.palette.primary.main,
                width:'100%',
                my: 8
            }}
        >
            <Container sx={{py: 6, mt: 3}}>
                <Grid container item xs={12} direction="row">
                    <Grid item xs={12} md={4} sx={{textAlign:"center"}}>
                        <Typography color="white" sx={{fontWeight:'bold'}} variant="h2">{numYearFromStared()}</Typography>
                        <Typography variant="h5" color="white"> Année d'expérience</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{textAlign:"center"}}>
                        <Typography color="white" sx={{fontWeight:'bold'}} variant="h2">54</Typography>
                        <Typography variant="h5" color="white"> Projets Réalisés</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{textAlign:"center"}}>
                        <Typography color="white" sx={{fontWeight:'bold'}} variant="h2">
                            <AllInclusiveIcon sx={{fontWeight:'bold', fontSize: "3.75rem"}} />
                        </Typography>
                        <Typography variant="h5" color="white">Idées</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default BannerDisplayNumber;