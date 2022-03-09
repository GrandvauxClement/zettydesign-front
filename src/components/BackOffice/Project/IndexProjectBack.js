import React, {useEffect, useState} from "react";
import {DataGrid} from '@mui/x-data-grid';
import {Box} from "@mui/material";
import ProjectService from "../../../services/project.service";
import CircularProgress from "@mui/material/CircularProgress";
import ButtonAction from "../utils/ButtonAction";

export default function IndexProjectBack({pageToDisplay, setPageToDisplay, appState, setAppState}) {

    const [projectParse, setProjectParse] = useState([]);

    const deleteProject = (id) => {
        ProjectService.deleteProject(id)
            .then((res)=>{
                setPageToDisplay({
                    name: 'index',
                    valueSelected: null
                })
            })
    }

    const renderButtonAction = (params) => {
        return (
            <ButtonAction
                params={params}
                setPageToDisplay={setPageToDisplay}
                fctDelete={(id) => deleteProject(id)}
            />
        )
    }

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'title',
            headerName: 'Titre',
            width: 300,
            editable: true,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 150,
            editable: true,
        },
        /*{
            field: 'description',
            headerName: 'Description',
            width: 300,
            editable: true,
        },*/
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


    useEffect(() => {
        setAppState({loading: true});
        ProjectService.getAllProject().then((data) => {
            console.log(data);
            setProjectParse(formateProjectForDisplay(data.data));
            setAppState({loading: false, projects: data.data});
        });
    }, [setAppState, pageToDisplay])

    const formateProjectForDisplay = (projects) => {
        let projectParseToReturn = [];
        projects.map((project, index) => {
            const date = new Date(project.createdAt);

            projectParseToReturn.push({
                id: index + 1,
                _id: project._id,
                title: project.title,
                type: project.type,
                description: project.description,
                createdAt: date.toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                tag: project.tag,
                videoLink: project.videoLink,
                images: project.images
            })
        })
        return projectParseToReturn
    }

    if (appState.loading) {
        return (
            <Box sx={{display: 'flex', alignItems: 'center', mt: 3}}>
                <CircularProgress/>
            </Box>
        )
    } else
        //if (pageToDisplay.name === "index")
    {
        return (
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
        );
    }
}