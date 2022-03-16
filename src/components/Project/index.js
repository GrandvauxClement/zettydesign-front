import * as React from "react";
import ProjectService from "../../services/project.service";
import {useEffect, useState} from "react";
import ImageMasonry from "./ImageMasonryDisplay";
import {Container, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import theme from "../../theme";
import Masonry from "@mui/lab/Masonry";
import Button from "@mui/material/Button";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const IndexProject = () => {
    const [appState, setAppState] = useState({
        loading: true,
        projects: null
    });
    useEffect( () => {
        setAppState({loading: true});
        ProjectService.getAllProject().then((data) => {
            console.log(data);
            setAppState({loading:false, projects: data.data});
        });
    }, [setAppState])

    if (appState.loading){
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                <CircularProgress />
            </Box>
        )
    }else {
        return (
            <Container sx={{mt: 3}}>
               <Typography
                   variant="h3"
                   color={theme.palette.primary.main}
                   sx={{textAlign:{xs: 'center', md: 'left'}}}
               >
                   Mes Réalisations
               </Typography>
               <Box sx={{my:3, display:"flex", flexDirection:"column", alignItems:"center"}}>
                   <Masonry columns={3} spacing={1}>
                       {appState.projects.map((item, index) => (
                           <ImageMasonry project={item} key={index}/>
                           ))}
                   </Masonry>
                   <Button variant="contained" endIcon={<ArrowForwardIosOutlinedIcon />}>
                       Voir toutes mes réalisations
                   </Button>
               </Box>

            </Container>
        );
    }

}

export default IndexProject;