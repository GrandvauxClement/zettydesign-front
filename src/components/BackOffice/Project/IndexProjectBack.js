import React, {useEffect, useState} from "react";
import {DataGrid, GridToolbarContainer} from '@mui/x-data-grid';
import {Box, Button} from "@mui/material";
import ProjectService from "../../../services/project.service";
import CircularProgress from "@mui/material/CircularProgress";
import ButtonAction from "../utils/ButtonAction";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import DeleteIcon from '@mui/icons-material/Delete';


export default function IndexProjectBack({pageToDisplay, setPageToDisplay, appState, setAppState}) {
    const [selectMultiple, setSelectMultiple] = useState([]);

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    function CustomToolbar() {
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        const deleteProjectSelected = () => {
            projectParse.forEach((project)=> {
                for (let i=0; i<selectMultiple.length; i++){
                    if (project.id === selectMultiple[i]){
                       deleteProject(project._id);
                    }
                }
            })
            setOpen(false);
            setPageToDisplay({
                name: 'index',
                valueSelected: null
            })
            setSelectMultiple([]);
        }
        return (
            <GridToolbarContainer>
                {selectMultiple.length > 0 &&
                    <Button
                        color="error"
                        variant="contained"
                        size="small"
                        onClick={handleClickOpen}
                        startIcon={<DeleteIcon />}
                        sx={{borderRadius: 0, ml: 2}}
                    >
                        Supprimer {selectMultiple.length}
                    </Button>
                }
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Attention Yoh!! "}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            T'es sur de vouloir supprimer les {selectMultiple.length} projet ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant="contained">Annuler</Button>
                        <Button onClick={deleteProjectSelected} variant="contained" color="error">Supprimer</Button>
                    </DialogActions>
                </Dialog>
            </GridToolbarContainer>
            )
    }
    const [projectParse, setProjectParse] = useState([]);

    //TODO delete image when delete Project
    const deleteProject = (id) => {

        ProjectService.deleteProject(id)
            .then((res)=>{
                //TODO popup done
            })
    }

    const renderButtonAction = (params) => {
        return (
            <ButtonAction
                params={params}
                setPageToDisplay={setPageToDisplay}
                fctDelete={(id) => deleteProject(id)}
                detail={false}
            />
        )
    }

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'title',
            headerName: 'Titre',
            width: 300,
            editable: false,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 150,
            editable: false,
        },
        {
            field: 'createdAt',
            headerName: 'Créer le',
            sortable: true,
            type: 'date',
            valueFormatter: (params) => {
                return formatDate(params.value)
            },
            valueGetter: (params) => {
                return formatDate(params.value)
            },
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Actions',
            renderCell: renderButtonAction,
            width: 300
        }
    ];
    const formatDate = (value) => {
        const date = new Date(value);
        let valueToReturn ;
        if (date.toString() === "Invalid Date"){
            valueToReturn = value;
            console.log('value', value);
        }else {
            valueToReturn = date.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        }
        return valueToReturn;
    }

    useEffect(() => {
        setAppState({loading: true});
        ProjectService.getAllProject().then((data) => {
            setProjectParse(formateProjectForDisplay(data.data));
            setAppState({loading: false, projects: data.data});
        });
    }, [setAppState, pageToDisplay])

    const formateProjectForDisplay = (projects) => {
        let projectParseToReturn = [];
        projects.forEach((project, index) => {
            projectParseToReturn.push({
                id: index + 1,
                _id: project._id,
                title: project.title,
                type: project.type,
                description: project.description,
                createdAt: project.createdAt,
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
    } else {
        return (
            <Box sx={{height: '70vh', width: '100%', mt: 2}}>
                <DataGrid
                    rows={projectParse}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    onSelectionModelChange={e => setSelectMultiple(e)}
                    components={{
                        Toolbar: CustomToolbar
                    }}
                />
            </Box>
        );
    }
}