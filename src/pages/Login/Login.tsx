import Logo from '../../assets/images/Logo.png';
import React from 'react';
import Form from '../../components/Form/Form';
import { useState } from 'react';
import './Login.css';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
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
      <img src={Logo} alt="Logotipo BizUp" />
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
      <p>Lembrar senha</p>
      </label>
        <p style={{textDecoration: "underline"}}>Esqueci minha senha</p>
      </div>
      <div className='div-btn-submit'>
      <button type='submit' className='btn-submit'>ENTRAR</button>
      </div>
      <span>OU</span>
      <div className='div-btn-submit'>
      <button type='submit' 
      className='btn-submit btn-submit-secondary' 
      onClick={() => navigate('/cadastro')}>
        CRIAR CONTA
        </button>
      </div>
      </div>
    
      <div className='div-socials-login'>
        <ul className='list-socials-login'>
          <li><button><FcGoogle className='icon-login google-icon'/><span>Fazer login com o Google</span></button></li>
          <li><button><BsFacebook className='icon-login fb-icon'/><span>Conectar com o Facebook</span></button></li>
        </ul>
      </div>

      </div>
    </div>
    </>
  )
};

export default LoginPage;
