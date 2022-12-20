import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";
import { ContainerConteudo, ContainerHabitos, ContainerMeusHabitos, ContainerForm, Form, BtnDay, BtnCancelar, BtnSalvar, ContainerBtn, ContainerListaHabitos, ContainerDiasLH } from "./styled";
import { AuthContext } from "../../Context/AuthContext";
import Loading from "../../Load/Loading";

export default function Habitos() {

    const weekDays = [
        { id: 0, name: "D", day: "Domingo" },
        { id: 1, name: "S", day: "Segunda" },
        { id: 2, name: "T", day: "Terça" },
        { id: 3, name: "Q", day: "Quarta" },
        { id: 4, name: "Q", day: "Quinta" },
        { id: 5, name: "S", day: "Sexta" },
        { id: 6, name: "S", day: "Sábado" },
    ]

    const [checklist, setChecklist] = useState({
        days: [],
        name: ""
    })
    const [listaHabitos, setListaHabitos] = useState([])
    const [loading, setLoading] = useState(false)
    const { token } = useContext(AuthContext)
    const [formulario, setFormulario] = useState(false)
    const [reload, setReload] = useState(false)
    const [form, setForm] = useState({
        days: [],
        name: ""
    })

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
            .then((resp) => setListaHabitos(resp.data))
            .catch((err) => alert(err.response.data.message))
    }, [reload])

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function handleDay(weekday) {
        if (form.days.includes(weekday)) {
            setForm({
                ...form,
                days: form.days.filter((d) => d !== weekday)
            })
        }
        else {
            const newDay = [...form.days, weekday].sort()
            setForm({ ...form, days: newDay })
            setChecklist({ ...form, days: newDay })
        }
    }

    function cancelar(e) {
        e.preventDefault()
        setFormulario(false)
    }

    function salvar(e) {
        e.preventDefault()
        const body = form
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        if (form.days.length > 0) {
            setLoading(true)
            axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
                .then((resp) => {
                    setLoading(false)
                    setForm({ days: [], name: "" })
                    setFormulario(false)
                    setReload(!reload)
                })
                .catch((err) => {
                    alert(err.response.data.message)
                    setLoading(false)
                })
        }
    }
    function deletar(id) {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const resposta = window.confirm("Tem certeza que deseja apagar esse habito da sua lista de habitos?")
        if (resposta === true) {
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
                .then((resp) => {
                    setReload(!reload)
                })
                .catch((err) => alert(err.response.data.message))
        }
    }

    return (
        <ContainerHabitos>
            <Navbar />
            <ContainerConteudo>
                <ContainerMeusHabitos>
                    <h2>Meus hábitos</h2>
                    <button onClick={() => setFormulario(true)}>+</button>
                </ContainerMeusHabitos>
                {formulario && (
                    <ContainerForm>
                        <Form onSubmit={salvar}>
                            <input onChange={handleForm}
                                value={form.name}
                                type="text" name="name"
                                placeholder="nome do hábito"
                                disabled={loading} required></input>
                            <div>
                                {weekDays.map((weekDays) => <BtnDay key={weekDays.id}
                                    onClick={() => handleDay(weekDays.id)}
                                    selected={form.days.includes(weekDays.id)}
                                    disabled={loading} >
                                    {weekDays.name}
                                </BtnDay>)}
                            </div>
                            <ContainerBtn>
                                <BtnCancelar onClick={cancelar}>cancelar</BtnCancelar>
                                <BtnSalvar type="submit" disabled={loading}> {loading ? <Loading /> : "Salvar"}</BtnSalvar>
                            </ContainerBtn>
                        </Form>
                    </ContainerForm>
                )}
                {listaHabitos.length > 0 ? (listaHabitos.map((listaH) =>
                    <ContainerListaHabitos>
                        <div>
                            <h1>{listaH.name}</h1>
                            <ion-icon onClick={() => deletar(listaH.id)} name="trash-outline"></ion-icon>
                        </div>
                        <ContainerDiasLH>
                            {weekDays.map((wD) => <BtnDay key={wD.id}
                                selected={listaH.days.includes(wD.id)} >
                                {wD.name}
                            </BtnDay>)}
                        </ContainerDiasLH>

                    </ContainerListaHabitos>)
                ) : (<p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>)
                }

            </ContainerConteudo>
            <Menu />
        </ContainerHabitos>
    )
}

