import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid"; 
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { versionSystem } from "../../../package.json";
import { i18n } from "../../translate/i18n";
import { nomeEmpresa } from "../../../package.json";
import { AuthContext } from "../../context/Auth/AuthContext";
import logo from "../../assets/logo.png";


const Copyright = () => {
		return (
		<Typography variant="body2" color="inherit" align="center">
			{"Copyright "}
 			<Link color="inherit" href="#">
 				{ nomeEmpresa } - v { versionSystem }
 			</Link>{" "}
 			{new Date().getFullYear()}
 			{"."}
 		</Typography>
 	);
 };

const useStyles = makeStyles(theme => ({
	root: {
		width: "100vw",
		height: "100vh",
		backgroundImage:
			theme.palette.type === "light"
				? "radial-gradient(circle at 0% 0%, #7C4DFF 0, #682EE3 40%, #1C1C1C 100%)"
				: "radial-gradient(circle at 0% 0%, #1C1C1C 0, #000000 60%, #682EE3 100%)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		padding: theme.spacing(2),
	},
	paper: {
		backgroundColor: theme.palette.login,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: theme.spacing(4),
		borderRadius: theme.shape.borderRadius * 1.5,
		boxShadow: theme.shadows[8],
		backdropFilter: "blur(8px)",
	},
	logo: {
		marginBottom: theme.spacing(2),
		width: "70%",
		maxWidth: 220,
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(2),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		height: 48,
		fontWeight: 600,
		transition: "transform 150ms ease, box-shadow 150ms ease",
		"&:hover": {
			transform: "translateY(-1px)",
			boxShadow: theme.shadows[6],
		},
	},
	link: {
		color: theme.palette.primary.main,
	},
	footer: {
		marginTop: theme.spacing(4),
		color: "#ffffff",
	},
}));

const Login = () => {
	const classes = useStyles();

	const [user, setUser] = useState({ email: "", password: "" });

	const { handleLogin } = useContext(AuthContext);

	const handleChangeInput = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handlSubmit = e => {
		e.preventDefault();
		handleLogin(user);
	};

	
	return (
		<div className={classes.root}>
		<Container component="main" maxWidth="xs">
			<CssBaseline/>
			<div className={classes.paper}>
				<div>
					<img className={classes.logo} src={logo} alt={nomeEmpresa} />
				</div>
				<Typography component="h1" variant="h5">
					{i18n.t("login.title")}
				</Typography>
				<form className={classes.form} noValidate onSubmit={handlSubmit}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label={i18n.t("login.form.email")}
						name="email"
						value={user.email}
						onChange={handleChangeInput}
						autoComplete="email"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label={i18n.t("login.form.password")}
						type="password"
						id="password"
						value={user.password}
						onChange={handleChangeInput}
						autoComplete="current-password"
					/>
					
					{/* <Grid container justify="flex-end">
					  <Grid item xs={6} style={{ textAlign: "right" }}>
						<Link component={RouterLink} to="/forgetpsw" variant="body2">
						  Esqueceu sua senha?
						</Link>
					  </Grid>
					</Grid>*/}
					
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						{i18n.t("login.buttons.submit")}
					</Button>
					{ <Grid container>
						<Grid item>
							<Link
								href="#"
								variant="body2"
								className={classes.link}
								component={RouterLink}
								to="/signup"
							>
								{i18n.t("login.buttons.register")}
							</Link>
						</Grid>
					</Grid> }
				</form>
			</div>
			<Box className={classes.footer}>
				<Copyright />
			</Box>
		</Container>
		</div>
	);
};

export default Login;
