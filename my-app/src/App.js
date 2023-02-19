import "./App.css";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import NavBar from "./Components/Nav-bar";
import Home from "./Pages/Home";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
