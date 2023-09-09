import * as React from "react";
import {
    Container,
    Typography,
} from "@mui/material";
import ServiceList from "./servicesList";
import Grid from "@mui/material/Grid";
import ServiceAccueilData from "../../assets/data/ServiceAccueilData";

const Accueil = () => {

        return(
            <>
                <Container sx={{ mb: 8}}>
                    <Typography variant="h2"
                                sx={{
                                    my: 8,
                                    textAlign:{xs: 'center', md: 'left'},
                                    fontSize:{xs: '2.3em', md: '3.3em'}
                                }}
                                color="primary"
                    >
                        Mes Services
                    </Typography>
                    <Grid container spacing={2}>
                        {ServiceAccueilData.map((service, index) => (
                            <Grid item xs={6} md={6} lg={3} key={index}>
                                <ServiceList  service={service} index={index}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            </>
        );

}

export default Accueil;