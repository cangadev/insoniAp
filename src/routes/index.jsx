import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/404";
import Home from "../pages/Home";

import CarrinhoHome from "../pages/Home/CarrinhoPage";

import HomeClient from "../pages/Usuario/HomePage"
import PageCarrinho from "../pages/Usuario/pageCarrinho";
import PageConta from "../pages/Usuario/pageConta";
import PageProdutos from "../pages/Usuario/pageProdutos";

function MainRoutes() { 
  return (
    <Routes>

      <Route exact path="/" element={<Home/>} />

      <Route exact path="/login" element={<Login />} />
      <Route path="/carrinhoHome" element={<CarrinhoHome />} />

      <Route path="/homeClient" element={<HomeClient />} />
      <Route path="/produtosClient" element={<PageProdutos />} />
      <Route path="/carrinhoClient" element={<PageCarrinho />} />
      <Route path="/perfilClient" element={<PageConta />} />

      
    
      <Route path="*" element={<NotFound/>} />
</Routes>
  );
}

export default MainRoutes;
