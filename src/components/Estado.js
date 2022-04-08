import { useEffect, useState } from "react"
import Requisito_reserva from "../requisicao/Requisito_reserva"
import img_estrela_acesa from '../imgs/estrela.png'

export default function Estado(props) {
  const [noticias, set_noticias] = useState([])

    useEffect(()=>{
      fetch(`http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=10&tipo=noticia`)
        .then(res => res.json())
        .then(res => {
            if (res.length) {
              set_noticias(res)
            } else {
              set_noticias(Requisito_reserva)
            } })          
      }, [])
    return(
      noticias.map((element, index) => (
        <div key={index}>
          <div className='card mb-4 shadow-sm'>
              <div className='card-body tamanho-do-card'>
                <button onClick={()=>{props.salvar_favoritos(element)}}>  <img src={img_estrela_acesa} width='30px' height='30px' 
                className="img_container" alt="salvar" /></button>
                {/* props.salvar_favoritos */}
                <h2 className='card-text border-bottom border-dark titulo_materia'>{element.titulo}</h2>
                <p className='card-text texto'>{element.introducao}</p>
              </div>
          </div>
        </div>
      ))
  )
}