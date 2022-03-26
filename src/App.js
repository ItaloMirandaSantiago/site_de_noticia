import { useEffect, useState } from 'react';
import './App.css';
import Estrutura from './components/Estrutura';

function App() {

  function salvar_favoritos(event) {
    let saveItem = event.target.parentNode.parentNode.parentNode

    localStorage.setItem('element', JSON.stringify(saveItem))

    return console.log(event.target.parentNode.parentNode.parentNode)
    // return console.log(JSON.parse(localStorage.getItem('element'))) 
  }

  return (
      <div>
        <Estrutura salvar_favoritos={salvar_favoritos}></Estrutura>
        {/* todos os componentes da api são tratados em Estados e enviados 
        diretamente para a estrutura, onde são mostrados na tela*/}
      </div>
  );
}

export default App;
