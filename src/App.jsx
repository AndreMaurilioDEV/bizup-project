import LoginPage from './pages/Login/Login';
import CadastroPage from './pages/Cadastro/Cadastro';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/cadastro' element={<CadastroPage/>}/>
      </Routes>
    </>
  )
}

export default App
