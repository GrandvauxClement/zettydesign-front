import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {styled} from "@mui/material";
import Typography from "@mui/material/Typography";

const MesPartenaires = ({images}) => {
    const MyStyledImage = styled("img")({
        maxWidth: "100%",
        maxHeight: '200px'
    })
    return (
        <Container sx={{mb: 2}}>
            <Typography variant="h3" color="primary">Ils m'ont fait confiance</Typography>
            <Grid container direction="row" alignItems="center" spacing={2}>
                {images.map((image, index) => (
                    <Grid container item md={3} xs={12} justifyContent="center" key={index}>
                        <Box>
                            <a href={image.href}>
                                <MyStyledImage src={image.src} alt={image.alt}/>
                            </a>
                        </Box>
                    </Grid>
                ))}

            </Grid>
        </Container>
    )
}

export default MesPartenaires