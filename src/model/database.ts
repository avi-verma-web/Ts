import { Sequelize } from 'sequelize'

const db = new Sequelize("ts_database_crud", "postgres", "12345678", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
});

export default db