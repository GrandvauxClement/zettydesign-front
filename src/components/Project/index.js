import * as React from "react";
import ProjectService from "../../services/project.service";
import {useEffect, useState} from "react";
import ImageMasonry from "./ImageMasonryDisplay";
import {Container, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Button from "@mui/material/Button";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {Link} from "react-router-dom";

const IndexProject = () => {
    const [appState, setAppState] = useState({
        loading: true,
        projects: null
    });
    useEffect( () => {
        setAppState({loading: true});
        ProjectService.getAllProject().then((data) => {
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
            <Container sx={{mt: 5}}>
               <Typography variant="h2" color="primary"
                    sx={{ textAlign:{xs: 'center', md: 'left'}, fontSize:{xs: '2.3em', md: '3.3em'}}}
               >
                   Mes Réalisations
               </Typography>
               <Box sx={{my:3, display:"flex", flexDirection:"column", alignItems:"center"}}>
                   <Masonry columns={{xs:2, md:3}} spacing={1}>
                       {appState.projects.map((item, index) => (
                           index<6 &&
                            <ImageMasonry project={item} index={index} key={index} otherProjects={appState.projects}/>
                           ))}
                   </Masonry>
                   <Link to="/mes-realisations">
                       <Button variant="contained" endIcon={<ArrowForwardIosOutlinedIcon />}>
                           Voir toutes mes réalisations
                       </Button>
                   </Link>
               </Box>

            </Container>
        );
    }

}

export default IndexProject;