import React from 'react';
import MasterPage from '../../../components/MasterPage';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <MasterPage>
          <h1>Nova Categoria</h1>
          <Link to="/cadastro/categoria">
            Nova Categoria
          </Link>
        </MasterPage>
    );
  }
  
  export default CadastroCategoria;
  