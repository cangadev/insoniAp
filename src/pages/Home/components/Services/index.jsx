import React from "react";
import * as S from "./style"
import Img from "../../../../assets/images/truck.svg"
import Img1 from "../../../../assets/images/free.svg"

import Img2 from "../../../../assets/images/high-quality.svg"

function Services(){
    return(
        <>
        <S.ContainerService>
            <div className="COntent">
                <div className="cardService">
                    <section className="imgServices">
                        <img src={Img1} alt="" />
                    </section>
                    <section className="descServices">
                        <h3>Entregas Grátis</h3>
                        <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                    </section>
                </div>
                <div className="cardService">
                <section className="imgServices">
                        <img src={Img2} alt="" />
                    </section>
            
                <section className="descServices">
                <h3>Qualidade Garantida</h3>
                        <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                    </section>
                </div>
                <div className="cardService">
                <section className="imgServices">
                        <img src={Img} alt="" />
                    </section>
                    <section className="descServices">
                <h3>100% Seguro</h3>
                        <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                    </section>
                </div>
            </div>
        </S.ContainerService>
        </>
    )
}
export default Services