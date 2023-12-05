import React from 'react'
import PropTypes from 'prop-types';

const BoasVindas = (props) => {
  return (
    <div>
         <section style={{ textAlign: 'center' }}>
      <h1>{nome}!</h1>
      <p style={{ color: 'blue' }}>Seja bem-vindo ao mundo do React.</p>
    </section>
    </div>
  )
}

BoasVindas.defaultProps = {
    nome: 'Bem-vindo',
};
BoasVindas.propTypes = {
  nome: PropTypes.string,
}

export default BoasVindas