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
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
  },
  actions: {
    marginTop: theme.spacing(2),
  },
}));

const EmptyState = ({ title = "Nada por aqui", description, actionLabel, onAction }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6">{title}</Typography>
      {description && (
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      )}
      {onAction && (
        <div className={classes.actions}>
          <Button color="primary" variant="contained" onClick={onAction}>
            {actionLabel || "Adicionar"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default EmptyState;

