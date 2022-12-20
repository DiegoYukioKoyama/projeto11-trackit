import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Navbar(){

    const {profileImage} = useContext(AuthContext)

    return (
        <ContainerNavbar>
            <h1>TrackIt</h1>
            <img src={profileImage} alt="profile" />
        </ContainerNavbar>
    )
}

const ContainerNavbar = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 18px;
    padding-left: 18px;
    box-sizing: border-box;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    h1{  
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 39px;
        color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 99px;
    }
`