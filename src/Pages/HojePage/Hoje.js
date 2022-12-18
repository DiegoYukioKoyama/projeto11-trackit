import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";
import { ContainerHoje } from "./styled";


export default function Hoje(){
    return (
        <ContainerHoje>
            <Navbar/>
            <Menu />
        </ContainerHoje>
    )
}