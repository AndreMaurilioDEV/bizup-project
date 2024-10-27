import React from "react";
import Form from '../../components/Form/Form';
import './Cadastro.css';
import { useNavigate } from "react-router";
import { LuUser } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { MdPhone } from "react-icons/md";

function CadastroPage() {

  const fields = [
    { name: 'nome', 'label': "Nome", type: 'text', required: true, 'placeholder': "Digite seu nome", 'icon': <LuUser/>},
    { name: 'CPF', type: 'text', required: true, 'placeholder': "Digite seu CPF", 'label': "CPF", 'icon': <LuUser/>},
    { name: 'Email', type: 'email', required: true, 'placeholder': "Digite seu e-mail", 'label': "E-mail", 'icon': <MdOutlineEmail/>},
    { name: 'confirm-Email', type: 'email', required: true, 'placeholder': "Confirme seu e-mail", 'label': "Confirmação de e-mail", 'icon': <MdOutlineEmail/>},
    { name: 'password', type: 'password', required: true, 'placeholder': "Digite sua senha", 'label': "Senha", 'icon': <MdLockOutline/>},
    { name: 'confirm-password', type: 'password', required: true, 'placeholder': "Confirme sua senha", 'label': "Confirmação de senha", 'icon': <MdLockOutline/>},
    { name: 'telefone', type: 'tel', required: true, 'placeholder': "Número de telefone", 'label': "Telefone", 'icon': <MdPhone/>},
  ];

  const handleFormSubmit = (data: Record<string, string>) => {
    console.log('V');
  };
  
  const navigate = useNavigate();

  return (
    <div className="main-div-cadastro">
    <div className='div-form'>
      <div className="div-form-title">
      <h1>Cadastro</h1>
      </div>
      <div className='div-form-inputs-cadastro'>

      <Form fields={fields} textButton='Entrar' onSubmit={handleFormSubmit}/>

      <div className='div-terms-input'>
      <label>
      <input type="checkbox" name="terms" />
      <p className="p-terms">Aceitar os termos de uso e privacidade</p>
      </label>
      </div>

      <div className='div-btn-submit'>
      <button type='submit' className='btn-submit'>Cadastrar</button>
      </div>
      </div>
      </div>
      <div className='div-login'>
        <div className='div-login-flex'>
        <p>Já tem uma conta no BizUp? <span onClick={() => navigate('/')}>Faça login agora!</span></p>
        </div>
      </div>
    </div>
  )
};

export default CadastroPage;