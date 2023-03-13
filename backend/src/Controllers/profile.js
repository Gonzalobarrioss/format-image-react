import { connect } from "../db-mysql.js";

export const saveNew = async (req, res) => {
  const connection = await connect();
  console.log(req.body);
  /*
  const [result] = await connection.query(
    "INSERT INTO personas(nombre,cuit,foto) VALUES(?,?,?)",
    [req.body.nombre, req.body.foto, foto]
  );

  res.json({
    ...req.body,
    id: result.insertId,
  });*/
  connection.destroy();
};
