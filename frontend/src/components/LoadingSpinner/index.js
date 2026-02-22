import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: 240,
    padding: theme.spacing(2),
  },
  text: {
    marginTop: theme.spacing(2),
    color: theme.palette.textSecondary || theme.palette.text.secondary,
  },
}));

const LoadingSpinner = ({ label = "Carregando..." }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} role="status" aria-live="polite">
      <CircularProgress color="primary" />
      <Typography className={classes.text} variant="body2">
        {label}
      </Typography>
    </div>
  );
};

export default LoadingSpinner;

