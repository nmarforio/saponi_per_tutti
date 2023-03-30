import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const ImageUpload = ({
  onImageSubmit,
  onImageChange,
  imageSrc,
  uploadData,
  images,
}) => {
  return (
    <div className="newProductcard">
      {" "}
      <legend>Carica almeno DUE immagini! per una questione di grafica</legend>
      <p>
        Seleziona prima le immagini e clicca manda le immagini, nel frattempo
        riempi i riquadri sotto.
      </p>
      <form method="post" onChange={onImageChange} onSubmit={onImageSubmit}>
        <p>
          <input type="file" name="file" multiple />
        </p>

        {imageSrc.map((link, index) => (
          <Image
            key={index}
            alt={`image to upload number ${index}`}
            src={link}
            width="150"
            height="150"
          />
        ))}

        {imageSrc && !uploadData && (
          <p>
            <button>Manda le immagini</button>
          </p>
        )}

        {uploadData && <p>Le immagini sono pronte</p>}
      </form>
    </div>
  );
};

export default ImageUpload;
