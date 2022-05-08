import Sequelize from 'sequelize';
import config from "./config";

const connection = new Sequelize(config.DB_URI, {
    define: {
        freezeTableName: true
    }
});

export default connection;