import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const element = useRoutes(routes);
  return element;
};

export default App;
