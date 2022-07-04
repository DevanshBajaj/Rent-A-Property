import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Houses from "./components/Houses";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#26d7ab",
			nav: "#efefef",
		},
		secondary: {
			main: "#5367FF",
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
			<div className="App">
				<Houses />
			</div>
		</ThemeProvider>
	);
}

export default App;
