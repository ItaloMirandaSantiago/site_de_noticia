import './App.css';
function App() {
  
  return (
  <div className="App">

      <menu className='d-flex justify-content-evenly align-items-center'>

        <img href='../imgs/noticia.png' />

      {/* imagem do menu */}
          <nav className='d-flex justify-content-between'>
            <a className='me-3 link-dark efeito family'>Inicio</a>
            <a className='me-3 link-dark efeito family'>Sobre</a>
            <a className='me-3 link-dark efeito family'>Contato</a>
          </nav>
          {/* abas */}
      </menu>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link efeito family" data-bs-toggle='tab' href="#noticia">Noticia</a>
        </li>
      </ul>

      <div className='tab-content'>
        <div id='noticia' className='tab-pane'>
              {/* comeca aqui */}
              <div className=' border-bottom border-dark'>
              <h2>Notícias</h2>
                <div id='colocar_elemento_na_tela' className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-1'></div>
              </div>
              {/* onde as noticias aparecem */}
        </div>
      </div>      

      <button id='mais' className='btn btn-info me-3 m-4' onClick={requesito}>


      <a className="nav-link" data-bs-toggle='tab' href="#noticia">Carregar</a>
      </button>
    
  </div>

  );
}


function mostrar(res){
  let elemento_not = ''

  res.forEach(element => {
      let corpo_resposta_not = `  
        <div>
          <div class='card mb-4 shadow-sm'>
              <div class='card-body tamanho-do-card'>
                <h2 class='card-text border-bottom border-dark titulo_materia'>${element.title}</h2>
                <p class='card-text texto'>${element.content}</p>
              </div>
          </div>
        </div>`

      elemento_not += corpo_resposta_not   
  })
  document.getElementById('colocar_elemento_na_tela').innerHTML = elemento_not
}

// colocar as noticias na tela

function requesito() {
fetch(`https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=2b456572eef44b8692eb90b94a661628`)
.then(res =>{
    return res.json()
}).then(res=>{
  mostrar(res.articles)
})
}
// requisitar noticia


export default App;
