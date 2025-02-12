import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Time from "./pages/Time";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/time"
					element={<Time />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
