import React, { useEffect, useState } from "react";
import Requisito_reserva from '../requisicao/Requisito_reserva'
import img_estrela_acesa from '../imgs/estrela.png'

export default function Futebol(props) {

    const [Fut, set_Fut] = useState([])

    useEffect(()=>{
      fetch(`http://api.football-data.org/v1/soccerseasons`)
        .then(res => res.json())
        .then(res => console.log(res) )
        
        .catch(error => {
          let array_noticia = []
            for (let i = 0; i < Requisito_reserva.length; i++) {
              if (Requisito_reserva[i].tipo === "Noticia"){
                array_noticia.push(Requisito_reserva[i])
              }
            }
            console.log(array_noticia)
            enviar(array_noticia)
          })
      }, [])

  function enviar(res){
      let array = []

      res.forEach((element, index) => {
        let juntar = <div key={index}>
          <div className='card mb-4 shadow-sm'>
              <div className='card-body tamanho-do-card'>
                <button onClick={()=>{props.salvar_favoritos(element)}}>  <img src={img_estrela_acesa} width='30px' height='30px' className="img_container"/></button>
                {/* props.salvar_favoritos */}
                <h2 className='card-text border-bottom border-dark titulo_materia'>{element.titulo}</h2>
                <p className='card-text texto'>{element.introducao}</p>
              </div>
          </div>
        </div>

        array.push(juntar)
    })
    set_Fut(array)
  }
    return Fut
}

// http://api.football-data.org/v1/soccerseasons