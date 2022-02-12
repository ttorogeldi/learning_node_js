import {Sequelize} from "sequelize";

const sequelize = new Sequelize("postgres://postgres:Tohabratan@localhost:5432/test2");

const connect = () => {
    try {
        sequelize.authenticate().then(() => {
            console.log("Postgres connection has been established successfully.");
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

export {sequelize, connect};
