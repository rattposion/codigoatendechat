import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	contactsHeader: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: theme.spacing(1.5),
		borderRadius: theme.shape.borderRadius,
		background: theme.palette.type === "light" ? "#FFFFFF" : theme.palette.background.paper,
		boxShadow: theme.shadows[0],
	},
}));

const MainHeader = ({ children }) => {
	const classes = useStyles();

	return <div className={classes.contactsHeader}>{children}</div>;
};

export default MainHeader;
