import { useEffect, useState } from 'react';
import './App.css';
import Estrutura from './components/Estrutura';

function App() {
  const [items, setItems] = useState([])

function salvar_favoritos(event) {
  
  setItems([...items, event])
  console.log(items)
}
// event.target.parentNode.parentNode.parentNode
// .parentNode.parentNode.parentNode
  return (
      <div>
        <Estrutura salvar_favoritos={salvar_favoritos} items={items} />
        {/* todos os componentes da api são tratados em Estados e enviados 
        diretamente para a estrutura, onde são mostrados na tela*/}
      </div>
  );
}

export default App;