import Logo from '../../assets/images/Logo.png';
import React from 'react';
import Form from '../../components/Form/Form';
import { useState } from 'react';
import './Login.css';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { LuUser } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { useNavigate } from 'react-router';

function LoginPage() {

  const [isSelected, setIsSelected] = useState(1);

  const handleClick = (button) => {
    setIsSelected(button)
  };

  const fields = [
    { name: 'email', type: 'email', required: true, 'placeholder': "Digite seu e-mail", 'icon': <LuUser/> },
    { name: 'password', type: 'password', required: true, 'placeholder': "Digite sua senha", 'icon': <MdLockOutline/>},
  ];

  const handleFormSubmit = (data: Record<string, string>) => {
    console.log('V');
  };

  const navigate = useNavigate();

  return (
    <>
    <div className='main-div'>
      <header>
      <div className='div-logo-img'>
      </div>
      <div className='div-buttons-options'>
        <div className='div-buttons-options-flex'>
          <button onClick={() => {
            handleClick(1)  
            }}
            className={isSelected === 1 ? 'active' : ''}>
              Sou Cliente
              </button>
          <button onClick={() => {
            handleClick(2)
          }}
          className={isSelected === 2 ? 'active' : ''}>
            Sou Empreendedor
          </button>
        </div>
      </div>
      </header>
      <div className='div-form'>

      <div className='div-form-inputs'>

      <Form fields={fields} textButton='Entrar' onSubmit={handleFormSubmit}/>

      <div className='div-password-options'>
      <label>
      <input type="checkbox" name="remember" />
      <p>Lembrar senha?</p>
      </label>
        <p>Esqueceu sua senha?</p>
      </div>
      <div className='div-btn-submit'>
      <button type='submit' className='btn-submit'>Entrar</button>
      </div>
      </div>

      <p className='p-socials-login'>Entrar com uma conta</p>

      <div className='div-socials-login'>
        <ul className='list-socials-login'>
          <li><FcGoogle /></li>
          <li><ImFacebook2 /></li>
          <li><ImLinkedin /></li>
        </ul>
      </div>

      </div>
      <div className='div-register'>
        <div className='div-register-flex'>
        <p>É novo no BizUp? <span onClick={() => navigate('/cadastro')}>Cadastra-se agora!</span></p>
        </div>
      </div>

    </div>
    </>
  )
};

export default LoginPage;
