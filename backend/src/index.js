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

// 2. Create a middleware that populates the user on each request

server.express.use(async (req, res, next) => {
  // if they aren't logged in, skip this
  if (!req.userId) return next();
  const user = await db.query.user(
    { where: { id: req.userId } },
    '{ id, permissions, email, name }'
  );
  req.user = user;
  next();
});

const serverOptions = {
  cors: {
    credentials: true,
    origin: [
      'https://eurosport.now.sh/:1',
      'https://eurosport.now.sh',
      'http://localhost:7777',
      'http://localhost:3000',
      'https://localhost:3000'
    ]
  }
};

server.start(
  serverOptions,
  deets =>
    void console.log(
      `Server is running on port: ${deets.port} ${process.env.NODE_ENV}`
    )
);
