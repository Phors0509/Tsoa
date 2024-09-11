module.exports = {
    apps: [
        {
            name: "product-service",
            script: "build/server.js",
            watch: true,
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production",
            },
        },
    ],
};
