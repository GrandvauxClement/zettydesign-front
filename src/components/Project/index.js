import * as React from "react";
import ProjectService from "../../services/project.service";
import {useEffect, useState} from "react";

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
            <div>
                <h1>Mes projects</h1>
                <ul>
                    {appState.projects.map((project) => (
                        <li>{project.title}</li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default IndexProject;