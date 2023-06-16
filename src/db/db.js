import pkg from "pg";
const { Pool } = pkg;

const config = {
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_DATABASE || "cursores",
    user: process.env.DB_USER || "node",
    password: process.env.DB_PASSWORD || "123456",
    port: process.env.DB_PORT || 5432,
    max: process.env.DB_MAX || 20,
};

const pool = new Pool(config);

export default pool;
