import React from 'react';
import Carddevisitas from './components/carddevisitas';
import Imagem from './components/imagem';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Carddevisitas
        nome="Nicolas Cage"
        cargo="Ator"
        empresa="Hollywood"
        email="NicolasCage@gmail.com"
        telefone="(51) 4002-8922"
      />
    </div>
  );
}

export default App;
