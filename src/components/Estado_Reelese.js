import React, { useEffect, useState } from "react";

export default function Estado_Reelese(){
    const [reelese, set_reelese] = useState([])

    useEffect(()=>{
        fetch(`http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=10&tipo=release`)
        // http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=10&tipo=noticia
        .then(res =>{
            return res.json()
        }).then(res=>{
            enviar(res.items)
        })}, [])

        function enviar(res){
            console.log(res)
            let array = []

            res.forEach((element, index) => {
                let juntar = <div key={index}>
                    <div className='card mb-4 shadow-sm'>
                      <div className='card-body tamanho-do-card'>
                        <h2 className='card-text border-bottom border-dark titulo_materia'>{element.titulo}</h2>
                        <p className='card-text texto'>{element.introducao}</p>
                    </div>
                </div>
            </div>
                array.push(juntar)
            })
            set_reelese(array)
          }

    return reelese
}