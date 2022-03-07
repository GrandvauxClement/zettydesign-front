import Button from "@mui/material/Button";
import React from "react";
import Box from "@mui/material/Box";
import theme from "../../../theme";

const RenderDetailsButton = ({params}) => {
    return (
             <Button
                variant="contained"
                size="small"
                sx={{ backgroundColor:"green" }}
                onClick={() => {
                    console.log(params)
                }}
            >
                Détail
            </Button>
    )
}

const RenderUpdateButton = ({params}) => {
    return (
            <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => {
                    console.log(params)
                }}
            >
                Modifier
            </Button>
    )
}

const RenderDeleteButton = ({params}) => {
    return (
            <Button
                variant="contained"
                size="small"
                sx={{ backgroundColor: "#d40707" }}
                onClick={() => {
                    console.log(params)
                }}
            >
                Supprimer
            </Button>
    )
}

const ButtonAction = ({params}) => {
    return(
        <Box sx={{display: "flex"}}>
            <RenderDetailsButton params={params}/>
            <RenderUpdateButton params={params}/>
            <RenderDeleteButton params={params}/>
        </Box>
        )

}

export default ButtonAction