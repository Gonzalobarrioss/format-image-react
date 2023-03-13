import React, { useState } from "react";
import { saveUser } from "../api";

function Index() {
  const [persona, setPersona] = useState({
    nombre: "",
    cuit: 0,
    foto: null,
  });

  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre", persona.nombre);
    formData.append("cuit", persona.cuit);
    formData.append("foto", persona.foto);

    //console.log(formData);
    saveUser(FormData);
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
      <form encType="multipart/form-data">
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
          onChange={(e) => setPersona({ ...persona, foto: e.target.files[0] })}
        />
        <input type="submit" value="enviar" onClick={handleForm} />
      </form>
    </div>
  );
}

export default Index;
