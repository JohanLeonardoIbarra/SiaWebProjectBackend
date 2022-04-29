import Sequelize from 'sequelize';
import config from "./config.js";

const connection = new Sequelize(config.DB_URI);

export default connection;