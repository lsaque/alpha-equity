import React from 'react';
import './style.css';

function Contato() {
  return (
    <section id="contato">
      <div className="container">
        <div className="row">

          <div className="col-12">
            <h1 className="display-3">Gostou? Preencha o formulário<br />indicando a sua demanda!</h1>
          </div>

          <form className="row col-12 form" autoComplete="off">
            <div className="form-floating col-12 col-sm-6">
              <input 
                type="text" 
                autoComplete="off"
                className="form-control shadow-none" 
                id="name-input" 
                placeholder="Nome:"
                required 
              />
              <label htmlFor="name-input">Nome:</label>
            </div>

            <div className="form-floating col-12 col-sm-6">
              <input 
                type="email" 
                autoComplete="off"
                className="form-control shadow-none" 
                id="email-input" 
                placeholder="E-mail:"
                pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" 
                required 
              />
              <label htmlFor="email-input">E-mail:</label>
            </div>

            <div className="form-floating col-12 col-sm-6">
              <input 
                type="text" 
                autoComplete="off"
                className="form-control shadow-none" 
                id="assunto-input" 
                placeholder="Assunto:"
                required 
              />
              <label htmlFor="assunto-input">Assunto:</label>
            </div>

            <div className="form-floating col-12 col-sm-6">
              <input 
                type="number" 
                autoComplete="off"
                className="form-control shadow-none" 
                id="telefone-input" max="11" min="9"
                placeholder="Telefone:" 
                required 
              />
              <label htmlFor="telefone-input">Telefone:</label>
            </div>

            <div className="form-floating col-12">
              <textarea 
                type="textarea" 
                className="form-control shadow-none" 
                id="mensagem-input" 
                placeholder="Mensagem:"
                autoComplete="off"
                required 
              />
              <label htmlFor="mensagem-input">Mensagem:</label>
            </div>

            <div className="button-box">
              <button type="submit" href="..."><span>Enviar</span></button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contato;