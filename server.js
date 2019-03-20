const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

// custom middleware - just a function that gets access to req, res, and next.
// ***something that blocks every request
function bouncer(req, res, next) {
  res.status(404).json("These are not the droids you're looking for");
}

function teamNamer(req, res, next) {
  req.team = 'Web XVII'; // LOOK! Middleware can modify the request!
  next(); // go ahead and execute the next middleware/route handler
}

// middleware

server.use(express.json()); // built-in; no need to install
server.use(helmet()); // third-party, needs to be added as a dependency first (yarn add)
// server.use(bouncer); // <-- calls custom middleware
server.use(teamNamer);


// routing
// route handlers ARE basically middleware
server.use('/api/hubs', hubsRouter);

server.get('/', (req, res, next) => {
  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome ${req.team} to the Lambda Hubs API</p>
    `);
});

module.exports = server;
