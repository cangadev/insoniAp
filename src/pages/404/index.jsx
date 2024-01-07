import React from "react";
import { PageNotFound } from "./styles";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <PageNotFound>
        <h1>Página não encontrada</h1>
        <Link to="/homeClient">Voltar a Home</Link>
      </PageNotFound>
    </>
  );
};

export default NotFound;
