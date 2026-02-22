import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: 240,
    padding: theme.spacing(2),
    textAlign: "center",
  },
  actions: {
    marginTop: theme.spacing(2),
  },
}));

const ErrorState = ({ title = "Algo deu errado", description, onRetry }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} role="alert">
      <Typography variant="h6" color="error">
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      )}
      {onRetry && (
        <div className={classes.actions}>
          <Button color="primary" variant="contained" onClick={onRetry}>
            Tentar novamente
          </Button>
        </div>
      )}
    </div>
  );
};

export default ErrorState;

