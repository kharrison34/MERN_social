const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

// connect database 4
connectDB();

//Init Middleware
app.use(express.json({ extend: false }));

app.get('/', (req, res) => res.send('API Running'));

//define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (res, res) => {
      res.sendFile(path.resolve(__dirnam, 'client', 'build', 'index.html'))
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));

//npm run server
