import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Masonry from '@mui/lab/Masonry';
import Api from "../../api";


export default function ImageMasonry({projects}) {
    const urlImage = Api.baseUrl + 'public/images/projets/';
    return (
        <Box sx={{ width: '100%'}}>
            <Masonry columns={3} spacing={1}>
                {projects.map((item, index) => (
                    <Stack key={index}>
                        <img
                            src={`${urlImage}${item.principalImage}?w=162&auto=format`}
                            srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}
                        />
                    </Stack>
                ))}
            </Masonry>
        </Box>
    );
}
