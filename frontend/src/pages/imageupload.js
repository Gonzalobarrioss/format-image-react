import React, { useEffect } from "react";
import { getPersonas } from "../api";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base64Data: null,
    };
  }

  onChange = (e) => {
    // debugger;
    console.log("file uploaded: ", e.target.files[0]);
    let file = e.target.files[0];
    console.log("file", file);

    // Si traigo los datos de la bd no me renderiza
    getPersonas().then((res) => {
      if (res) {
        const blob = new Blob([JSON.stringify(res)], { type: "image/jpeg" });
        console.log("tipo", typeof res);
        const reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(blob);
      }
      //console.log("res", res);
    });

    //Si lo hago desde la variable file, si (descomentar este segmento para ver)
    /*if (file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }*/
  };

  _handleReaderLoaded = (e) => {
    console.log("file uploaded 2: ", e);
    let binaryString = e.target.result;
    this.setState({
      base64Data: btoa(binaryString),
    });
  };

  render() {
    const { base64Data } = this.state; //inicia en null
    console.log("base64", this.state);
    return (
      <div>
        <input
          type="file"
          name="image"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => this.onChange(e)}
        />

        <p>base64 string: {base64Data}</p>
        <br />
        {base64Data != null && (
          <img src={`data:image;base64,${base64Data}`} alt="" />
        )}
      </div>
    );
  }
}

export default ImageUpload;
