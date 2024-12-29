// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importar BrowserRouter y Routes/Route
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {" "}
      {/* Envuelve todo en BrowserRouter */}
      <div className="min-h-screen flex flex-col justify-between items-center bg-gray-800 text-white">
        <NavBar />
        <Routes>
          {" "}
          {/* Configura las rutas dentro de Routes */}
          <Route path="/" element={<Welcome />} />{" "}
          {/* Ruta para la página principal */}
          <Route path="/header" element={<Header />} />{" "}
          {/* Ruta para el Header */}
          {/* Aquí puedes agregar más rutas según sea necesario */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
