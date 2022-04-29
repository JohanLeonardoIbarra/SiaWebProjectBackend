import connection from "../database/connection.js";
import { DataTypes, Model } from "sequelize";

class Universidad extends Model {}
Universidad.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    responsable: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    info: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: connection,
    modelName: 'universidad',
    timestamps: false,
});

export default Universidad;