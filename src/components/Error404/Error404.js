import React from "react";
import {Container, Grid, Link, Typography} from "@mui/material";
import styled from "@mui/material/styles/styled";
import Button from "@mui/material/Button";

const PREFIX = 'Error404';

const classes = {
    grid: `${PREFIX}-grid`,
    text: `${PREFIX}-text`,
    button: `${PREFIX}-button`
};

const StyledContainer = styled(Container)((
    {
        theme
    }
) => ({
    [`& .${classes.grid}`]: {
        height: `calc(80vh - ${theme.mixins.toolbar.minHeight}px)`,
    },

    [`& .${classes.text}`]: {
        textAlign: "center",
    },

    [`& .${classes.button}`]: {
        marginTop: theme.spacing(4),
    }
}));

const Error404 = () => {
  return (
      <StyledContainer>
          <Grid container className={classes.grid} alignItems="center">
              <Grid item container>
                  <Grid item xs={12}>
                      <Typography
                          variant="h1"
                          color="primary"
                          className={classes.text}
                      >
                          Error404
                      </Typography>
                      <Typography variant="h2" className={classes.text}>
                          Oups ... cette page n'existe pas !
                      </Typography>
                  </Grid>
                  <Grid
                      item
                      xs={12}
                      align="center"
                      className={classes.button}
                  >
                      <Button
                          variant="contained"
                          color="primary"
                          component={Link}
                          to={"/"}
                      >
                          Revenir à l'accueil
                      </Button>
                  </Grid>
              </Grid>
          </Grid>
      </StyledContainer>
  )
}

export default Error404