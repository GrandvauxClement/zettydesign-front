import * as React from 'react';
import {
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import {Link} from "react-router-dom";
import styled from "@mui/material/styles/styled";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import theme from "../../theme";
import TwitterIcon from "@mui/icons-material/Twitter";

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
        backgroundColor: theme.palette.primary.main,
        color: "white",
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
            <Container>
                <Grid item xs={12}>
                    <Typography align='center'>
                        <Link to="redaction-article-web" style={{color: "white", textDecoration: "none"}}>
                            Rédaction article web | {" "}
                        </Link>
                        <Link
                            to="design-graphique"
                            style={{
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            Design graphique | {" "}
                        </Link>
                        <Link to="création-site-web" style={{color: "white", textDecoration: "none"}}>
                            Création de site | {" "}
                        </Link>
                        <Link to="community-management" style={{color: "white", textDecoration: "none"}}>
                            Community management
                        </Link>

                    </Typography>
                </Grid>
                <Grid item container xs={12} direction='row' justifyContent="center">
                    <Grid item>

                        <IconButton
                            color={"inherit"}
                            onClick={() =>
                                window.open(
                                    `https://twitter.com/Zetty_69`
                                )
                            }
                            className={classes.buttonIcone}>
                            <TwitterIcon className={classes.icone} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            color={"inherit"}
                            onClick={() =>
                                window.open(
                                    `https://www.instagram.com/yohannfzi/`
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
                                    `https://fr.linkedin.com/in/yohann-franzetti-9bb714133`
                                )
                            }
                            className={classes.buttonIcone}>
                            <LinkedInIcon className={classes.icone}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{backgroundColor: theme.palette.primary.dark}}>
                <Grid item container xs={12} sx={{justifyContent: 'center'}}>
                    <Typography paragraph>
                        <Link to="mentions-legales" style={{color: "white", textDecoration: "none"}}>
                            Mentions légales {" "}
                        </Link>
                        | © Copyright 2022 - Zetty Design. Tous droits réservés
                    </Typography>
                </Grid>
            </Box>
        </Root>
    );
}

export default Footer;