import Sequelize from 'sequelize';
import config from "./config.js";

const connection = new Sequelize(config.DB_URI);

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default connection;