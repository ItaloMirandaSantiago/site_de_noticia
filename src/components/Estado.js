import { useEffect, useState } from "react"

export default function Estado() {
  const [noticias, set_noticias] = useState([])

try{  useEffect(()=>{
      fetch(`http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=10&tipo=noticia`)
      // http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=10&tipo=noticia
        .then(res =>{
            return res.json()
        }).then(res=>{
          enviar(res.items)
        })}, [])
  }catch(err){
    const items_reserva = [{id:0, tipo: 'Noticia', 
        titulo:"Desemprego cai para 11,2% no trimestre encerrado em janeiro, menor taxa para o período desde 2016",
        introducao: 'Desempenho do comércio influenciou na queda do desemprego em janeiro - Foto: Tomaz Silva/Agência Brasil A taxa de desocupação caiu para 11,2% no trimestre encerrado em janeiro, recuo de 0,9 ponto percentual na comparação com o trimestre anterior,...',  
        },
        {id:1, tipo: 'Noticia', 
        titulo:"Desemprego cai para 11,2% no trimestre encerrado em janeiro, menor taxa para o período desde 2016",
        introducao: 'Desempenho do comércio influenciou na queda do desemprego em janeiro - Foto: Tomaz Silva/Agência Brasil A taxa de desocupação caiu para 11,2% no trimestre encerrado em janeiro, recuo de 0,9 ponto percentual na comparação com o trimestre anterior,...',  
        }]
    enviar(items_reserva)
  }

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
    set_noticias(array)
  }
    return noticias
}