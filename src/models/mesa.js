import connection from "@DB/connection";
import { DataTypes, Model } from "sequelize";

class Mesa extends Model {}
Mesa.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    correo:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    universidad_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'universidad',
            key: 'id',
        },
        allowNull: false,
    }
}, {
    sequelize: connection,
    modelName: 'mesa',
    timestamps: false
});

export default Mesa;