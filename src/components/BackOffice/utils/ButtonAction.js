import Button from "@mui/material/Button";
import React from "react";
import Box from "@mui/material/Box";

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

const RenderDeleteButton = ({params, setPageToDisplay}) => {
    return (
            <Button
                variant="contained"
                size="small"
                color="error"
                onClick={() => {
                    console.log(params)
                }}
            >
                Supprimer
            </Button>
    )
}

const ButtonAction = ({params, setPageToDisplay}) => {
    return(
        <Box sx={{display: "flex"}}>
            <RenderDetailsButton params={params} setPageToDisplay={setPageToDisplay}/>
            <RenderUpdateButton params={params} setPageToDisplay={setPageToDisplay}/>
            <RenderDeleteButton params={params} setPageToDisplay={setPageToDisplay}/>
        </Box>
        )

}

export default ButtonAction