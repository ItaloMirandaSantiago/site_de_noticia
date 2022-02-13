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

      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link efeito family" data-bs-toggle='tab' href="#noticia">Noticia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link tirar_efeito family" data-bs-toggle='tab' href="#release">Release</a>
        </li>
      </ul>

      <div className='tab-content'>
        <div id='noticia' className='tab-pane'>
              {/* comeca aqui */}
              <div className=' border-bottom border-dark'>
              <h2>Notícias</h2>
                <div id='colocar_elemento_na_tela' className='d-flex mw-20 row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'></div>
              </div>
              {/* onde as noticias aparecem */}
        </div>

        <div id='release' className='tab-pane'>
            {/* comeca aqui */}
            <div className=' border-bottom border-dark'>
              <h2>Release</h2>
                <div id='colocar_elemento_na_tela_release' className='d-flex mw-20 row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'></div>
            </div>
            {/* onde as reeleses aparecem */}
        </div>

      </div>      

      <button id='mais' className='btn btn-info me-3 m-4' onClick={requesito}>
      <a class="nav-link" data-bs-toggle='tab' href="#noticia">Carregar</a>
      </button>
    
  </div>

  );
}

  function mostrar(res){
    let elemento_not = ''
    let elemento_rele = '' 

    res.forEach(element => {
      if(element.tipo === "Notícia"){
        let corpo_resposta_not = `  
          <div>
            <div class='card mb-4 shadow-sm'>
                <div class='card-body tamanho-do-card'>
                  <h2 class='card-text border-bottom border-dark titulo_materia'>${element.titulo}</h2>
                  <p class='card-text texto'>${element.introducao}</p>
                </div>
            </div>
          </div>`
        elemento_not += corpo_resposta_not
      }else{
      let corpo_resposta_rele = `  
      <div>
        <div class='card mb-4 shadow-sm'>
            <div class='card-body tamanho-do-card'>
              <h2 class='card-text border-bottom border-dark titulo_materia'>${element.titulo}</h2>
              <p class='card-text texto'>${element.introducao}</p>
            </div>
        </div>
      </div>`
      elemento_rele += corpo_resposta_rele
     }
    })
    document.getElementById('colocar_elemento_na_tela').innerHTML = elemento_not
    document.getElementById('colocar_elemento_na_tela_release').innerHTML = elemento_rele
  }
// colocar as noticias na tela
function requesito() {
  fetch(`http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=6`)
  .then(res =>{
      return res.json()
  }).then(res=>{
      mostrar(res.items)
  })
}
// requisitar noticia
export default App;
