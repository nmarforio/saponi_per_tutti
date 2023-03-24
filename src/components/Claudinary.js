// claudinary
// function handleOnChange(changeEvent) {
//   const reader = new FileReader();

//   reader.onload = function(onLoadEvent) {
//     setImageSrc(onLoadEvent.target.result);
//     setUploadData(undefined);
//   }

//   reader.readAsDataURL(changeEvent.target.files[0]);

//   // for multiple files

//   /*
//   for (const file of e.target.files) {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       setImageSrc((imgs) => [...imgs, reader.result]);
//     };
//     reader.onerror = () => {
//       console.log(reader.error);
//     };
//   }
//   */

// }

// /**
//  * handleOnSubmit
//  * @description Triggers when the main form is submitted
//  */

// async function handleOnSubmit(event) {
//   event.preventDefault();

//   const form = event.currentTarget;
//   const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

//   const formData = new FormData();

//   for ( const file of fileInput.files ) {
//     formData.append('file', file);
//   }

//   formData.append('upload_preset', '<your name of the preset>');

//   const data = await fetch('https://api.cloudinary.com/v1_1/<your cloud name>/image/upload', {
//     method: 'POST',
//     body: formData
//   }).then(r => r.json());

//   setImageSrc(data.secure_url);
//   setUploadData(data);
// }

// return (
//   <div className={styles.container}>
//     <Head>
//       <title>Image Uploader</title>
//       <meta name="description" content="Upload your image to Cloudinary!" />
//       <link rel="icon" href="/favicon.ico" />
//     </Head>

//     <main className={styles.main}>
//       <h1 className={styles.title}>
//         Image Uploader
//       </h1>

//       <p className={styles.description}>
//         Upload your image to Cloudinary!
//       </p>

//       <form className={styles.form} method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
//         <p>
//           <input type="file" name="file" />
//         </p>

//         <img src={imageSrc} />

//         {imageSrc && !uploadData && (
//           <p>
//             <button>Upload Files</button>
//           </p>
//         )}

//         {uploadData && (
//           <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
//         )}
//       </form>
//     </main>
//   </div>
// )

// formData.append("upload_preset", "udq5lpvq");

// const data = await fetch(
//   "https://api.cloudinary.com/v1_1/dsubvcg4b/image/upload",
//   {
//     method: "POST",
//     body: formData,
//   }
// ).then((r) => r.json());

//Cloudinary
