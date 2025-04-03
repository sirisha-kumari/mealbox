const db=require('./models');
db.sync({ force: false }) // Set force: true only for initial setup
  .then(() => console.log('Database tables synced'))
  .catch(err => console.error('Sync error:', err));
db.sequelize.sync({ force :false});
// server.js
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const jwtSecret = process.env.JWT_SECRET;

