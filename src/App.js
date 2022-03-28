import { useEffect, useState } from 'react';
import './App.css';
import Estrutura from './components/Estrutura';

function App() {
  const [items, setItems] = useState([])
  let elemento = []

function salvar_favoritos(event) {
  let save = JSON.parse(localStorage.getItem('recuperar'))
  elemento = [...elemento, event]
  setItems([...elemento])
}

useEffect(()=>{
  let save = JSON.parse(localStorage.getItem('recuperar'))
  if (save) {
    setItems(save)
    elemento = [...save]
  }
}, [])

useEffect(()=>{
  localStorage.setItem('recuperar',JSON.stringify(items))
  // salvar items do favoritos na memoria
}, [items])


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