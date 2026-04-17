import app from './app.js';
import db from './modules/index.js';

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await db.sequelize.authenticate();
    console.log(' ✅ PostgreSQL Connection has been established successfully.');
    
    await db.sequelize.sync({ force: false });
    
    app.listen(PORT, () => {
      console.log(` ✅ Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();