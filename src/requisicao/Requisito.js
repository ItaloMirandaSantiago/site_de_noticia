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