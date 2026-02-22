import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Title({ children, variant = "h5" }) {
	return (
		<Typography variant={variant} color="primary" gutterBottom>
			{children}
		</Typography>
	);
}
