import styled from "styled-components";

export const ContainerLogin = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 180px;
        height: 179px;
        margin-top: 68px;
    }
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #52B6FF;
        margin-top: 25px;
    }
`

export const Form = styled.form`
    height: 147px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        box-sizing: border-box;
        ::placeholder{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            color: #DBDBDB;
        }
    }
    button{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        box-sizing: border-box;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
    }
`