import "dotenv/config";
import db from "./src/db/db.js";

const main = async () => {
    let client = await db.connect();
    let result = await client.query("select * from usuarios;");
    console.log(result.rows);
};
main();
