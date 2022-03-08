import React, {useState} from "react";
import BodyContainer from "../utils/container/BodyContainer";
import Button from "@mui/material/Button";
import IndexProjectBack from "./IndexProjectBack";
import AddProject from "./AddProject";

const ProjectContainer = () => {
    const [pageToDisplay, setPageTodisplay] = useState({
        name: "index",
        valueSelected: null
    });

    const [appState, setAppState] = useState({
        loading: true,
        projects: null
    });

    const displayNewProjectPage = () => {
        setPageTodisplay({name: "add", valueSelected: null});
    }

    const displayIndexProjectPage = () => {
        setPageTodisplay({name: "index", valueSelected: null});
    }

    if (pageToDisplay.name === "index"){
        return(
            <BodyContainer
                title="Mes Projets"
                subtitle="Tableau de gestion de mes projets (ajouts, édition, suppression)"
                buttonAction={
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={displayNewProjectPage}
                    >
                        Ajouter un projet
                    </Button>
                }
                children={
                    <IndexProjectBack
                        pageToDisplay={pageToDisplay}
                        setPageToDisplay={setPageTodisplay}
                        appState={appState}
                        setAppState={setAppState}
                    />
                }
            />
        )
    } else if (pageToDisplay.name === "add"){
        return (
            <BodyContainer
                title="Ajouter un nouveau Projets"
                subtitle="Remplissez les champs suivants"
                buttonAction={
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={displayIndexProjectPage}
                    >
                        Retour au Tableau des projets
                    </Button>
                }
                children={<AddProject setPageToDisplay={setPageTodisplay} />}
            />
        )
    } else if (pageToDisplay.name === 'edit'){
        return (
            <h1>Edit page</h1>
        )
    }
}

export default ProjectContainer