import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  AvatarGroup: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  location: {
    color: "#000",
  },
}));

const CustomEvent = (event) => {
  // console.log(event);
  const classes = useStyles();
  return (
    <>
      <div>
        <Typography variant="subtitle2" className={classes.location}>
          Banaras
        </Typography>
      </div>
      <AvatarGroup max={4} classes={{ root: classes.AvatarGroup }}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className={classes.small}
        />
        <Avatar
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
          className={classes.small}
        />
        <Avatar
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
          className={classes.small}
        />
        <Avatar
          alt="Agnes Walker"
          src="/static/images/avatar/4.jpg"
          className={classes.small}
        />
        <Avatar
          alt="Trevor Henderson"
          src="/static/images/avatar/5.jpg"
          className={classes.small}
        />
      </AvatarGroup>
    </>
  );
};
export default CustomEvent;
