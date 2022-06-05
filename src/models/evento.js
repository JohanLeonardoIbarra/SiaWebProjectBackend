import connection from "@DB/connection";
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
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    lugar: {
        type: DataTypes.STRING,
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
    },
    mesa_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'mesa',
            key: 'id',
        },
        allowNull: false
    }
}, {
    sequelize: connection,
    modelName: 'evento',
    timestamps: false
});

export default Evento;