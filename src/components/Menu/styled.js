import styled from "styled-components";

export const ContainerMenu = styled.footer`
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
export const ContainerProgressbar = styled.div`
    cursor: pointer;
    width: 91px;
    height: 91px;
    position: absolute;
    left: calc(50% - (91px / 2));
    bottom: 10px;
`