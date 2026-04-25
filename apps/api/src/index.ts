import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth/auth";
import reportRoutes from "./routes/report.routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Better Auth Route
app.all("/api/auth/*", toNodeHandler(auth));

// Domain Routes
app.use("/api/reports", reportRoutes);

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

app.listen(port, () => {
    console.log(`🚀 API Server running on port ${port}`);
});
