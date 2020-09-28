import PropTypes from "prop-types";
import React from "react";
import clsx from "clsx";
import { navigate } from "react-big-calendar/lib/utils/constants";
import { IconButton, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
class Toolbar extends React.Component {
  render() {
    let {
      localizer: { messages },
      label,
    } = this.props;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <IconButton onClick={this.navigate.bind(null, navigate.PREVIOUS)}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="subtitle1">{label}</Typography>

        <IconButton onClick={this.navigate.bind(null, navigate.NEXT)}>
          <ArrowForwardIosIcon />
        </IconButton>

        {/* <button
          type="button"
          onClick={this.navigate.bind(null, navigate.PREVIOUS)}
        >
          {messages.previous}
        </button>
        <span className="rbc-toolbar-label">{label}</span>
        <button type="button" onClick={this.navigate.bind(null, navigate.NEXT)}>
          {messages.next}
        </button> */}
      </div>
    );
  }

  navigate = (action) => {
    this.props.onNavigate(action);
  };

  view = (view) => {
    this.props.onView(view);
  };

  viewNamesGroup(messages) {
    let viewNames = this.props.views;
    const view = this.props.view;

    if (viewNames.length > 1) {
      return viewNames.map((name) => (
        <button
          type="button"
          key={name}
          className={clsx({ "rbc-active": view === name })}
          onClick={this.view.bind(null, name)}
        >
          {messages[name]}
        </button>
      ));
    }
  }
}

Toolbar.propTypes = {
  view: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node.isRequired,
  localizer: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
};

export default Toolbar;
