console.log("NODE_ENV", process.env.NODE_ENV);

const env = process.env.NODE_ENV;
if (env === "development") {
	require("dotenv").config({ path: ".env.local" });
	console.log("Using .env.local file");
} else {
	require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const appRoutes = require("./routes/appRoutes");

const app = express();
const expressLayouts = require("express-ejs-layouts");
const rateLimit = require("express-rate-limit");
const path = require("path");
const corsOptions = require("./config");

const PORT = process.env.PORT;
const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	max: 100, // Limit each IP to 100 requests per windowMs
	message: "Too many requests, please try again later.",
});

app.use(limiter);
// Middleware
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(helmet());
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});
app.use(
	helmet({
		contentSecurityPolicy: {
			directives: {
				defaultSrc: ["'self'", "https://businessn-erp.com"],
				scriptSrc: ["'self'", "https://businessn-erp.com", "'unsafe-inline'"],
			},
		},
	}),
);

app.use(helmet.crossOriginEmbedderPolicy());

app.use(helmet.crossOriginResourcePolicy({ policy: "same-site" }));

app.use(helmet.crossOriginOpenerPolicy({ policy: "same-origin" }));

// app.use(
// 	helmet.expectCt({
// 		enforce: true,
// 		maxAge: 30,
// 		reportUri: "https://businessn-erp.com",
// 	}),
// );

app.use(helmet.referrerPolicy({ policy: "no-referrer" }));

app.use(helmet.permittedCrossDomainPolicies({ policy: "none" }));

app.use(helmet.originAgentCluster());

// Routes
app.use("/api", appRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
