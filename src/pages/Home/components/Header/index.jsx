import React from "react"
import { Link } from "react-router-dom";
import './style.css'

import Img5 from '../../../../assets/images/carrinho.svg'
import Img6 from '../../../../assets/images/conta.svg'

function Header() {
  return ( 
    <>
    <header className="headerr">
      <Link to="/" className="logoo">Insónia</Link>
      
      <nav className="nav-menuu">
        <ul className="menuu">
          <li>
            <Link to="/login">
              <img src={Img6} alt="img" />
              <span>Login</span>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <span>Cadastrar-se</span>
            </Link>
          </li>
          <li>
            <Link to="/carrinhoHome">
              <div className="carrinho-iconn">
                <img src={Img5} alt="img" />
                <div className="carrinho-icon-numberr">2</div>
              </div>
              <span>Carrinho</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
    )
}
export default Header;