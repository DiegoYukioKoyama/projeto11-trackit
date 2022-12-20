import styled from "styled-components";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar/Navbar";

export default function Historico() {


    return (
        <ContainerHistorico>
            <Navbar />
            <div>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </div>
            <Menu />
        </ContainerHistorico>
    )
}

const ContainerHistorico = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E5E5E5;
    margin-top: 70px;
    margin-bottom: 70px;
    position: relative;
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 28px;
        padding-left: 17px;
        padding-right: 17px;
        box-sizing: border-box;
    }
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    }
`