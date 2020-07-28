import React from 'react';
import MasterPage from '../../../components/MasterPage';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <MasterPage>
          <h1>Novo Video</h1>
          <Link to="/cadastro/categoria">
            Nova Categoria
          </Link>
        </MasterPage>
    );
  }
  
  export default CadastroVideo;
  