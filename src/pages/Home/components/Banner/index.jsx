import React from "react";
import * as S from "./style"
import Img from "../../../../assets/images/saving-img.png"
import Img5 from '../../../../assets/images/carrinho.svg'

export default function Banner(){
    return(
        <>
        <S.Container>
            <S.Content>
                <S.Leftside>
                    <h1>BEM-VINDO AO</h1>
                    <h2>INSÓNIA APP</h2>
                    <span>24H a sua disposição <img src={Img5} alt="" /> </span>
                </S.Leftside>
                <S.Rightside>
                    <img src={Img} alt="" />
                </S.Rightside>
            </S.Content>
        </S.Container>
        </>
    )
}