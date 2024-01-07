import React from "react"
import Header from "./components/Header";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Publicidade from "../../components/publicidade";
import PageProdutos from "../../components/pageProdutos";
import Footer from "../../components/footer";

function Home() {
  return ( 
    <>
    <Header/>
    <Banner/>
    <Services/>
    <Publicidade/>
    <PageProdutos/>
    <Footer/>
    </>
    )
}
export default Home;