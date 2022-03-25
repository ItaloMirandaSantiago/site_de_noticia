import { useEffect, useState } from 'react';
import './App.css';
import Estrutura from './components/Estrutura';

function App() {
  const [save_element, set_save_element] = useState([])

  function salvar_favoritos(event) {
    localStorage.setItem('element', event.target.parentNode.parentNode.parentNode)
    return console.log(localStorage.getItem('element')) 
  }

  useEffect(()=>{
   var ele = localStorage.getItem('element')
  }, [save_element])

  return (
      <div>
        <div className='container_element'>

        </div>

        <Estrutura salvar_favoritos={salvar_favoritos}></Estrutura>
        {/* todos os componentes da api são tratados em Estados e enviados 
        diretamente para a estrutura, onde são mostrados na tela*/}
      </div>
  );
}

export default App;
