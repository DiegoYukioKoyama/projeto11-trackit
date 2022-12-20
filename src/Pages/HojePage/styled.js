import styled from "styled-components";

export const ContainerHoje = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    position: relative;
    background-color: #E5E5E5;
    padding-left: 17px;
    padding-right: 17px;
    box-sizing: border-box;
`

export const ContainerDay = styled.div`
    width: 100%;
    height: 102px;
    padding-top: 28px;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    }
`

export const ContainerListaHabitos = styled.div`
    width: 100%;
    div{
        width: 100%;
        height: 94px;
        display: flex;
        align-items: center;
        background-color: #FFFFFF;
        margin-bottom: 10px;
        ion-icon{
            width: 79px;
            height: 79px;
            color: #EBEBEB;
            border-radius: 5px;
        }
        span{
            width: 70%;
            height: 69px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding-left: 15px;
            box-sizing: border-box;
            h1{
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                color: #666666;
            }
            p{
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 13px;
                color: #666666;
                margin-top: 10px;
            }
        }
    }
`