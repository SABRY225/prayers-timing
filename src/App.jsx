import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import MainContent from "./Components/MainContent";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "100vw",
				}}
			>
				<Container maxWidth="xl">
					<MainContent />
				</Container>
			</div>
		</>
	);
}

export default App;