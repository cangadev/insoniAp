import styled from "styled-components";

export const Container= styled.div`
    width: 100%;
    height: 90vh;
    background-color: #6929a5;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Content= styled.div`
    width: 70%;
    height: 70vh;
    display: flex; 
    
    @media(max-width: 544px) {
            flex-direction: column-reverse;
        }
`
export const Leftside= styled.div`
    width: 50%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 544px) {
        display: none;
    }


    h1{
        margin-bottom: 15px;
    }
    h1,h2{
        font-size: 50px;
        color: white;

        @media(max-width: 816px) {
            font-size: 30px;
        }
        @media(max-width: 544px) {
            font-size: 50px;
        }
        @media(max-width: 530px) {
            font-size: 35px;
        }
    }
    span{
        background-color: #ffffff;
        width: 180px;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }

`
export const Rightside= styled.div`
    width: 50%;
    height: 65vh;
    background-color: #8939d4;
    border-radius: 50px;

    @media(max-width: 544px) {
        width: 100%;
    }
    img{
        width: 120%;
        height: 100%;

        @media(max-width: 340px) {
        width: 110%;
    }
    }
`