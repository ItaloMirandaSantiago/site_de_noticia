import React, { useEffect, useState } from "react";
import Requisito_reserva from '../requisicao/Requisito_reserva'
import img_estrela_acesa from '../imgs/estrela.png'

export default function Futebol(props) {

    const [Fut, set_Fut] = useState([])

    useEffect(()=>{
      fetch(`https://api.currentsapi.services/v1/latest-news?language=pt&apiKey=TE3HNXhKFKsahgB_6rS4TfwwklJ-5NjOsrWTs5Bii9YrEtCB`)
        .then(res => res.json())
        .then(res => {
          if (res.news.length) {
            set_Fut(res.news)
          } else {
            set_Fut(Requisito_reserva[2])
          } })
      }, [])
    
    return (
      <>
      {Fut.map((element, index)=>(
        <div key={index}>
          <a href={element.url} className="decoration">
            <div className="card mb-4 shadow-sm">
              <div className="card-body tamanho-do-card">
                <button onClick={()=>{props.salvar_favoritos(element)}}>  
                {" "}
                    <img src={img_estrela_acesa} width='30px' height='30px' 
                    className="img_container" alt="salvar"/>
                </button>
                <h2 className="card-text border-bottom border-dark titulo_materia">
                  {element.description}
                </h2>
                <p className="card-text texto">
                  {element.description}
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
     
      </>
    )
}