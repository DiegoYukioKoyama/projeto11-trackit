import styled from "styled-components";

export const ContainerHabitos = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    background-color: #F2F2F2;
    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    }
`

export const ContainerConteudo = styled.div`
    width: 100%;
    display: flex;  
    flex-direction: column;
    padding-top: 30px;
    padding-left: 17px;
    padding-right: 17px;
    box-sizing: border-box;
    p{
        display: flex;
        flex-wrap: wrap;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #666666;
        margin-top: 28px;
    }
`

export const ContainerMeusHabitos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    button{
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        color: #FFFFFF;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 27px;
        cursor: pointer;
    }
`

export const ContainerForm = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    margin-top: 20px;
    background-color: #FFFFFF;
`
export const Form = styled.form`
    width: 100%;
    margin-top: 18px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 19px;
    padding-right: 19px;
    input{
        width: 95%;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            color: #DBDBDB;
        }
    }
    div{
        min-width: 100%;
        display: flex;
        gap: 4px;
    }
`

export const BtnDay = styled.span`
    margin-top: 8px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    background-color: ${(props) => props.selected ? "#CFCFCF" : "#FFFFFF"};
    color: ${(props) => props.selected ? "#FFFFFF" : "#DBDBDB"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    cursor: pointer;
`

export const ContainerBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 22px;
`

export const BtnCancelar = styled.button`
    width: 84px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    color: #52B6FF;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    border: none;
    cursor: pointer;
`

export const BtnSalvar =styled.button`
    width: 84px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #52B6FF;
    color: #FFFFFF;
    border-radius: 5px;
    border: none;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
`

export const ContainerListaHabitos = styled.div`
    width: 100%;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 13px;
    box-sizing: border-box;
    div{

        display: flex;
        justify-content: space-between;
    }
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #666666;
    }
`

export const ContainerDiasLH = styled.div`
    width: 277px;
    display: flex;
    justify-content: space-between;
`