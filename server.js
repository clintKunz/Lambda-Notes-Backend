require('dotenv').config();

//Server
const express = require('express');
const server = express();

//Middleware
const configMiddleware = require('./middleware/middleware.js');
configMiddleware(server);

//Routes
const routes = require('./routes/routes.js');
server.use('/api', routes);


//PORT
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`\n=== Listening on http://localhost:${port} ===\n`);
});