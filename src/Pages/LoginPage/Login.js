import { useState } from "react";
import { ContainerLogin, Form } from "./styled";
import logo from "../../assets/logo.png"
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    function handleForm (e) {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
      }
    
    function submitLogin(e){

        e.preventDefault()
        const body = form
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
            .then((resp) => console.log(resp))
            .catch((err) => alert(err.response.data.message))      

    }

    return (
        <ContainerLogin>
            <img src={logo} alt="logomarca" />
            <Form onSubmit={submitLogin}>
                <input type="email" name="email" onChange={handleForm} value={form.email} placeholder="email" required />
                <input type="password" name="password" onChange={handleForm} value={form.password} placeholder="senha" required />
                <button type="submit">Entrar</button>
            </Form>
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </ContainerLogin>
    )

}

