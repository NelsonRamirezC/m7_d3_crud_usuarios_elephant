import "dotenv/config";
import db from "./src/db/db.js";
import app from "./src/app.js";

const main = async () => {
    try {
        let client = await db.connect();
        let result = await client.query("select now()");
        console.log(
            "Conectado a la base de datos, hora servidor: " + result.rows[0].now
        );
        const PORT = process.env.PORT || 3000;
        let servidor = app.listen(PORT);
        console.log("Servidor escuchando en http://localhost:3000");
    } catch (error) {
        console.log("error al iniciar el servidor: ", error);
    }
};
main();
