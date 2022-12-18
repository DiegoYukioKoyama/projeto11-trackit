import { useNavigate } from "react-router-dom";
import { ContainerMenu, ContainerProgressbar } from "./styled";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";


export default function Menu() {

    const percentage = 10
    const navigate = useNavigate();
    return (
        <ContainerMenu>
            <p onClick={() => navigate("/habitos")}>Hábitos</p>
            <ContainerProgressbar onClick={() => navigate("/hoje")}>
                <CircularProgressbar
                    value={percentage}
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
    );
}