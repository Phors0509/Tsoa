import express from "express";
import { RegisterRoutes } from "./routes/v1/routes";
import swaggerUi from 'swagger-ui-express';
import path from "path";
import fs from 'fs';
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import reqDateMiddleware from "./middlewares/reqDateMiddleware";

// Load Swagger JSON
const swaggerFile = path.resolve(__dirname, 'docs/swagger.json');
const swaggerData = fs.readFileSync(swaggerFile, 'utf8');
const swaggerDocument = JSON.parse(swaggerData);

// Initialize express app
const app = express();

// Global Middlewares
app.use(express.json());

// Register middleware
app.use(reqDateMiddleware)

// Register routes
RegisterRoutes(app);

// Serve Swagger UI

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Serve Swagger JSON
app.get('/docs/swagger.json', (_req, res) => {
    res.sendFile(swaggerFile);
});

// Global Error Handler
app.use(globalErrorHandler);

export { app };