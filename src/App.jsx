import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teste from "./components/menuList/Teste";
import React, {useState } from "react";
import Home from "./components/teste/Home";
import Sobre from "./pages/Sobre";
import Perfil from "./components/menuList/Perfil";
import Senha from "./components/menuList/Senha";
import Interesses from "./components/menuList/Interesses";
import Formacoes from "./components/menuList/Formacoes";
import Cursos from "./components/menuList/Cursos";
import Experiencias from "./components/menuList/Experiencias";


function App(){
  return ( 
    <div className="operador">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>Home </Route>
          <Route path="/sobre" element={<Sobre />}>Sobre </Route>
          <Route path="/teste" element={<Teste />}>Testando </Route>
          <Route path="/perfil" element={<Perfil />}></Route>
          <Route path="/senha" element={<Senha />}></Route>
          <Route path="/interesses" element={<Interesses />}></Route>
          <Route path="/formacoes" element={<Formacoes />}></Route>
          <Route path="/cursos" element={<Cursos />}></Route>
          <Route path="/experiencias" element={<Experiencias />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App; 