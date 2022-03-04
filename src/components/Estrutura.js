import React from "react"
import Estado from "./Estado"

export default function estrutura() {
    return(  
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
              <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-1'>
                {/* onde as noticias aparecem */}
                  <Estado></Estado>
              </div>
            </div>
      </div>
    </div>      
</div>)
}