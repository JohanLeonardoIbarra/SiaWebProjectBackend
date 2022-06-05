import connection from "@DB/connection";
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
    },
    categoria: {
        type: DataTypes.STRING,
    },
    mesa_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'mesa',
            key: 'id',
        },
        allowNull: false,
    }
}, {
    sequelize: connection,
    modelName: 'noticia',
});

export default Noticia;