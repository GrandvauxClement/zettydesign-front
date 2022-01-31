import * as React from 'react';
import {
    Container,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import Link from '@mui/material/Link';
import logo from "../../logo.svg";
import styled from "@mui/material/styles/styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
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
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
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

const Footer = () => {
    return(
        <Root className={classes.root}>
            <Container>
                <Grid item xs={12}>
                    <img src={logo} className="App-logo" alt="logo" />
                </Grid>
                <Grid item xs={12}>
                    <Typography align='center'>
                        <Link href="#" color="inherit" underline="hover">Création graphique | </Link>
                        <Link href="#" color="inherit" underline="hover">Création de site | </Link>
                        <Link href="#" color="inherit" underline="hover">Community management | </Link>
                        <Link href="#" color="inherit" underline="hover">Stratégie de communication</Link>
                    </Typography>
                </Grid>
                <Grid item container xs={12} direction='row' justifyContent="center">
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
                            <TwitterIcon className={classes.icone}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </Root>
    );
}

export default Footer;