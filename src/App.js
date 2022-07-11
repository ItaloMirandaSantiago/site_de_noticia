import { useEffect, useState } from 'react';
import './App.css';
import Estrutura from './components/Estrutura';

function App() {
  const [items, setItems] = useState([])


function resetar(){
  setItems([])
  console.log('rodando')
  // elemento = []
  // resetar toda vez que aperta no button nos favoritos
}

function salvar_favoritos(event) {
  let add_item = true
  console.log(items, 'event', event)
// adiconar elemento para fazer a verificação
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === event.id) {
      alert('Este item já foi adicionado aos favoritos')
      add_item = false
    }
  }
    if (add_item) {
       setItems((e) => [...e, event])
    }
  // adiconar aos favoritos toda vez que apertar na estrela
}

useEffect(()=>{
  let save = JSON.parse(localStorage.getItem('recuperar'))
  if (save) {
    setItems(save)
    // pegar items salvos em favoritos, caso tenha algo
  }
}, [])

useEffect(()=>{
    localStorage.setItem('recuperar',JSON.stringify(items))
  // salvar items do favoritos na memória
}, [items])

  return (
      <div>
        <Estrutura salvar_favoritos={salvar_favoritos} 
        items={items} 
        resetar={resetar}/>
        {/* todos os componentes da api são tratados em Estados e enviados 
        diretamente para a estrutura, onde são mostrados na tela*/}
      </div>
  );
}

export default App;