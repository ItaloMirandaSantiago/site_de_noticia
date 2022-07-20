import React, { useEffect, useState } from "react";
import Requisito_reserva from '../requisicao/Requisito_reserva'
import img_estrela_acesa from '../imgs/estrela.png'

export default function Estado_Reelese(props){
    const [reelese, set_reelese] = useState()

    useEffect(()=>{
        fetch('https://api.currentsapi.services/v1/latest-news?language=pt&apiKey=TE3HNXhKFKsahgB_6rS4TfwwklJ-5NjOsrWTs5Bii9YrEtCB')
        .then((res)=> res.json())
        .then((res)=> {
          if (res.news.length) {
            set_reelese(res.news) 
          }else{
            set_reelese(Requisito_reserva)
          }
        })
    }, [])

    return(
    <>

        {reelese && (
                        reelese.map((element, index) => (
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
                                      {element.title}
                                    </h2>
                                    <p className="card-text texto">
                                      {element.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            ))
        )}
    </>
    )   
}

//var url = 'https://api.currentsapi.services/v1/latest-news?' +
//'language=us&' +
//'apiKey=TE3HNXhKFKsahgB_6rS4TfwwklJ-5NjOsrWTs5Bii9YrEtCB';
//var req = new Request(url);
//fetch(req)
//.then(function(response) {
  //  console.log(response.json());
//})



  //  useEffect(()=>{
      //  fetch(`https://api.api-futebol.com.br/v1/campeonatos/10`)
    //    .then(res => res.json())
  //      .then(res => {
//            if (res.length) {
          //      set_reelese(res)
        //    }else{
      //          set_reelese(Requisito_reserva[1])
    //        }  
  //      })   
//    }, [])

   // useEffect(()=>{
  //      console.log("rodando")
//    }, [reelese])
