import React from "react";
import {Box, Zoom} from "@mui/material";

export default function ScrollToTop(props){
    const {children} = props;

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
           /* anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });*/
            anchor.scrollIntoView(true);
        }
    };

    return (
        <Zoom in>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}