import * as React from "react";
import ProjectService from "../../services/project.service";
import {useEffect, useState} from "react";
import ImageMasonry from "./ImageMasonryDisplay";
import {Container} from "@mui/material";

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
            <h2 className='text-center text-primary'>En chargement</h2>
        )
    }else {
        return (
            <Container>
               <ImageMasonry projects={appState.projects}/>
            </Container>
        );
    }

}

export default IndexProject;