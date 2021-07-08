import { DataTypes } from "sequelize";
import db from "./database";

// table_name couloumn_names
const Blogs = db.define(
    "blogs",
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
    },
    {
        timestamps: false,
    }
);


export default Blogs
