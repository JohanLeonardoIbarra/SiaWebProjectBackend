import connection from "../database/connection.js";
import { DataTypes, Model } from "sequelize";

class Evento extends Model {}
Evento.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fechaFin: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lugar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    responsable: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contacto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mesa: {
        type: DataTypes.INTEGER,
        references: {
            model: 'mesa',
            key: 'id',
        }
    }
}, {
    sequelize: connection,
    modelName: 'evento',
});

export default Evento;