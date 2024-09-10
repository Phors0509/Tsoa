const esbuild = require("esbuild");
const { copy } = require("esbuild-plugin-copy");

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
                        from: ["src/config/.env"],
                        to: ["build/config"],
                    },
                ],
            }),
        ],
        define: {
            "process.env.NODE_ENV": '"production"',
        },
    })
    .then(() => {
        console.log("Build completed successfully!");
    })
    .catch((error) => {
        console.error("Build failed:", error);
        process.exit(1);
    });
