import React from 'react';
import '../styles/carddevisitas.css';
import Imagem from './imagem';

const Carddevisitas = (props) => {
  const { nome, cargo, empresa, email, telefone } = props;

  return (
    <div className="card">
      <h2>{nome}</h2>
      <p>{cargo}</p>
      <p>{empresa}</p>
      <p>Email: {email}</p>
      <p>Telefone: {telefone}</p>
      <Imagem className="Cage"/>
    </div>
  );
};

export default Carddevisitas;