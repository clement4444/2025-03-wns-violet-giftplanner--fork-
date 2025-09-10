import { DataSource } from "typeorm";
import Users from "../entities/Users";

const { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;

const dataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,

    entities: [Users],
    synchronize: true,
    logging: ["error"],
    // "query"
});

export default dataSource;