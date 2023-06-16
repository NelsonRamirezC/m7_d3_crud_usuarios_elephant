import db from "../db/db.js";

export default class Usuario {
    constructor(id, nombre, correo, edad, fechaCreacion) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.edad = edad;
        this.fechaCreacion = fechaCreacion;
    }

    static findAll() {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await db.query(
                    "SELECT id, nombre, correo, edad, fecha_creacion from usuarios"
                );
                resolve(result.rows);
            } catch (error) {
                reject("Error");
            }
        });
    }

    static findUserById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let query = {
                    text: "SELECT id, nombre, correo, edad, fecha_creacion from usuarios WHERE id = $1",
                    values: [id],
                };
                let result = await db.query(query);
                resolve(result.rows);
            } catch (error) {
                reject("Error");
            }
        });
    }
}
