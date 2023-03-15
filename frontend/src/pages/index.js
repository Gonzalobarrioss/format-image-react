import React, { useState, useEffect } from "react";
import { saveUser, getPersonas } from "../api";
import ImageUpload from "./imageupload";

const Index = () => {
  const [persona, setPersona] = useState({
    nombre: "",
    cuit: 0,
    foto: null,
  });

  const [foto, setFoto] = useState(null);

  const handleFoto = (e) => {
    //funcion destinada a trabajar sobre la foto actualmente no se usa
  };

  const arrayBufferToBase64 = (buffer) => {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };

  useEffect(() => {
    getPersonas().then((res) => {
      let base64Flag = "data:image/jpeg;base64,";
      let imageStr = arrayBufferToBase64(res.data);

      //aca convierte perfecto a base64 (o al menos asi parece)
      setFoto(base64Flag + imageStr);
    });

    return () => {};
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nombre", persona.nombre);
    formData.append("cuit", persona.cuit);
    formData.append("file", persona.foto);

    for (let [key, value] of formData.entries()) {
      //podemos ver los datos cargados
      console.log(key, value);
    }

    saveUser(formData);
  };

  const handleGet = () => {
    //actualmente para ver el estado de la variable
    console.log(foto);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: 200,
        height: 400,
        margin: 30,
      }}
    >
      <form encType="multipart/form-data" action="POST">
        Nombre
        <input
          type="text"
          placeholder="nombre"
          id="nombre"
          value={persona.nombre}
          onChange={(e) => setPersona({ ...persona, nombre: e.target.value })}
        />
        CUIT
        <input
          type="text"
          placeholder="CUIT"
          id="cuit"
          value={persona.cuit}
          onChange={(e) => setPersona({ ...persona, cuit: e.target.value })}
        />
        Foto
        <input
          type="file"
          id="foto"
          accept=".jpg, .jpeg, .png"
          onChange={
            (e) =>
              setPersona({
                ...persona,
                foto: e.target.files[0],
              }) /*handleFoto(e)*/
          }
        />
        <input type="submit" value="enviar" onClick={handleForm} />
      </form>
      <input type="button" value="obtener" onClick={handleGet} />
      <img
        src={foto}
        alt="no img"
        style={{ display: "block", width: 75, height: 75 }}
      />
      <ImageUpload />
    </div>
  );
};

export default Index;
