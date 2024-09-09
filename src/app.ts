import express from "express";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes/v1/routes";
import fs from "fs";
import path from "path";

const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, "docs/swagger.json"), "utf-8"));

const app = express();
app.use(express.json());

// Register routes
RegisterRoutes(app);

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { app };