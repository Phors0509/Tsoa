import express from "express";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes";
import { connectToDatabase } from "./database/connection";

const app = express();
app.use(express.json());

// Connect to MongoDB
connectToDatabase();

// Register routes
RegisterRoutes(app);

// Serve Swagger UI
app.use("/docs", swaggerUi.serve, async (_req: express.Request, res: express.Response) => {
    return res.send(swaggerUi.generateHTML(await import("../public/swagger.json")));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`Swagger UI is available on http://localhost:${port}/docs`);
    console.log("-------------------------------------------")
});

export { app };