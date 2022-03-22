import './App.css';
import Estrutura from './components/Estrutura';

function App() {
  return (
      <div>
        <Estrutura></Estrutura>
        {/* todos os componentes da api são tratados em Estados e enviados 
        diretamente para a estrutura, onde são mostrados na tela*/}
      </div>
  );
}

export default App;
