import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db_users", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
