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
                <Container>
                    <Typography variant="h3" align="center">Travaillez avec un freelance de confiance dans tous l'Est de la France,
                        pour tous vos projets de communication !
                    </Typography>
                    {appState.services.map((service, index) => (
                        <ServiceList key={index} service={service} index={index}/>
                    ))}
                </Container>
                <BannerDisplayNumber/>
            </>
        );
    }

}

export default Accueil;