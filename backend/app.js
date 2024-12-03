const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

// Hardcoded Frontend URL
const FRONTEND_URL = "https://w2fcfl-3000.csb.app";

// Middleware
app.use(cookieParser());
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const Post = require('./routes/post');
const User = require('./routes/user');
const Message = require('./routes/message');
const Chat = require('./routes/chat');
const Notifications = require('./routes/notifications');

app.use('/api/v1', Post);
app.use('/api/v1', User);
app.use('/api/v1', Chat);
app.use('/api/v1', Message);
app.use('/api/v1', Notifications);

module.exports = app;
