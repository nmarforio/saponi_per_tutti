import { useState, useEffect } from "react";
import ImageUpload from "@/components/ImageUpload";
import NewProductForm from "@/components/NewProductForm";

export default function NewProduct() {
  const [imageSrc, setImageSrc] = useState([]);
  const [uploadData, setUploadData] = useState();
  const images = [];

  function handleImageChange(e) {
    for (const file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc((imgs) => [...imgs, reader.result]);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  }
  console.log("AAAAAAAAAA", imageSrc);

  async function handleImageSubmit(event) {
    event.preventDefault();

    const fileInput = document.querySelector("[type=file]").files;

    const formData = new FormData();

    for (let i = 0; i < fileInput.length; i++) {
      let file = fileInput[i];
      formData.append("file", file);
      formData.append("upload_preset", "udq5lpvq");

      const data = await fetch(
        "https://api.cloudinary.com/v1_1/dsubvcg4b/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());

      images.push(data.secure_url);
      setUploadData(data);
    }
    setImageSrc(images);
  }

  async function handleSubmitInfos(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const soapData = Object.fromEntries(formData);
    console.log(soapData);

    const response = await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify({
        name: soapData.name,
        description: soapData.description,
        price: soapData.price,
        recipes: soapData.recipes,
        image: imageSrc,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <>
      <h2 className="newProductTitle">Crea nuovo prodotto </h2>
      <ImageUpload
        uploadData={uploadData}
        imageSrc={imageSrc}
        onImageSubmit={handleImageSubmit}
        onImageChange={handleImageChange}
        // images={images}
      />
      <NewProductForm onSubmit={handleSubmitInfos} />
    </>
  );
}
