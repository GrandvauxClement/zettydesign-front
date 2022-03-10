import React, {useEffect, useState} from "react";
import {DataGrid, GridToolbarContainer} from '@mui/x-data-grid';
import {Box, Button} from "@mui/material";
import MessageService from "../../../services/message.service";
import CircularProgress from "@mui/material/CircularProgress";
import ButtonAction from "../utils/ButtonAction";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import DeleteIcon from '@mui/icons-material/Delete';


export default function IndexMessageBack({pageToDisplay, setPageToDisplay, appState, setAppState}) {
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

        const deleteMessageSelected = () => {
            messageParse.map((message)=> {
                for (let i=0; i<selectMultiple.length; i++){
                    if (message.id === selectMultiple[i]){
                        deleteMessage(message._id);
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
                            T'es sur de vouloir supprimer les {selectMultiple.length} messages sélectionnés ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant="contained">Annuler</Button>
                        <Button onClick={deleteMessageSelected} variant="contained" color="error">Supprimer</Button>
                    </DialogActions>
                </Dialog>
            </GridToolbarContainer>
        )
    }
    const [messageParse, setMessageParse] = useState([]);

    const deleteMessage = (id) => {
        MessageService.deleteMessage(id)
            .then((res)=>{
                //TODO popup done
            })
    }

    const renderButtonAction = (params) => {
        return (
            <ButtonAction
                params={params}
                setPageToDisplay={setPageToDisplay}
                fctDelete={(id) => deleteMessage(id)}
            />
        )
    }

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'name',
            headerName: 'Nom',
            width: 150,
            editable: false,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
            editable: false,
        },
        {
            field: 'message',
            headerName: 'Message',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            width: 400,
        },
        {
            field: 'devis',
            headerName: 'Devis',
            width: 50,
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
        MessageService.getAllMessage().then((data) => {
            setMessageParse(formateMessageForDisplay(data.data));
            setAppState({loading: false, messages: data.data});
        });
    }, [setAppState, pageToDisplay])

    const formateMessageForDisplay = (messages) => {
        console.log(messages);
        let messagesParseToReturn = [];
        messages.map((message, index) => {
            const date = new Date(message.createdAt);

            messagesParseToReturn.push({
                id: index + 1,
                _id: message._id,
                name: message.name,
                email: message.email,
                message: message.message,
                createdAt: date.toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                object: message.project,
                devis: message.devis,
            })
        })
        return messagesParseToReturn
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
                    rows={messageParse}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    // disableSelectionOnClick
                    onSelectionModelChange={e => setSelectMultiple(e)}
                    components={{
                        Toolbar: CustomToolbar
                    }}
                />
            </Box>
        );
    }
}