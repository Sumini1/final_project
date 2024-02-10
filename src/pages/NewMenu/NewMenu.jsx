// import React, { useState } from "react";
// import bgImg from "../../assets/image/halaman.jpeg";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
//  import { data } from "autoprefixer";

// const NewMenu = () => {
//   const [fileImage, setFileImage] = useState(null);
//   const [creatMenu, setCreatMenu] = useState({
//     name: "",
//     description: "",
//     imageUrl: "",
//     ingredients: [],
//   });
//   console.log(creatMenu);

//   const handleImage = (event) => {
//     console.log(event.target.files[0]);
//     const selectedFile = event.target.files[0];
//     setFileImage(selectedFile);
//   };

//   const handleChange = (event) => {
//     console.log(event.target.name);
//     const { name, value } = event.target;
//     setCreatMenu((prevUpdate) => ({
//       ...prevUpdate,
//       [name]: value,
//     }))
//   };
//   console.log("create", creatMenu);
//   const Navigate = useNavigate();

//   const handleSubmit = async () => {
//     const token = localStorage.getItem("token");
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         apiKey: "w05KkI9AWhKxzvPFtXotUva-",
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     // const FormData = require("form-data");
//     let data = new FormData();
//     data.append("image", fileImage);
//     // console.log("FormData", data);

//     await axios
//       .post(`https://api-bootcamp.do.dibimbing.id/api/v1/upload-image`, data, {
//         maxBodyLength: Infinity,
//         headers: {
//           apiKey: config.headers.apiKey,
//           Authorization: config.headers.Authorization,
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((respon) => {
//         console.log(respon);
//         setCreatMenu((prev) => ({ ...prev, imageUrl: respon.data.url }));
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     await axios
//       .post(
//         "https://api-bootcamp.do.dibimbing.id/api/v1/create-food",
//         creatMenu,
//         config
//       )
//       .then((respon) => {
//         console.log(respon);
//         Navigate("/all-food");
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   };

//   return (
//     <div className="w-full h-screen flex items-start">
//       <div className="relative w-1/2 h-full flex flex-col">
//         <div className="absolute top-[20%] left-[10%] flex flex-col">
//           <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[lemon]">
//             Welcome to
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
//               Nusantara Food of Indonesia
//             </span>
//           </h1>
//           <p className="text-white text-xl font-bold ">
//             The Tasty is Really Great
//           </p>
//         </div>
//         <img src={bgImg} alt="" className="w-full h-full object-cover " />
//       </div>

//       <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
//         <h1 className="w-full text-xl max-w-[500px] text-gray-700 font-semibold mx-auto mb-2 font-[lemon]">
//           Favorit Food
//         </h1>

//         <div className="w-full flex flex-col max-w-[500px]">
//           <div className="w-full flex flex-col mb-2">
//             <h3 className="text-3xl text-gray-700 font-semibold mb-2 font-[lemon]">
//               Create New Menu
//             </h3>
//             <p className="text-base mb-2">
//               Welcome Back! Please create your favorite menu.
//             </p>
//           </div>
//           <div>
//             <img src={fileImage} alt="" />
//           </div>

//           <div className="w-full flex flex-col mt-6">
//             <input
//               type="text"
//               name="name"
//               id="name"
//               onChange={handleChange}
//               placeholder="Enter Name of Food "
//               className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
//             />
//             <input
//               type="text"
//               name="description"
//               id="description"
//               onChange={handleChange}
//               placeholder="Description"
//               className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
//             />
//             <input
//               type="file"
//               name="image"
//               id="image"
//               onChange={handleImage}
//               placeholder="Image Url"
//               className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
//             />
//             {fileImage && (
//               <img
//                 src={URL.createObjectURL(fileImage)}
//                 alt="Selected Image"
//                 className="mt-2 max-w-full h-auto"
//               />
//             )}

//             <select
//               onChange={handleChange}
//               name="type"
//               id="array"
//               placeholder="ingredients"
//             >
//               <option value="ayam">Ayam</option>
//               <option value="sambal">Sambal</option>
//               <option value="bawang">Bawang</option>
//             </select>
//           </div>

//           <div className="w-full flex items-center justify-between">
//             <div className="w-full flex items-center"></div>
//           </div>

//           <div className="w-full flex flex-col my-4">
//             <button
//               onClick={handleSubmit}
//               className="w-full text-white my-2 bg-gray-700 border border-gray-700 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer mt-12"
//             >
//               Create Menu
//             </button>
//           </div>
//         </div>
//         <div className="w-full flex  justify-center">
//           <p className="text-sm font-normal text-black font-[lemon] mt-20">
//             Thank for your visit
//           </p>
//         </div>
//         <div>
//           <p className="text-sm font-normal text-black font-[lemon]">
//             Enjoy your meaal
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewMenu;

import React, { useState } from "react";
import bgImg from "../../assets/image/halaman.jpeg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const NewMenu = () => {
  const Navigate = useNavigate();
  const [fileImage, setFileImage] = useState(null);
  const [update, setUpdate] = useState({
    name: "",
    description: "",
    ingredients: "",
  });

  const handleImage = (event) => {
    setFileImage(event.target.files[0]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdate((prevUpdate) => ({
      ...prevUpdate,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      // Upload gambar terlebih dahulu
      if (!fileImage) {
        throw new Error("Please select an image to upload.");
      }
      const formData = new FormData();
      formData.append("image", fileImage);
      const imageUploadResponse = await axios.post(
        "https://api-bootcamp.do.dibimbing.id/api/v1/upload-image",
        formData,
        {
          maxBodyLength: Infinity,
          headers: {
            "Content-Type": "multipart/form-data",
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const imageUrl = imageUploadResponse.data.url;
      const createFoodResponse = await axios.post(
        `https://api-bootcamp.do.dibimbing.id/api/v1/create-food`,
        { ...update, ingredients: update.ingredients.split(","), imageUrl },
        config
      );

      console.log(createFoodResponse);
      Navigate("/all-food");
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Create Menu Gagal",
        text: error?.response?.data?.message || error?.message || "Error",
        icon: "error",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[lemon]">
            Welcome to
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Nusantara Food of Indonesia
            </span>
          </h1>
          <p className="text-white text-xl font-bold ">
            The Tasty is Really Great
          </p>
        </div>
        <img src={bgImg} alt="" className="w-full h-full object-cover " />
      </div>

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl text-gray-700 font-semibold  font-[lemon] mt-11">
              Create your Food
            </h3>
            <p className="text-base mb-10 mt-3">
              Welcome Back! Please create your favorite food.
            </p>
          </div>

          <div className="w-full flex flex-col mt-[-10px]">
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={update.name}
              placeholder="Create Food "
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
            <input
              type="text"
              name="description"
              id="description"
              value={update.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
            <input
              type="file"
              name="image"
              id="image"
              // value={update.imageUrl}
              onChange={handleImage}
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
            <input
              type="text"
              name="ingredients"
              id="ingredients"
              value={update.ingredients}
              onChange={handleChange}
              placeholder="Ingredients (comma-separated)"
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between"></div>

          <div className="w-full flex flex-col my-4 ">
            <button
              onClick={handleSubmit}
              className="w-full text-white my-2 mt-10 bg-gray-700 border border-gray-700 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer "
            >
              Create
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-black font-[lemon] -mt-[-20] pb-9">
            Thanks forr you visit, enjoy your meal...
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewMenu;
