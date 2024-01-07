import React from "react";
import * as S from "./style"
import img from "../../assets/images/high-quality.svg"
import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <S.ConteinerFooter>
            <S.ContentFooter>
                <div className="cardsfooter">
                    <h2>Insónia</h2>
                    <p>
                      Insónia é uma empresa de vendas virtual, criada em 2023, atualmente conta mais de 00 clientes frequentes e mais de 00 productos a disposição dos nossos clientes. Cadastra-se, torna-se nosso cliente e faça parte da nossa história!
                    </p>
                </div>
                <div className="cardsfooter">
                    <h2>Envie uma mensagem</h2>
                    <form action="">
                        <section className="footeremail">
                            <input type="email" name="" id="" placeholder="escreva seu email" />
                        </section>
                        <section className="footermessage">
                            <input type="text" name="" id="" placeholder="descrição da mensagem"/>
                        </section>
                        <button>Enviar</button>
                    </form>
                </div>
                <div className="cardsfooter">
                    <h2>Serviços</h2>
                    <span><img src={img} alt="" />Serviços de Vendas</span>
                    <span> <img src={img} alt="" /> Serviços de Entregas</span>
                    <span><img src={img} alt="" />Serviços Publicitários</span>
                </div>
                <div className="cardsfooter">
                    <h2>Contacta-nos</h2>
                    <Link to="#"><img src={img} alt="" />insonia.ao@gmail.com</Link>
                    <Link to="#"> <img src={img} alt="" /> Facebook</Link>
                    <Link to="#"><img src={img} alt="" />Instagram</Link>
                </div>
            </S.ContentFooter>
            <span id="lastFootDesc">© 2020 All Rights Reserved. Design by canga dev</span>
        </S.ConteinerFooter>
        </>
    )
}
export default Footer;