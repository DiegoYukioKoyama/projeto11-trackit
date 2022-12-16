import { ContainerSignUp, Form } from "./styled"
import logo from "../../assets/logo.png"
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

export default function SignUp() {

    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: "",
        image: ""
    })

    function handleForm (e) {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
      }

    function submitSignUp(e){
        e.preventDefault()
        const body = form
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
            .then((resp) => navigate("/"))
            .catch((err) => alert(err.response.data.message))
    }

    return (
        <ContainerSignUp>
            <img src={logo} alt="logomarca" />
            <Form onSubmit={submitSignUp}>
                <input type="email" name="email" onChange={handleForm} value={form.email} placeholder="email" required />
                <input type="password" name="password" onChange={handleForm} value={form.password} placeholder="senha" required />
                <input type="text" name="name" onChange={handleForm} value={form.name} placeholder="nome" required />
                <input type="url" name="image" onChange={handleForm} value={form.image} placeholder="foto" required />
                <button type="submit">Cadastrar</button>
            </Form>
            <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>
        </ContainerSignUp>
    )
}