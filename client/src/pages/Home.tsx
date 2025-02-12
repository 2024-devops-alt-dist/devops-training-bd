import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface WelcomeMessage {
	message: string;
}

const Home = () => {
	const [username, setUsername] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await axios.get<WelcomeMessage>(
				`http://localhost:2023/hello/${username}`
			);
			alert(response.data.message);
		} catch (error) {
			console.log("Error:", error);
		}
	};

	return (
		<div className="container mx-auto p4">
			<form
				onSubmit={handleSubmit}
				className="space-y-4"
			>
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Enter your name"
					className="px-3 py-2 border rounded"
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				>
					Say Hello
				</button>
			</form>
			<button
				onClick={() => navigate("/time")}
				className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
			>
				Check Server Time
			</button>
		</div>
	);
};

export default Home;
