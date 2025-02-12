import { useEffect, useState } from "react";
import axios from "axios";

const Time = () => {
	const [serverTime, setServerTime] = useState("");

	useEffect(() => {
		const fetchTime = async () => {
			try {
				const response = await axios.get(
					"http://localhost:2023/server/time"
				);
				setServerTime(response.data.time);
			} catch (error) {
				console.log("Error fetching time:", error);
			}
		};

		fetchTime();

		const interval = setInterval(fetchTime, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="container mx-auto p-4">
			<h2 className="text-xl font-bold mb-2">Current Server Time:</h2>
			<p>{serverTime}</p>
			<button
				onClick={() => window.history.back()}
				className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
			>
				Back to Home
			</button>
		</div>
	);
};

export default Time;
