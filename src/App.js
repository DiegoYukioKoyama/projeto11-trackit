import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/LoginPage/Login"
import SignUp from "./Pages/SignUpPage/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
