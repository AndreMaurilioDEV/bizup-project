import React from "react";
import Logo from '../../assets/images/Logo.png';
import Form from '../../components/Form/Form';
import Accordion from 'react-bootstrap/Accordion';
import './Cadastro.css';
import { useNavigate } from "react-router";
import { LuUser } from "react-icons/lu";
import { useState } from "react";
import { MdPhone } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { personalFields, 
  addressFields, addressAccount } from "../../components/Form/FormFields";


function CadastroPage() {

  const navigate = useNavigate();


  const handleFormSubmit = () => {
    event.preventDefault();
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
