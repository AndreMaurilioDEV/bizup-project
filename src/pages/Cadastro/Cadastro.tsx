import React from "react";
import Logo from '../../assets/images/Logo.png';
import Form from '../../components/Form/Form';
import Accordion from 'react-bootstrap/Accordion';
import './Cadastro.css';
import { useNavigate } from "react-router";
import { LuUser } from "react-icons/lu";
import { useState, useEffect } from "react";
import { MdPhone } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';

function CadastroPage() {

  const [activeKey, setActiveKey] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  const personalFields = [
    { name: 'nome', label: "Nome", type: 'text', required: true, placeholder: "Digite seu nome", icon: <LuUser /> },
    { name: 'sobrenome', type: 'text', required: true, placeholder: "Digite seu sobrenome", label: "Sobrenome", icon: <LuUser /> },
    { name: 'CPF', type: 'text', required: true, placeholder: "Digite seu CPF", label: 'CPF', icon: <LuUser /> },
    { name: 'telefone', type: 'tel', required: true, placeholder: "DDD e número de celular", label: "Telefone", icon: <MdPhone /> },
  ];

  const addressFields = [
    { name: 'CEP', label: "CEP", type: 'number', required: true,'warn': 'Não sei meu CEP', 'link_warn':
     'https://buscacepinter.correios.com.br/app/endereco/index.php'},
    { name: 'Endereco', type: 'text', required: true, label: "Endereço" },
    { name: 'numero', type: 'number', required: true, label: "Número"},
    { name: 'complemento', type: 'text', required: false, label: "Complemento (opcional)" },
    { name: 'estado', type: 'text', required: true, label: "Estado" },
    { name: 'bairro', type: 'text', required: true, label: 'Bairro' },
    { name: 'cidade', type: 'text', required: true, label: "Cidade" },
  ];

  const addressAccount = [
    { name: 'e-mail', type: 'text', required: true, 'placeholder': 'Seu e-mail',icon: <LuUser /> },
    { name: 'senha', type: 'password', required: true, 'placeholder': 'Senha',icon: <MdLockOutline /> },
  ];

  const handleFormSubmit = () => {
    //
  };

  return (
    <div className="main-div-cadastro">
      <header>
        <div className='div-logo-img-cadastro'>
          <img src={Logo} alt="Logotipo BizUp" onClick={() => navigate('/')}/>
        </div>
      </header>
      <div className='div-form'>
        <div className="div-form-title">
          <h1>Cadastro</h1>
        </div>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accordion-header">1.Dados Pessoais</Accordion.Header>
            <Accordion.Body>
              <div className='div-form-inputs-cadastro'>
                <Form fields={personalFields} textButton='Continuar' onSubmit={handleFormSubmit} />
              </div>
              <div className='div-btn-submit-cadastro'>
              <button type='button' onClick={handleFormSubmit}>Continuar</button>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>2.Endereço</Accordion.Header>
            <Accordion.Body>
              <div className='div-form-inputs-cadastro'>
                <Form fields={addressFields} textButton='Continuar' onSubmit={handleFormSubmit} />
              </div>
              <div className='div-btn-submit-cadastro'>
                <button type='button' onClick={handleFormSubmit}>Continuar</button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        

        <Accordion.Item eventKey="2">
            <Accordion.Header>3.Sobre sua conta</Accordion.Header>
            <Accordion.Body>
              <div className='div-form-inputs-cadastro'>
                <Form fields={addressAccount} textButton='Continuar' onSubmit={handleFormSubmit} />
              </div>
              <div className='div-terms-input-cadastro'>
              <label>
              <input type="checkbox" name="terms" />
              <p className="p-terms">Quero receber ofertas e novidades por e-mail</p>
            </label>
            <label>
              <input type="checkbox" name="terms" />
              <p className="p-terms">Concordo com o uso dos meus dados</p>
            </label>
               </div>
              <div className='div-btn-submit-cadastro'>
                <button type='submit'>Cadastrar</button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      
      
        <div className='div-login'>
          <div className='div-login-flex'>
            <p>Já tem uma conta no BizUp? <span onClick={() => navigate('/')}>Faça login agora!</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroPage;
