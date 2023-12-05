
import React from 'react';
import PropTypes from 'prop-types';

const BoasVindas = (props) => {
  const { nome } = props;

  return (
    <section style={{ textAlign: 'center' }}>
      <h1>Bem-vindo, {nome}!</h1>
      <p style={{ color: 'blue' }}>Seja bem-vindo ao mundo do React.</p>
    </section>
  );
};

BoasVindas.defaultProps = {
  nome: 'Visitante',
};

BoasVindas.propTypes = {
  nome: PropTypes.string,
};

export default BoasVindas;
