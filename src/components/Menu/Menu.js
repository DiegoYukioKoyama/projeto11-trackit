import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";


export default function Menu() {

    const {percent} = useContext(AuthContext)
    const navigate = useNavigate();
    return (
        <ContainerMenu>
            <p onClick={() => navigate("/habitos")}>Hábitos</p>
            <ContainerProgressbar onClick={() => navigate("/hoje")}>
                <CircularProgressbar
                    text={`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                    })}
                />
            </ContainerProgressbar>
            <p onClick={() => navigate("/historico")}>Histórico</p>
        </ContainerMenu>
    )
}

const ContainerMenu = styled.footer`
    position: relative;
    min-height: 70px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    p {
        cursor: pointer;
        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        color: #52b6ff;
    }
`
const ContainerProgressbar = styled.div`
    cursor: pointer;
    width: 91px;
    height: 91px;
    position: absolute;
    left: calc(50% - (91px / 2));
    bottom: 10px;
`