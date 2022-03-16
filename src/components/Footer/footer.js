import * as React from 'react';
import {
    Box,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import styled from "@mui/material/styles/styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import theme from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../../assets/images/logoBlancFondBleu.png";
import Container from "react-bootstrap/Container";

const PREFIX = 'Footer';

const classes = {
    root: `${PREFIX}-root`,
    footerItem: `${PREFIX}-footerItem`,
    buttonIcone: `${PREFIX}-buttonicone`,
    icone: `${PREFIX}-icone`,
    copyright: `${PREFIX}-copyright`
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    [`&.${classes.root}`]: {
        width: "100%",
        backgroundColor: theme.palette.primary.dark,
        color: "white",
        marginTop: theme.spacing(2),
      //  paddingBottom: theme.spacing(6),
    },

    [`& .${classes.footerItem}`]: {
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(4),
        },
    },

    [`& .${classes.buttonIcone}`]: {
        height: '90px',
        width: '90px',
    },

    [`& .${classes.icone}`]: {
        width: '100%',
        height: '100%'
    },

    [`& .${classes.copyright}`]: {
        [theme.breakpoints.up("md")]: {
            marginTop: theme.spacing(6),
        },
        fontSize: 16,
        textAlign: "center",
    }
}));

const Footer = (props) => {
    return(
        <Root className={classes.root}>
            <Box sx={{backgroundColor: theme.palette.primary.main, paddingBottom:'10px'}}>
                <Container>
                    <Grid container spacing={3} >
                        <Grid item lg={4} xs={12} >
                            <Typography variant="h4" sx={{textAlign:{xs: "center", lg: "left"}}}>Curieux d'en savoir plus sur un sujet ?</Typography>
                            <Typography variant="h4" sx={{mt: 1, textAlign:{xs: "center", lg: "left"}}}>Contactez moi au plus vite</Typography>
                            <Grid container sx={{justifyContent:{xs: "center", lg: "left"}, alignItems: "center", mt: 4}}>
                                <EmailIcon sx={{fontSize: 40, color: "white"}}/>
                                <Typography variant='h6' sx={{ml: 2}}>
                                    yoyo--mail@gmail.com
                                </Typography>
                            </Grid>
                            <Grid container sx={{justifyContent:{xs: "center", lg: "left"}, alignItems: "center", mt: 1}}>
                                <PhoneIcon sx={{fontSize: 40, color: "white"}}/>
                                <Typography sx={{ml: 2}} variant='h6' color='white'>
                                    0661633748
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} lg={4} justifyContent="center" alignItems="center">
                            <img src={logo} alt="zetty design" style={{height: "200px"}}/>
                        </Grid>
                        <Grid item container lg={4} xs={12} direction='row' justifyContent="center" alignItems="center">
                            <Typography variant="h5">Suivez-moi sur les réseaux</Typography>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <IconButton
                                        color={"inherit"}
                                        onClick={() =>
                                            window.open(
                                                `https://www.facebook.com/weguideyousport`
                                            )
                                        }
                                        className={classes.buttonIcone}>
                                        <FacebookIcon className={classes.icone} />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton
                                        color={"inherit"}
                                        onClick={() =>
                                            window.open(
                                                `https://www.facebook.com/weguideyousport`
                                            )
                                        }
                                        className={classes.buttonIcone}>
                                        <InstagramIcon className={classes.icone}/>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton
                                        color={"inherit"}
                                        onClick={() =>
                                            window.open(
                                                `https://www.facebook.com/weguideyousport`
                                            )
                                        }
                                        className={classes.buttonIcone}>
                                        <LinkedInIcon className={classes.icone}/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
            <Grid item container xs={12} sx={{justifyContent: 'center'}}>
                <Typography paragraph>
                    <a href="#contact" style={{color: "white"}}>Mentions légales</a>
                    | © Copyright 2022 - Zetty design. Tous droits réservés
                </Typography>
            </Grid>
        </Root>
    );
}

export default Footer;