import Button from "@mui/material/Button";
import React from "react";
import Box from "@mui/material/Box";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const RenderDetailsButton = ({params, setPageToDisplay}) => {
    return (
        <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => {
                console.log(params)
            }}
        >
            Détail
        </Button>
    )
}

const RenderUpdateButton = ({params, setPageToDisplay}) => {
    return (
        <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
                setPageToDisplay({
                    name: "edit",
                    valueSelected: params.row
                })
            }}
        >
            Modifier
        </Button>
    )
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const RenderDeleteButton = ({params, fctDelete, setPageToDisplay}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteProject = () => {
        fctDelete(params.row._id);
        setOpen(false);
        setPageToDisplay({
            name: "index",
            valueSelected: null
        })
    }
    return (
        <div>
            <Button
                variant="contained"
                size="small"
                color="error"
                onClick={handleClickOpen}
            >
                Supprimer
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Attention Yoh!!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        T'es sur de vouloir supprimer le projet {params.row.title}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained">Annuler</Button>
                    <Button onClick={deleteProject} variant="contained" color="error">Supprimer</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const ButtonAction = ({params, setPageToDisplay, fctDelete}) => {
    return (
        <Box sx={{display: "flex"}}>
            <RenderDetailsButton params={params} setPageToDisplay={setPageToDisplay}/>
            <RenderUpdateButton params={params} setPageToDisplay={setPageToDisplay}/>
            <RenderDeleteButton
                params={params}
                setPageToDisplay={setPageToDisplay}
                fctDelete={(id)=> fctDelete(id)}/>
        </Box>
    )

}

export default ButtonAction