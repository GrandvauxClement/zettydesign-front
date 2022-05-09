import React from "react";
import {
    Grid,
    Typography,
} from "@mui/material";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Api from "../../api";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import theme from "../../theme";



const ServiceList = ({service, index}) => {
    const urlImage = Api.baseUrl + 'public/images/services/'+service.image;
    return (
        <Card sx={{ height: 480, backgroundColor: theme.palette.primary.main }}>
            <CardMedia
                component="img"
                height="300"
                image={urlImage}
                alt={`vecteur-${service.title}`}
                sx={{objectFit: 'contain', backgroundColor: "white"}}
            />
            <CardContent sx={{py: 1, height: 160}}>
                <Grid container sx={{display: "flex", justifyContent: "space-around", height: "100%"}}>
                    <Grid item xs>
                        <Typography gutterBottom variant="h3" color="white">
                            {service.title}
                        </Typography>
                        <Typography paragraph>
                            {service.subTitle}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs sx={{py: 0, display: "flex", justifyContent: "center"}}>
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

   /* if (index%2 === 0){
        return (
            <Grid container item xs={12} direction="row">
                <Grid item md={6} xs={12} sx={{display: 'flex'}} justifyContent="center">
                    <img src={urlImage} alt={service.title} style={{height: '300px', width:'300px'}}/>
                </Grid>
                <Grid item md={6} xs={12}
                      sx={{
                          display: 'flex',
                          flexDirection:'column',
                          alignItems:{xs:'center', md:'flex-start'},
                          justifyContent: 'center'
                      }}
                >

                    <Link to={service.url} className='linkBlue'>
                        <Typography  underline="hover" variant="h3" sx={{mb: 2, textAlign:{xs:'center', md:'left'}}}> {service.title} </Typography>
                    </Link>

                    <Typography variant="h5" sx={{fontStyle: 'italic', color: '#ea8d2a'}}> {service.subTitle}</Typography>
{/!*
                    <Typography paragraph sx={{textAlign: 'justify'}}> {service.description}</Typography>
*!/}
                    <Link to={service.url}>
                        <Button variant="contained" endIcon={<AddCircleIcon />}>
                            En Savoir
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        )
    }else{
        return (
            <Grid container item xs={12} direction="row">

                <Grid item md={6} xs={12} order={{ xs:2, md:1}} sx={{display: 'flex', flexDirection:'column', alignItems:{xs:'center', md:'flex-end'}}}>
                    <Link to={service.url} className='linkBlue'>
                        <Typography  underline="hover" variant="h3" sx={{mt: 3, textAlign:{xs:'center', md:'left'}}}> {service.title} </Typography>
                    </Link>
                    <Typography variant="h5" sx={{fontStyle: 'italic', color: '#ea8d2a'}}> {service.subTitle}</Typography>
                    <Typography paragraph sx={{textAlign: 'justify'}}> {service.description}</Typography>
                    <Link to={service.url}>
                        <Button variant="contained" endIcon={<AddCircleIcon />}>
                            En Savoir
                        </Button>
                    </Link>
                </Grid>
                <Grid item md={6} xs={12} sx={{display: 'flex'}} justifyContent="center" order={{ xs:1, md:2}}>
                    <img src={urlImage} alt={service.title} style={{height: '400px', width:'400px'}}/>
                </Grid>
            </Grid>
        )
    }*/

}

export default ServiceList;