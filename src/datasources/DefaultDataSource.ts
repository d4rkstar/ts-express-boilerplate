import {DataSource} from "typeorm";
import * as _ from "lodash";
import * as dotenv from "dotenv";

dotenv.config();

export const defaultDataSource = new DataSource({
    name: "default",
    type: "postgres",
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    host: process.env.TYPEORM_HOST,
    database: process.env.TYPEORM_DATABASE,
    schema: process.env.TYPERORM_SCHEMA,
    port: _.toNumber(process.env.TYPEORM_PORT),
    entities: ["dist/entities/*.js"],
    migrations: ["dist/migrations/**/*.js"],
    logging: process.env.TYPEORM_LOGGING === "1",
    synchronize: false,
});