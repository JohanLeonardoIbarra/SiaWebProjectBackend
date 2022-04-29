import connection from "../database/connection.js";
import { DataTypes, Model } from "sequelize";

class Noticia extends Model {}
Noticia.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    categoria: {
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
    modelName: 'noticia',
});

export default Noticia;