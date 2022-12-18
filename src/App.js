import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/LoginPage/Login"
import SignUp from "./Pages/SignUpPage/SignUp";
import Habitos from "./Pages/HabitosPage/Habitos";
import Hoje from "./Pages/HojePage/Hoje";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/hoje" element={<Hoje />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
