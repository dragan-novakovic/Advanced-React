const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createServer = require('./createSever');

const server = createServer();

// TODO use express middleware for JWT
server.express.use(cookieParser());

server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put userId on the req

    req.userId = userId;
  }

  next();
});
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
