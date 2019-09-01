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
      'http://bodybuildingoprema.rs',
      'http://bodybuildingoprema.rs/',
      'https://bodybuildingoprema.rs',
      'https://bodybuildingoprema.rs/',
      'http://localhost:7777',
      'http://localhost:3000',
      'https://localhost:3000',
      'http://46.101.103.143',
      'http://46.101.103.143:3000',
      'https://46.101.103.143:4444',
      'http://46.101.103.143:4444',
      'http://eurosport.gq',
      'http://eurosport.gq:80',
      'http://eurosport.gq/',
      'https://bodybuildingoprema.rs/api/',
      'https://bodybuildingoprema.rs:3000'
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

/*




*/
