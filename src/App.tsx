import Login from "./Components/Login"
import './index.css'
import Landing from "./Components/Landing"
import SignUp from "./Components/SignUp"
import {Route, Routes} from "react-router-dom"
import { ToastContainer } from "react-toastify"



function App() {


  return (
    <>
      <div>
        <ToastContainer theme="colored"></ToastContainer>
            <Routes>
              <Route path='/' element={<Landing/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>
            </Routes>
      </div>
    </>
  )
}

export default App
