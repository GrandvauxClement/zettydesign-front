import React, {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import {Box, Paper, Typography} from "@mui/material";
import ProjectService from "../../../services/project.service";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import ButtonAction from "../utils/ButtonAction";
import theme from "../../../theme";
import AddProject from "./AddProject";

export default function IndexProjectBack() {

    const [appState, setAppState] = useState({
        loading: true,
        projects: null
    });

    const [projectParse, setProjectParse] = useState([]);

    const [pageToDisplay, setPageTodisplay] = useState({
        name: "index",
        valueSelected: null
    });

    const renderButtonAction = (params) => {
        return (
            <ButtonAction params={params} setPageToDisplay={setPageTodisplay}/>
        )
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'title',
            headerName: 'Titre',
            width: 150,
            editable: true,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 150,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 300,
            editable: true,
        },
        {
            field: 'createdAt',
            headerName: 'Créer le',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Actions',
            renderCell: renderButtonAction,
            width: 300
        }
    ];


    useEffect( () => {
        setAppState({loading: true});
        ProjectService.getAllProject().then((data) => {
            console.log(data);
            setProjectParse(formateProjectForDisplay(data.data));
            setAppState({loading:false, projects: data.data});
        });
    }, [setAppState, pageToDisplay])

    const formateProjectForDisplay = (projects) => {
        let projectParseToReturn = [];
        projects.map((project, index)=> {
            const date = new Date(project.createdAt);
            console.log(date.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }))
            projectParseToReturn.push({
                id: index+1,
                _id: project._id,
                title: project.title,
                type: project.type,
                description: project.description[0].children[0].text.substring(0,20) + '...',
                createdAt: date.toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
            })
        })
        return projectParseToReturn
    }

    const displayNewProjectPage = () => {
        setPageTodisplay({name: "add", valueSelected: null});
    }

    const displayIndexProjectPage = () => {
        setPageTodisplay({name: "index", valueSelected: null});
    }

    if (appState.loading){
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                <CircularProgress />
            </Box>
        )
    }else if (pageToDisplay.name === "index") {
        return (
            <Paper elevation={3} sx={{position: "relative", mt: "5px"}}>
                <Box sx={{height: 'auto'}}>
                    <Paper elevation={10} sx={{
                        backgroundColor: theme.palette.primary.main,
                        mx: 4,
                        mt: "-20px",
                        p:2,
                    }}>
                        <Typography variant="h1" color="white">Mes Projets</Typography>
                        <Typography paragraph color="white">Tableau de gestion de mes projets (ajouts, édition, suppression)</Typography>
                        <Button
                            variant="contained"
                            sx={{backgroundColor: "#9c27b0"}}
                            onClick={displayNewProjectPage}
                        >
                            Ajouter un projet
                        </Button>
                    </Paper>

                    <Box sx={{height: '70vh', width: '100%', mt: 2}}>
                        <DataGrid
                            rows={projectParse}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                        />
                    </Box>
                </Box>
            </Paper>
        );
    } else if (pageToDisplay.name === "add"){
        return (
            <AddProject setPageToDisplay={displayIndexProjectPage}/>
        )
    }
}