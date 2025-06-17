// Allow only specific domains
const corsOptions = {
	origin: [
		"https://wyndclub.onrender.com",
		"http://localhost:3000",
		"http://localhost:3001",
		"http://localhost:5001",
		"https://test-crm-staging.netlify.app",
	],
	methods: ["GET", "POST", "PUT", "DELETE"],
	credentials: true, // Allow cookies to be sent
};

module.exports = corsOptions;
