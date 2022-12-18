import React, { useContext, useState } from "react";
import { ContainerLogin, Form } from "./styled";
import logo from "../../assets/logo.png"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Load/Loading";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {

    const { setToken, setProfileImage } = useContext(AuthContext)
    const navigate = useNavigate()
    const [startLoading, setStartLoading] = useState(false)
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function submitLogin(e) {
        e.preventDefault()
        setStartLoading(true)
        const body = form
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
            .then((resp) => {
                setToken(resp.data.token)
                setProfileImage(resp.data.image)
                navigate("/hoje")
                setStartLoading(false)
            })
            .catch((err) => {
                alert(err.response.data.message)
                setStartLoading(false)
            })

    }

    return (
        <ContainerLogin>
            <img src={logo} alt="logomarca" />
            <Form onSubmit={submitLogin}>
                <input type="email" disabled={startLoading} name="email" onChange={handleForm} value={form.email} placeholder="email" required />
                <input type="password" disabled={startLoading} name="password" onChange={handleForm} value={form.password} placeholder="senha" required />
                <button type="submit" disabled={startLoading}> {startLoading ? <Loading /> : "Entrar"}</button>
            </Form>
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </ContainerLogin>
    )

}

