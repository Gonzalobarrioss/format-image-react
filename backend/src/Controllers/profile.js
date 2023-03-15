import { connect } from "../db-mysql.js";
import { serialize, deserialize } from "v8";

export const saveNew = async (req, res) => {
  const photoSerializedAsBuffer = serialize(req.file);

  const connection = await connect();

  const result = await connection.query(
    "INSERT INTO personas(nombre,cuit,foto) VALUES(?,?,?)",
    [req.body.nombre, req.body.cuit, photoSerializedAsBuffer]
  );

  res.json({
    id: result.insertId,
    ...req.body,
  });

  connection.destroy();
};

export const personas = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("select * from personas");
  // console.log(deserialize(rows[0].foto));
  res.json(deserialize(rows[0].foto));
  //res.json(rows);
  connection.destroy();
};
