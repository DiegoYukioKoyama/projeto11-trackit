import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/LoginPage/Login"
import SignUp from "./Pages/SignUpPage/SignUp";
import Habitos from "./Pages/HabitosPage/Habitos";
import Hoje from "./Pages/HojePage/Hoje";
import Historico from "./Pages/Historico"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/historico" element={<Historico/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
