import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path"; // Importing path module

const app = express();
const PORT = 3000;

// Serve static files from the client build directory
app.use(express.static(path.join(__dirname, "../client/dist")));

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/server/time", (req, res) => {
	let currentTime = new Date().toLocaleTimeString();
	res.json({ time: currentTime });
});

app.get("/hello/:name", (req, res) => {
	let { name } = req.params;
	res.json({
		message: `Hello, ${name}! Welcome to our Docker application`,
	});
});

// Serve the client application for any unmatched routes
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Start server
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
