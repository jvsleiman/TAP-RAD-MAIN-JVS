import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teste from "./pages/Teste";
import React, {useState } from "react";
import Home from "./components/teste/Home";
import Sobre from "./pages/Sobre";


function App(){
  return ( 
    <div className="operador">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>Home </Route>
          <Route path="/sobre" element={<Sobre />}>Sobre </Route>
          <Route path="/teste" element={<Teste />}>Testando </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App; 