const fs = require("fs");
const SequelizeAuto = require("sequelize-auto");

const auto = new SequelizeAuto("postgres", "postgres", "SomePassword", {
    host: "localhost",
    dialect: "postgres",
    port: "5555",
    caseModel: "c",
    caseFile: "c",
    additional: {
        timestamps: false,
    },
});
auto.run((err) => {
    if (err) {
        throw err;
    }
    console.log("Scaffolding complete.");
});
