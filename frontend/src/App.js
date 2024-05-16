import React from "react";

//import Navbar from "./componentes/Navbar";


import { Route, Routes } from "react-router-dom";
//import Analisis from "./Components/pages/Analisis";
//import Novedades from "./Components/pages/Novedades";
//import Inicio from "./Components/pages/Inicio";



//import Navbar_admin from "./Components/pages/pages_edgar/Navbar_admin";
//import Generalidades from "./Components/pages/Generalidades";
import Inicio from "./Components/pages/Inicio";

import Login from "./Components/pages/pages_edgar/Login";
function App() {
  return (
    <main>
      <React.Fragment>
       
        {/**  <Navbar></Navbar>   */}
        <Routes>
          
        <Route path="/Inicio" element={<Inicio />}></Route>
        <Route path="/admin" element={<Login/>}></Route>
        
        </Routes>
      {/**  <Footer></Footer> */}
       
      </React.Fragment>
    </main>
    
  );
}

export default App;
