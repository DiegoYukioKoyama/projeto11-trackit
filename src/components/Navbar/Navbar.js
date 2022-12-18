import { ContainerNavbar } from "./styled";
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