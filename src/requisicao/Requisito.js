// import React from 'react'
// import Estado from '../components/Estado'

// export default function Requisito(props) { 
//     const [estado, set_estado] = useState([])
//     const [noticias, set_noticias] = useState([])

//     fetch(`https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=2b456572eef44b8692eb90b94a661628`)
//     .then(res =>{
//         return res.json()
//     }).then(res=>{
//         props.enviar(res.articles)
//     })
// }

// https://newsapi.in/newsapi/news.php?key=pBtwz5l2XrRCOfc79XrnmlwvKOw7ge&category='category_name

// [{id:0, tipo: 'Noticia', 
//         titulo:"Desemprego cai para 11,2% no trimestre encerrado em janeiro, menor taxa para o período desde 2016",
//         introducao: 'Desempenho do comércio influenciou na queda do desemprego em janeiro - Foto: Tomaz Silva/Agência Brasil A taxa de desocupação caiu para 11,2% no trimestre encerrado em janeiro, recuo de 0,9 ponto percentual na comparação com o trimestre anterior,...',  
//         },
//         {id:1, tipo: 'Noticia', 
//         titulo:"Desemprego cai para 11,2% no trimestre encerrado em janeiro, menor taxa para o período desde 2016",
//         introducao: 'Desempenho do comércio influenciou na queda do desemprego em janeiro - Foto: Tomaz Silva/Agência Brasil A taxa de desocupação caiu para 11,2% no trimestre encerrado em janeiro, recuo de 0,9 ponto percentual na comparação com o trimestre anterior,...',  
//         },
//         {id:2, tipo: 'Noticia', 
//         titulo:"Desemprego cai para 11,2% no trimestre encerrado em janeiro, menor taxa para o período desde 2016",
//         introducao: 'Desempenho do comércio influenciou na queda do desemprego em janeiro - Foto: Tomaz Silva/Agência Brasil A taxa de desocupação caiu para 11,2% no trimestre encerrado em janeiro, recuo de 0,9 ponto percentual na comparação com o trimestre anterior,...',  
//         },
//         {id:3, tipo: 'Noticia', 
//         titulo:"Desemprego cai para 11,2% no trimestre encerrado em janeiro, menor taxa para o período desde 2016",
//         introducao: 'Desempenho do comércio influenciou na queda do desemprego em janeiro - Foto: Tomaz Silva/Agência Brasil A taxa de desocupação caiu para 11,2% no trimestre encerrado em janeiro, recuo de 0,9 ponto percentual na comparação com o trimestre anterior,...',  
//         }]