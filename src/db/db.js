import pkg from "pg";
import "dotenv/config";
const { Pool } = pkg;

const config = {
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_DATABASE || "cursores",
    user: process.env.DB_USER || "node",
    password: process.env.DB_PASSWORD || "123456",
    port: process.env.DB_PORT || 5432,
    max: process.env.DB_MAX || 20,
};

let pool;
let client;
try {
    pool = new Pool(config);
    client = await pool.connect();
} catch (error) {
    console.log(error);
}

const consulta = async (query) => {
    try {
        let result = await client.query(query);
        console.log("Comando: ", result.command);
        console.log("Cantidad registros: ", result.rowCount);
        console.log("Registros:");
        console.table(result.rows);
    } catch (error) {
        console.log(error);
    }
};

let query = {
    text: "SELECT * FROM USUARIOS",
    values: [],
};

consulta(query);
