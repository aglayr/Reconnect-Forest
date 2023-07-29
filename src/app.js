require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require('../swaggerDef');
const mongoose = require("./database/dbConnect"); 
const especieRoutes = require("./routes/especieRoutes"); 
const viveiroRoutes = require("./routes/viveiroRoutes");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect();

app.use("/reconnect-forest/", especieRoutes); 
app.use("/reconnect-forest/", viveiroRoutes); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


module.exports = app;
