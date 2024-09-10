import { connectToDatabase } from "./database/connection";
import { app } from "./app";
import config from "./config";

const startServer = async () => {
    await connectToDatabase();
    app.listen(config.PORT, () => {
        console.log(`Server is running on http://localhost:${config.PORT}`);
        console.log(`Swagger UI is available on http://localhost:${config.PORT}/api-docs`);
    })

}
startServer();