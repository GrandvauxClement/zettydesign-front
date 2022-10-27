import {
    Container,
    Typography,
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import * as React from "react";
import ServiceService from "../../services/service.service";
import {useEffect, useState} from "react";
import ServiceList from "./servicesList";
import BannerDisplayNumber from "./bannerDisplayNumber";
import Grid from "@mui/material/Grid";
import Presentation from "../Presentation/Presentation";
import ServiceAccueilData from "../../assets/data/ServiceAccueilData";


const Accueil = () => {
    const [appState, setAppState] = useState({
        loading: true,
        services: null
    });

    useEffect(()=> {
        setAppState({loading: true});
        ServiceService.getAllService().then((data) => {
            setAppState({loading: false, services: data.data});
        });
    }, [setAppState]);

    if ( appState.services == null){
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }else{
        return(
            <>
                <Container sx={{mb:2}}>

                    <Presentation />
                    <Typography variant="h2"
                                sx={{my: 2, textAlign:{xs: 'center', md: 'left'}}} color="primary"
                    >
                        <i>Mes Services</i>
                    </Typography>
                    <Grid container spacing={2}>
                        {ServiceAccueilData.map((service, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <ServiceList  service={service} index={index}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <BannerDisplayNumber/>
            </>
        );
    }

}

export default Accueil;