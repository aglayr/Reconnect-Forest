const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Reconnect Forest",
      version: "1.0.0",
      description: "Uma API para gerenciar mudas de plantas",
    },
  },
  apis: ["./src/routes/allRoutes.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
