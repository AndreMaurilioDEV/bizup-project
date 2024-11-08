import React, { useState, ReactNode } from 'react';
import { useNavigate } from 'react-router';
import './Form.css'

interface InputField {
  name: string;
  label?: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  icon?: ReactNode;
  warn?: string;
  link_warn?: string
}

interface FormProps {
  fields: InputField[];
  textButton: string;
  onSubmit: (data: Record<string, string>) => void;
}

function Form({fields, onSubmit, textButton} : FormProps) {

  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
    navigate("/")
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} 
        className={`form-input ${field.label ? 'has-label' : ''}`}>
          {field.label ? <label>{field.label}</label> : null}
          <span>{field.icon}</span>
          <input 
          type={field.type}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          required={field.required}
          placeholder={field.placeholder}
          />
          {field.link_warn ? (
          <a href={field.link_warn} target='_blank' rel="noopener noreferrer">
          <p className='p-warn'>{field.warn}</p>
          </a>
          ) : null}
        </div>
      ))}
    </form>
  )
}

export default Form;