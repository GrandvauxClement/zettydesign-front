import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Masonry from '@mui/lab/Masonry';
import Api from "../../api";
import styled from "@mui/material/styles/styled";
import {useState} from "react";
import ModalProject from "./modalProject";

const PREFIX = 'Project';

const classes = {
    root: `${PREFIX}-root`,
    image: `${PREFIX}-image`
};

const Root = styled('div')(({theme}) => ({
    [`&.${classes.root}`]: {
    },
    [`& .${classes.image}`]: {
        transition: "all 1s ease",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        '&:hover':{
            cursor: "pointer",
            transform:"scale(1.25)",
        }
    }
}))

export default function ImageMasonry({project}) {
    const urlImage = Api.baseUrl + 'public/images/projets/';
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Root className={classes.root}>
             <Stack onClick={handleOpen}>
                  <img
                      src={`${urlImage}${project.principalImage}`}
                      srcSet={`${urlImage}${project.principalImage}`}
                      alt={project.title}
                      loading="lazy"
                      className={classes.image}
                  />

             </Stack>
            <ModalProject open={open} onClose={handleClose} project={project}/>
        </Root>
    );
}
