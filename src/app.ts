import express from "express";
import { RegisterRoutes } from "./routes/v1/routes";
import swaggerUi from 'swagger-ui-express';
import path from "path";
import fs from 'fs';

const swaggerFile = path.resolve(__dirname, 'docs/swagger.json');
const swaggerData = fs.readFileSync(swaggerFile, 'utf8');
const swaggerDocument = JSON.parse(swaggerData);

const app = express();

app.use(express.json());

// Register routes
RegisterRoutes(app);

// Serve Swagger UI

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Serve Swagger JSON
app.get('/docs/swagger.json', (_req, res) => {
    res.sendFile(swaggerFile);
});

export { app };