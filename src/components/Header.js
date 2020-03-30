import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.png";

//CCS STYLES

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: "tomato"
  },
  subTitle: {
    color: "tan",
    marignBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%",
    textAlign: "center",
    zIndex: 1
  }
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="avatar" />
      </Grid>
      <br />
      <br />
      <Typography className={classes.title} variant="h4">
        <Typed string={["Abdullah Ali"]} typeSpeed={80} backSpeed={90} loop />
      </Typography>
      <br />
      <Typography className={classes.subTitle} variant="h4">
        <Typed
          string={["Me", "Myself", "And I"]}
          typeSpeed={70}
          backSpeed={40}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
