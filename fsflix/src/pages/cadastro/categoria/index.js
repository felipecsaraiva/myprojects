import React from 'react';
import MasterPage from '../../../components/MasterPage';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <MasterPage>
          <form>
            <label>
              Nome da Categoria:
              <input
                type="text"
              />
            </label>
            <button>
              Cadastrar
            </button>
          </form>

          <Link to="/">
          Ir para home
          </Link>
        </MasterPage>
    );
  }
  
  export default CadastroCategoria;
  