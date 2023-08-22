import React from "react";
import {
    Grid,
    Typography,
} from "@mui/material";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import theme from "../../theme";

const ServiceList = ({service}) => {

    return (
        <Card sx={{ height: 500, backgroundColor: theme.palette.primary.main }}>
            <CardMedia
                component="img"
                height="300"
                image={service.image}
                alt={`vecteur-${service.title}`}
                sx={{objectFit: 'contain', backgroundColor: "white"}}
            />
            <CardContent sx={{py: 1, height: 160, pt: 3}}>
                <Grid container sx={{display: "flex", justifyContent: "space-around", height: "100%"}}>
                    <Grid item xs>
                        <Typography gutterBottom variant="h3" color="white" textAlign="center" >
                            {service.title}
                        </Typography>
                        <Typography paragraph textAlign="center" color="white">
                            {service.subTitle}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs sx={{py: 2, display: "flex", justifyContent: "center"}}>
                    <Link to={service.url}>
                        <Button variant="contained"
                                endIcon={<AddCircleIcon />}
                                sx={{
                                    color: theme.palette.primary.main,
                                    backgroundColor: "white",
                                    "&:hover":{
                                        backgroundColor: "#d4d2d2"
                                    }
                                }}
                        >
                            En Savoir
                        </Button>
                    </Link>
                </Grid>
            </CardContent>

        </Card>
    )
}

export default ServiceList;