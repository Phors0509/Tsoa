import { connectToDatabase } from "./database/connection";
import { app } from "./app";
import config from "./config";

const startServer = async () => {
    try {
        await connectToDatabase();
        app.listen(config.PORT, () => {
            console.log(`Server is running on http://localhost:${config.PORT}`);
            console.log(`Swagger UI is available on http://localhost:${config.PORT}/api-docs`);
        })
    } catch (error) {
        console.error('Server : Server error:', error);
        process.exit(1);
    }

}
startServer();