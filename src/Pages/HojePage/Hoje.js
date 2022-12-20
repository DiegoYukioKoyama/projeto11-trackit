import axios from "axios";
import { useEffect, useContext, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";
import { ContainerHoje, ContainerDay, ContainerListaHabitos } from "./styled";
import { AuthContext } from "../../Context/AuthContext";

export default function Hoje() {

    const weekDays = [
        { id: 0, name: "D", day: "Domingo" },
        { id: 1, name: "S", day: "Segunda" },
        { id: 2, name: "T", day: "Terça" },
        { id: 3, name: "Q", day: "Quarta" },
        { id: 4, name: "Q", day: "Quinta" },
        { id: 5, name: "S", day: "Sexta" },
        { id: 6, name: "S", day: "Sábado" },
    ]
    const { token, percent } = useContext(AuthContext)
    const today = new Date();
    const day = weekDays[today.getDay()].day;
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const [listaHabitos, setListaHabitos] = useState([])
    const [reload, setReload] = useState(false)


    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            .then((resp) => setListaHabitos(resp.data))
            .catch((err) => alert(err.response.data.message))
        
    }, [reload])

    function check(id, done) {
        const body = ""
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        !done ? (
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, body, config)
                .then((resp) => setReload(!reload))
                .catch((err) => alert(err.response.data.message))
        ) : (
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, body, config)
                .then((resp) => setReload(!reload))
                .catch((err) => alert(err.response.data.message))
        )
        }
console.log(percent)
    return (
        <ContainerHoje>
            <Navbar />
            <ContainerDay>
                <h1>{day}, {date}/{month}</h1>
                    {percent ? (<p>{percent}% dos hábitos concluídos</p>) : (<p>Nenhum hábito concluído ainda</p>)}
            </ContainerDay>
            <ContainerListaHabitos>
                {listaHabitos.map((listaH) => <div key={listaH.id}>
                    <span>
                        <h1>{listaH.name}</h1>
                        <p>
                            Sequência atual: <strong style={listaH.done ? { color: "#8FC549" } : { color: "#666666" }} >{listaH.currentSequence} dias</strong><br />
                            Seu recorde: <strong style={listaH.currentSequence === listaH.highestSequence &&
                                listaH.highestSequence > 0 &&
                                listaH.done ? { color: "#8FC549" } : { color: "#666666" }}
                            >{listaH.highestSequence} dias</strong>
                        </p>
                    </span>
                    <ion-icon onClick={() => check(listaH.id, listaH.done)} name="checkbox" style={listaH.done ? { color: "#8FC549" } : { color: "#EBEBEB" }}></ion-icon>
                </div>)}
            </ContainerListaHabitos>
            <Menu />
        </ContainerHoje>
    )
}