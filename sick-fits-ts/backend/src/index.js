require('dotenv').config();

const createServer = require('./createSever');

const server = createServer();

// TODO use express middleware for JWT
// TODO populate current user

const serverOptions = {
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
};

server.start(
  serverOptions,
  deets => void console.log(`Server is running on port: ${deets.port}`)
);
