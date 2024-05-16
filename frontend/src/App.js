import React from "react";

//import Navbar from "./componentes/Navbar";


import { Route, Routes } from "react-router-dom";
//import Analisis from "./Components/pages/Analisis";
//import Novedades from "./Components/pages/Novedades";
//import Inicio from "./Components/pages/Inicio";


import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

//import Generalidades from "./Components/pages/Generalidades";
import Inicio from "./Components/pages/Inicio";
function App() {
  return (
    <main>
      <React.Fragment>
        <Navbar></Navbar>
        <Routes>
          
        <Route path="/Inicio" element={<Inicio />}></Route>
        </Routes>
        <Footer></Footer>
      </React.Fragment>
    </main>
    
  );
}

export default App;
