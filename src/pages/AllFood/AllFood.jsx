import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const AllFood = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = () => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods`, config)
      .then((respon) => {
        console.log(respon);
        setMenu(respon.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  if (loading) {
    return <p className="font-[lemon] text-xl mb-5 py-8 mx-8">Loading...</p>; // Tampilkan pesan loading atau spinner
  }

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this food?"
    );

    if (isConfirmed) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      axios
        .delete(
          `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${id}`,
          config
        )
        .then((respon) => {
          console.log(respon);
          getMenu();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="bg-gray-700  dark:dark:bg-gray-600  duration-200 dark:text-slate-400 ">
      <Navbar className="bg-[#8FBC8F]" />

      <h1 className="py-20 font-[lemon] text-5xl b text-center dark:text-secondary mb-10  mt-[-30px]">
        <span className="bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent ">
          List All Food
        </span>
      </h1>
      <div className="container grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-5 mx-auto pb-10">
        {menu.map((item, idx) => (
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            key={idx}
            className="w-[380px] h-[250px] group rounded-2xl bg-gray-300 dark:bg-gray-700  hover:text-white  duration-300 px-4 shadow-xl mb-20 hover:scale-105"
          >
            <div>
              <img
                src={item.imageUrl}
                alt=""
                className="w-[200px] h-[200px] rounded-full mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-200 pb-18 mt-[-20px]"
              />
            </div>
            <div className="justify-start">
              <h1 className="text-lg dark:text-white font-[lemon] text-gray-500 mb-2 mx-2 mt-[-15px]">
                {item.name}
              </h1>
              <div>
                <Link to={`/food-by-id/${item.id}`}>
                  <button className="text-gray-100 font-semibold rounded-full w-[70px] bg-gray-500">
                    detail
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-gray-100  font-semibold rounded-full w-[70px] mx-2 bg-gray-500"
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFood;
