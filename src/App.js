import React from 'react';
import './App.css';
import MainRoutes from './routes';
import Scroll from "./components/ScrollTop"
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./style/globalStyles"

function App() {
  return (
    <>
    <BrowserRouter>
       <MainRoutes/>
       <Scroll/>
       <GlobalStyles/>
    </BrowserRouter>
    </>
  );
}

export default App;
