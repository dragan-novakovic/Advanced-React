const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const db = require('./db');

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

server.express.use(async (req, res, next) => {
  if (!req.userId) return next();
  const user = await db.query.user(
    { where: { id: req.userId } },
    '{ id, permissions, email, name }'
  );
  req.user = user;
  next();
});
// TODO populate current user

const serverOptions = {};

server.start(
  serverOptions,
  deets => void console.log(`Server is running on port: ${deets.port}`)
);
