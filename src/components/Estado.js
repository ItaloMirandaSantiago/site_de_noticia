import { useEffect, useState } from "react"

export default function Estado() {
  const [estado, set_estado] = useState([])
  const [noticias, set_noticias] = useState([])

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=2b456572eef44b8692eb90b94a661628`)
    .then(res =>{
        return res.json()
    }).then(res=>{
      enviar(res.articles)
    })
  }, [])

  function enviar(res){
      let array = []
      res.forEach((element, index) => {
        let juntar = <div key={index}>
          <div className='card mb-4 shadow-sm'>
              <div className='card-body tamanho-do-card'>
                <h2 className='card-text border-bottom border-dark titulo_materia'>{element.title}</h2>
                <p className='card-text texto'>{element.content}</p>
              </div>
          </div>
        </div>
          array.push(juntar)
    })
    set_noticias(array)
  }
    return noticias
}