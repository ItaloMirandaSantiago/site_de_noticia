import { useEffect, useState } from 'react';
import './App.css';
import Estrutura from './components/Estrutura';

function App() {
  const [items, setItems] = useState([])
  var elemento = []

function resetar(){
  setItems([])
  elemento = []
  // resetar toda vez que aperta no button dos favoritos
}

function salvar_favoritos(event) {
  elemento = [...elemento, event]
// adiconar elemento para fazer a verificação
  for (let i = 0; i <= elemento.length -2; i++) {
    if (elemento[elemento.length -1].id === elemento[i].id) {
    alert('Este item já foi adicionado aos favoritos')
    elemento.pop()
    }
  }
    setItems([...elemento])
  // adiconar aos favoritos toda vez que apertar na estrela
}

useEffect(()=>{
  let save = JSON.parse(localStorage.getItem('recuperar'))
  if (save) {
    setItems(save)
    elemento = [...save]
    // pegar items salvos em favoritos, caso tenha algo
  }
}, [])

useEffect(()=>{
    localStorage.setItem('recuperar',JSON.stringify(items))
  // salvar items do favoritos na memória
}, [items])

  return (
      <div>
        <Estrutura salvar_favoritos={salvar_favoritos} items={items} resetar={resetar}/>
        {/* todos os componentes da api são tratados em Estados e enviados 
        diretamente para a estrutura, onde são mostrados na tela*/}
      </div>
  );
}

export default App;