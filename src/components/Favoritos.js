import React, { useEffect } from "react";
import img_estrela_acesa from '../imgs/estrela.png'

export default function Favoritos(props){

    let item_aviso = [{introducao:'Para salvar alguma notícia, é necessário que aperte na estrela ao lado do titulo idêntica a desta mensagem', 
    titulo:'Nada salvo atualmente'}]
    let verdadeiro = false

    function verificar() {
        if (props.items.length === 0) {           
            verdadeiro = true
        }else{
            
            verdadeiro = false
        }
    }

    useEffect(()=>{
        verificar()
    }, [])

return (

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-1">
        {   
                verdadeiro ?
               
                    item_aviso.map((item, index)=>{

                        return(
                            <div key={index}>    
                                <div className='card mb-4 shadow-sm'>
                                    <div className='card-body tamanho-do-card'>
                                        <button><img src={img_estrela_acesa} width='30px' height='30px' className="img_container" alt="salvar"/></button>
                                        {/* props.salvar_favoritos */}
                                        <h2 className='card-text border-bottom border-dark titulo_materia'>{item.titulo}</h2>
                                        <p className='card-text texto'>{item.introducao}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    
                    })
                
                    :

                    props.items.map((item, index)=> {
                    
                        return(
                            <div key={index}>    
                                <div className='card mb-4 shadow-sm'>
                                    <div className='card-body tamanho-do-card'>
                                        <button><img src={img_estrela_acesa} width='30px' height='30px' className="img_container" alt="salvar"/></button>
                                        {/* props.salvar_favoritos */}
                                        <h2 className='card-text border-bottom border-dark titulo_materia'>{item.titulo}</h2>
                                        <p className='card-text texto'>{item.introducao}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })

        }
    </div>

)}



