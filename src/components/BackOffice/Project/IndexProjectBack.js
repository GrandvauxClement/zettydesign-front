import React, {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import {Box, Typography} from "@mui/material";
import ProjectService from "../../../services/project.service";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import ButtonAction from "../utils/ButtonAction";

const renderButtonAction = (params) => {
    return (
        <ButtonAction params={params}/>
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

export default function IndexProjectBack() {
    const [appState, setAppState] = useState({
        loading: true,
        projects: null
    });
    const [projectParse, setProjectParse] = useState([]);

    useEffect( () => {
        setAppState({loading: true});
        ProjectService.getAllProject().then((data) => {
            console.log(data);
            setProjectParse(formateProjectForDisplay(data.data));
            setAppState({loading:false, projects: data.data});
        });
    }, [setAppState])

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
                description: project.description.substring(0,20) + '...',
                createdAt: date.toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
            })
        })
        return projectParseToReturn
    }

    if (appState.loading){
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                <CircularProgress />
            </Box>
        )
    }else {
        return (
            <Box sx={{height: '100vh'}}>
                <Typography variant="h1">Mes Projets</Typography>
                <Box sx={{height: '70vh', width: '100%', mt: 2}}>
                    <DataGrid
                        rows={projectParse}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </Box>
            </Box>

        );
    }
}