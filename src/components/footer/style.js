import styled from "styled-components";


export const ConteinerFooter = styled.div`
    width: 100%;
    padding: 40px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #lastFootDesc{
        width: 30%;
        border-top: 1px solid rgb(172, 169, 169);
        padding-top: 10px;
        text-align: center;
        color: rgb(100, 99, 99);

        @media(max-width:500px) {
        width: 70%;
    }
    }
`
export const ContentFooter = styled.div`
    width: 75%;
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgb(172, 169, 169);
    flex-wrap: wrap;
    justify-content: space-between;

    @media(max-width:629px) {
        justify-content: center;
    }
    .cardsfooter{
        width: 226px;
        height: 250px;
        margin: 0px 5px;
        text-align: justify;
        display: flex;
        flex-direction: column;

        img{
            width: 20px;
            height: 20px;
        }

        span,a{
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            color: rgb(100, 99, 99);
            font-size: 15px;
        }

        p{
            font-size: 15px;
            color: rgb(100, 99, 99);
        }

        h2{
            font-size: 20px;
            margin-bottom: 20px;
        }

        form input{
            width: 100%;
            background-color: white;
            margin-bottom: 10px;
        }
        .footeremail input{
            height: 35px;
            padding-left: 4px;
        }
        .footermessage input{
            height: 60px;
            padding-left: 4px;
        }

        form button{
            width: 80px;
            height: 35px;
            background-color: #6929a5;
            color: white;
        }

    }
`