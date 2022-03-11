import React from "react";
import {Box, Paper, Typography} from "@mui/material";
import theme from "../../../../theme";

const BodyContainer = ({title, subtitle, buttonAction = null, children}) => {
    return (
        <Paper elevation={3} sx={{position: "relative", mt: "5px"}}>
            <Box sx={{height: 'auto'}}>
                <Paper elevation={10} sx={{
                    backgroundColor: theme.palette.primary.main,
                    mx: 4,
                    mt: "-20px",
                    p:2,
                }}>
                    <Typography variant="h1" color="white">{title}</Typography>
                    <Typography paragraph color="white">{subtitle}</Typography>
                    {buttonAction != null &&
                        buttonAction
                    }
                </Paper>

                {children}
            </Box>
        </Paper>
    )
}

export default BodyContainer