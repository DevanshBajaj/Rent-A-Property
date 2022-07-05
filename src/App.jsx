import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Houses from "./components/Houses";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import { Typography } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#5367FF",
			nav: "#efefef",
		},
		background: {
			default: "#ffffff",
			paper: "#fff",
		},
		divider: "#ecedef",
		text: {
			primary: "#44475b",
			secondary: "#7c7e8c",
			disabled: "#b0b2ba",
		},
	},
});

function App() {
	const [count, setCount] = useState(0);

	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<div className="App">
				<Typography variant="h4" textAlign="left">
					Search Properties For Rent
				</Typography>
				<Houses />
			</div>
		</ThemeProvider>
	);
}

export default App;
