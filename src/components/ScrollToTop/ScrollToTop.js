import { Fab } from "@mui/material";
import { styled } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Zoom from "@mui/material/Zoom";
import { KeyboardArrowUp } from "@mui/icons-material";
import React from "react";
import Box from "@mui/material/Box";
const PREFIX = 'FABScrollToTop';

const classes = {
    root: `${PREFIX}-root`
};

const StyledZoom = styled(Zoom)((
    {
        theme
    }
) => ({
    [`& .${classes.root}`]: {
        position: "fixed",
        bottom: "64px",
        right: theme.spacing(4),
    }
}));

/**
 * Floating action button that scroll top when clicked
 * @returns
 */
export default function ScrollToTop(){
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <StyledZoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 24,
                }}
            >
                <Fab
                    color="primary"
                    size="small"
                    aria-label="Revenir en haut de la page"
                    sx={{
                        height: 42,
                        width: 42,
                    }}
                >
                    <KeyboardArrowUp />
                </Fab>
            </Box>
        </StyledZoom>
    );
}