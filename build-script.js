const esbuild = require("esbuild");
const { copy } = require("esbuild-plugin-copy");
const fs = require("fs-extra");
const path = require("path");
esbuild
    .build({
        entryPoints: ["src/server.ts"],
        bundle: true,
        platform: "node",
        target: "node20",
        outdir: "build",
        external: ["express", "swagger-ui-express"],
        loader: {
            ".ts": "ts",
        },
        plugins: [
            copy({
                resolveFrom: "cwd",
                assets: [
                    {
                        from: ["node_modules/swagger-ui-dist/*"],
                        to: ["build/swagger-ui-dist"],
                    },
                    {
                        from: ["src/docs/swagger.json"],
                        to: ["build/docs/swagger.json"],
                    },
                    {
                        from: ["src/config/.env.development"],
                        to: ["build/config/.env.development"],
                    },
                    {
                        from: ["src/config/.env.production"],
                        to: ["build/config/.env.production"],
                    },
                    {
                        from: ["ecosystem.config.js"],
                        to: ["build/ecosystem.config.js"],
                    },
                ],
            }),
        ],
        resolveExtensions: [".ts", ".js"],
        define: {
            "process.env.NODE_ENV": '"production"',
        },
    })
    .then(() => {
        fs.copySync(
            path.resolve(__dirname, "src/docs/swagger.json"),
            path.resolve(__dirname, "build/docs/swagger.json")
        );
        console.log("Swagger JSON copied successfully!");
        console.log("=========================================");

        fs.copySync(
            path.resolve(__dirname, "src/config/.env.development"),
            path.resolve(__dirname, "build/config/.env.development")
        );
        fs.copySync(
            path.resolve(__dirname, "src/config/.env.production"),
            path.resolve(__dirname, "build/config/.env.production")
        );
        console.log("Environment variables copied successfully!");
        console.log("=========================================");

        fs.copySync(
            path.resolve(__dirname, "ecosystem.config.js"),
            path.resolve(__dirname, "build/ecosystem.config.js")
        );
        console.log("ecosystem.config.ts copied successfully!");
        console.log("=========================================");

        console.log("Build completed successfully!");
        console.log("=========================================");
    })
    .catch((error) => {
        console.error("Build failed:", error);
        process.exit(1);
    });
