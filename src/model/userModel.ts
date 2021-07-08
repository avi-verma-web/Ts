import { DataTypes } from "sequelize";
import db from "./database";

// table_name couloumn_names
const Users = db.define(
    "users",
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
    },
    {
        timestamps: false,

    }
);




export default Users
