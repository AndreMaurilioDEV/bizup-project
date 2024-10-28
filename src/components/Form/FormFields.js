import { PhoneIcon, UserIcon, LockIcon } from "./icons";

export const personalFields = [
  { name: 'nome', label: "Nome", type: 'text', required: true, placeholder: "Digite seu nome", icon: UserIcon },
  { name: 'sobrenome', type: 'text', required: true, placeholder: "Digite seu sobrenome", label: "Sobrenome", icon: UserIcon },
  { name: 'CPF', type: 'text', required: true, placeholder: "Digite seu CPF", label: 'CPF', icon: UserIcon },
  { name: 'telefone', type: 'tel', required: true, placeholder: "DDD e número de celular", label: "Telefone", icon: PhoneIcon },
];

export const addressFields = [
  { name: 'CEP', label: "CEP", type: 'number', required: true, warn: 'Não sei meu CEP', 
  link_warn: 'https://buscacepinter.correios.com.br/app/endereco/index.php' },
  { name: 'Endereco', type: 'text', required: true, label: "Endereço" },
  { name: 'numero', type: 'number', required: true, label: "Número" },
  { name: 'complemento', type: 'text', required: false, placeholder: "Complemento (opcional)" },
  { name: 'bairro', type: 'text', required: true, label: 'Bairro' },
  { name: 'estado', type: 'text', required: true, label: "Estado" },
  { name: 'cidade', type: 'text', required: true, label: "Cidade" },
  { name: 'referencia', type: 'text', required: true, placeholder: "Ponto de referência (opcional)" },
];

export const addressAccount = [
  { name: 'e-mail', type: 'text', required: true, placeholder: 'Seu e-mail', icon: UserIcon },
  { name: 'senha', type: 'password', required: true, placeholder: 'Senha', icon: UserIcon },
];

export const loginFields = [
  { name: 'email', type: 'email', required: true, 'placeholder': "Digite seu e-mail", 'icon': UserIcon },
  { name: 'password', type: 'password', required: true, 'placeholder': "Digite sua senha", 'icon': LockIcon},
];
