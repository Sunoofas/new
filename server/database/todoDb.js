const pgp = require("pg-promise")();

const connectdb = "postgressql://postgres:Sulu@1961@localhost:5432/todo";
const db = pgp(connectdb);

module.exports = {db};
