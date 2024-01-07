import styled from "styled-components";

export const ContainerService= styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;

    .COntent{
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 10px 0px;

        @media(max-width:1221px) {
                justify-content: center;
            }

        .cardService{
            width: 285px;
            height: 150px;
            background-color: #fff;
            display: flex;
            align-items: center;

            @media(max-width:1221px) {
                margin:5px ;
            }

            .imgServices{
                width: 20%;
                height: 50px;

                img{
                    width: 100%;
                    height: 100%;
                    color: red;
                    margin-top: -15px;
                }
            }

            .descServices{
                width: 80%;

                h3{
                    margin-bottom: 15px;
                }

                p{
                    color: #5c5a5a;
                }
            }
        }
    }
`