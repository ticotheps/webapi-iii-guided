const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

// custom middleware - just a function that gets access to req, res, and next.
// ***something that blocks every request
function bouncer(req, res, next) {
  return res.status(404).json("These are not the droids you're looking for");
  next(); // <== this will not execute because the 'return' statement ensures that it won't run
}

function teamNamer(req, res, next) {
  req.team = 'Web XVII'; // LOOK! Middleware can modify the request!
  next(); // this says 'go ahead and execute the next middleware/route handler'
}

// this custom middleware returns 403 status code and 'you shall not pass!' when clock
// clock seconds are multiples of 3, other times call next();
function moodyGateKeeper(req, res, next) {
  const seconds = new Date().getSeconds();
  if (seconds % 3 === 0) {
    res.status(403).send("You shall not pass!");
  } else {
    next();
  }
}

// middleware

server.use(express.json()); // built-in; no need to install
server.use(helmet()); // third-party, needs to be added as a dependency first (yarn add)
// server.use(bouncer); // <-- calls custom middleware
server.use(teamNamer);
server.use(moodyGateKeeper);


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
