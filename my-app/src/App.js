import "./App.css";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import NavBar from "./Components/Nav-bar";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		</div>
	);
};

export default App;
