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
        <Card sx={{ height: {xs: 350,md: 400}, backgroundColor: theme.palette.primary.main, borderRadius: 8 }}>
            <CardMedia
                component="img"
                height="45%"
                image={service.image}
                alt={`vecteur-${service.title}`}
                sx={{objectFit: 'contain', backgroundColor: "white"}}
            />
            <CardContent sx={{py: 1, height: "50%", pt: 3}}>
                <Grid container sx={{display: "flex", justifyContent: "space-around", height: "70%"}}>
                    <Grid item xs>
                        <Typography gutterBottom variant="h3" color="white" textAlign="center" sx={{fontSize: {xs: "1em", md: "1.6em"}}}>
                            {service.title}
                        </Typography>
                        <Typography paragraph textAlign="center" color="white" sx={{fontSize: {xs: "0.8rem", md: "1rem"}}}>
                            {service.subTitle}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs sx={{pt: 4, display: "flex", justifyContent: "center"}}>
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