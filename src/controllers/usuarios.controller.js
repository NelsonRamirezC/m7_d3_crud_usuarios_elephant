import Usuario from "../models/Usuario.js";

export const getUsuarios = async (req, res) => {
    try {
        let usuarios = await Usuario.findAll();
        res.send({ code: 200, data: usuarios, message: "OK" });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: "Error al consultar a los usuarios.",
        });
    }
};

export const getUsuariosPorId = async (req, res) => {
    let id = req.params.id;
    try {
        let usuario = await Usuario.findUserById(id);
        res.send({ code: 200, data: usuario, message: "OK" });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: "Error al consultar al usuario con ID: " + id,
        });
    }
};
