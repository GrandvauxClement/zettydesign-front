import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Masonry from '@mui/lab/Masonry';
import Api from "../../api";
import styled from "@mui/material/styles/styled";

const PREFIX = 'Project';

const classes = {
    root: `${PREFIX}-root`,
    image: `${PREFIX}-image`
};

const Root = styled('div')(({theme}) => ({
    [`&.${classes.root}`]: {
        width: "100%",
    },
    [`& .${classes.image}`]: {
        transition: "all 1s ease",
        background: "#f1f1f1",
        '&:hover':{
            cursor: "pointer",
            background: "#f00",
            transform:"scale(1.25)",
        }
    }
}))

export default function ImageMasonry({projects}) {
    const urlImage = Api.baseUrl + 'public/images/projets/';
    return (
        <Root className={classes.root}>
            <Masonry columns={3} spacing={1}>
                {projects.map((item, index) => (
                    <Stack key={index}>
                        <img
                            src={`${urlImage}${item.principalImage}`}
                            srcSet={`${urlImage}${item.principalImage}`}
                            alt={item.title}
                            loading="lazy"
                            className={classes.image}
                          //  style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}
                        />
                    </Stack>
                ))}
            </Masonry>
        </Root>
    );
}
