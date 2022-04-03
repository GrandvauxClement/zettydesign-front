import * as React from 'react';
import Stack from '@mui/material/Stack';
import Api from "../../api";
import styled from "@mui/material/styles/styled";
import {useState} from "react";
import ModalProject from "./modalProject";
import Drawer from "@mui/material/Drawer";
import DrawerProject from "./DrawerProject";

const PREFIX = 'Project';

const classes = {
    root: `${PREFIX}-root`,
    image: `${PREFIX}-image`
};

const Root = styled('div')(({theme}) => ({
    [`&.${classes.root}`]: {
        maxWidth: "400px"
    },
    [`& .${classes.image}`]: {
        transition: "all 0.7s ease",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        '&:hover':{
            cursor: "pointer",
            transform:"scale(1.15)",
        }
    }
}))

export default function ImageMasonry({project, index, otherProjects}) {
    const urlImage = Api.baseUrl + 'public/images/projets/';
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({ right: false });
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };


    return (
        <Root className={classes.root}>
             <Stack onClick={toggleDrawer("right", true)}>
                  <img
                      src={`${urlImage}${project.images[0]}`}
                      srcSet={`${urlImage}${project.images[0]}`}
                      alt={project.title}
                      loading="lazy"
                      className={classes.image}
                  />

             </Stack>
            <ModalProject open={open} onClose={handleClose} project={project}/>
            <Drawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
            >
                <DrawerProject
                    anchor="right"
                    project={project}
                    toggleDrawer={toggleDrawer}
                    index={index}
                    otherProjects={otherProjects}
                />
            </Drawer>
        </Root>
    );
}
