import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import { IconButton, Divider, Badge } from "@material-ui/core";
import { Cake } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const clusters = [
  { title: "Dist 1" },
  { title: "Dist 2" },
  { title: "Dist 3" },
];
const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  title: {
    display: "flex",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    justifyContent: "space-between",
  },
  userSection: {
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
  },
  clusterSection: {
    padding: theme.spacing(6),
  },
  AddLocation: {
    width: "100%",
    margin: theme.spacing(3),
  },
}));

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const [step, setStep] = useState(0);

  return (
    <Dialog
      onClose={props.handelClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="lg"
      fullWidth={true}
    >
      <div className={classes.title}>
        <DialogTitle id="simple-dialog-title">
          {step === 0 ? "Select Team" : "Select District"}
        </DialogTitle>
        <IconButton onClick={props.handelClose}>
          <Cake />
        </IconButton>
      </div>
      {step === 0 ? (
        <div>
          {" "}
          <Divider />
          <div className={classes.userSection}>
            <div>
              {" "}
              <Badge badgeContent={<Cake />}>
                <Avatar alt="suraj saini" src="./suraj-saini" />
              </Badge>
            </div>
            <Button onClick={() => setStep(1)}>Add</Button>
          </div>
          <Divider />
          <List>
            {emails.map((email) => (
              <ListItem button onClick={() => console.log(email)} key={email}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItem>
            ))}
            <ListItem
              autoFocus
              button
              onClick={() => console.log("addAccount")}
            >
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Add account" />
            </ListItem>
          </List>
        </div>
      ) : (
        <div className={classes.clusterSection}>
          <Autocomplete
            id="combo-box-demo"
            fullWidth={true}
            options={clusters}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField {...params} label="Cluster" variant="outlined" />
            )}
          />
          <Button className={classes.AddLocation}>Add Location</Button>
        </div>
      )}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default SimpleDialog;
